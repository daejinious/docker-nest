import { Injectable, NotFoundException } from '@nestjs/common';
import { Board } from './board.entity';
import CreateBoardDto from './dto/create-board.dto';
import { BoardRepository } from './boards.repository';
import { BoardStatus } from './board-status.enum';
import { User } from '../auth/user.entity';

@Injectable()
export class BoardsService {
  constructor(private boardRepository: BoardRepository) {}

  async getAllBoards(): Promise<Board[]> {
    return await this.boardRepository.find();
  }
  // getAllBoards(): Board[] {
  //   return this.boards;
  // }
  //

  createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board> {
    return this.boardRepository.createAndSave(createBoardDto, user);
  }

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

  async deleteBoard(id: number) {
    await this.boardRepository.findAndDelete(id);
  }
  // removeBoard(id: string): void {
  //   const found = this.getBoardById(id);
  //   this.boards = this.boards.filter((board) => found.id === board.id);
  // }
  //

  async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
    const board: Board = await this.getBoardById(id);
    board.status = status;

    await this.boardRepository.save(board);
    return board;
  }
  // updateBoardStatus(id: string, status: BoardStatus): Board {
  //   const board: Board = this.getBoardById(id);
  //   board.status = status;
  //
  //   return board;
  // }
}
