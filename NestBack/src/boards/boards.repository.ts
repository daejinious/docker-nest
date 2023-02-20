import { DataSource, Repository } from 'typeorm';
import { Board } from './board.entity';
import CreateBoardDto from './dto/create-board.dto';
import { BoardStatus } from './board-status.enum';
import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../auth/user.entity';

@Injectable()
export class BoardRepository extends Repository<Board> {
  constructor(private dataSource: DataSource) {
    super(Board, dataSource.createEntityManager());
  }

  async createAndSave(
    createBoardDto: CreateBoardDto,
    user: User,
  ): Promise<Board> {
    const { title, description } = createBoardDto;
    const board = this.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
      user,
    });

    await this.save(board);

    return board;
  }

  async findAndDelete(id: number): Promise<void> {
    // delete는 { row: [], affected: 0 } 이와 같이 return 객체가 존재
    // 없는 id로 삭제를 해도 에러를 보내지 않음
    const result = await this.delete({ id });

    // affected 값을 통해 삭제된 row가 있는지 확인
    if (result.affected === 0) {
      throw new NotFoundException(`Can't found with id ${id}`);
    }

    // remove: 무조건 존재하는 이이템을 삭제
    // 게시물이 없는 경우 not found exception 을 return
    // 삭제 처리하는 로직에서 database를 두번 접근 하기 때문에 delete를 사용
  }
}
