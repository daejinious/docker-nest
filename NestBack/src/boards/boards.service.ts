import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import CreateBoardDto from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto;
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);
    return board;
  }

  getBoardById(id: string): Board {
    const board = this.boards.find((board) => id === board.id);

    if (!board) {
      throw new NotFoundException(`게시물을 찾을 수 없습니다.`);
    }

    return board;
  }

  removeBoard(id: string): void {
    const found = this.getBoardById(id);
    this.boards = this.boards.filter((board) => found.id === board.id);
  }

  updateBoardStatus(id: string, status: BoardStatus): Board {
    const board: Board = this.getBoardById(id);
    board.status = status;

    return board;
  }
}
