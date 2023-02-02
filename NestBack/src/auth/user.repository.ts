import { DataSource, Repository } from 'typeorm';
import { User } from './user.entity';
import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import * as bcrypt from 'bcrypt';
import { LoginCredentialsDto } from './dto/login-credentials.dto';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<User> {
    const { username, userId, password } = authCredentialsDto;

    const saltRound = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, saltRound);

    const user = this.create({
      username,
      user_id: userId,
      password: hashedPassword,
    });

    try {
      await this.save(user);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException(`Existing user id ${userId}`);
      }

      throw new InternalServerErrorException();
    }
    return user;
  }

  async signIn(loginCredentialsDto: LoginCredentialsDto): Promise<string> {
    const { userId, password } = loginCredentialsDto;
    const user = await this.findOneBy({ user_id: userId });

    if (user && (await bcrypt.compare(password, user.password))) {
      return 'login success';
    }

    throw new UnauthorizedException('login failed');
  }
}
