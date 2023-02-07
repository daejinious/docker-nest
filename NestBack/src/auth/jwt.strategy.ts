import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from './user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userRepository: UserRepository) {
    super({
      secretOrKey: 'Secret1234',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload): Promise<User> {
    const { userId } = payload;
    const user: User = await this.userRepository.findOneBy({ user_id: userId });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
