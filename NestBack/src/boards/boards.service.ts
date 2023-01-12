import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board) private boardRepository: Repository<Board>,
  ) {}
  // getAllBoards(): Board[] {
  //   return this.boards;
  // }
  //
  // createBoard(createBoardDto: CreateBoardDto) {
  //   const { title, description } = createBoardDto;
  //   const board: Board = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: BoardStatus.PUBLIC,
  //   };
  //
  //   this.boards.push(board);
  //   return board;
  // }
  //

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOneBy({ id });

    if (!found) {
      throw new NotFoundException(`Can't found board with id ${id}`);
    }

    return found;
  }
  // getBoardById(id: string): Board {
  //   const board = this.boards.find((board) => id === board.id);
  //
  //   if (!board) {
  //     throw new NotFoundException(`게시물을 찾을 수 없습니다.`);
  //   }
  //
  //   return board;
  // }
  //
  // removeBoard(id: string): void {
  //   const found = this.getBoardById(id);
  //   this.boards = this.boards.filter((board) => found.id === board.id);
  // }
  //
  // updateBoardStatus(id: string, status: BoardStatus): Board {
  //   const board: Board = this.getBoardById(id);
  //   board.status = status;
  //
  //   return board;
  // }
}
