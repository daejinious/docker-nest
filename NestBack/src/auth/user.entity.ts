import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Board } from '../boards/board.entity';

@Entity()
@Unique(['user_id'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: string;

  @Column({
    select: false,
  })
  password: string;

  @Column()
  username: string;

  @OneToMany(() => Board, (board) => board.user, { eager: true })
  boards: Board[];
}
