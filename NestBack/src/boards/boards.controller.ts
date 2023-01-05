import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Board } from './board.model';
import { BoardsService } from './boards.service';
import CreateBoardDto from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Get()
  getAll(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post()
  createBoard(@Body() createBoardDto: CreateBoardDto): Board {
    return this.boardsService.createBoard(createBoardDto);
  }

  @Get('/:id')
  getBoardById(@Param('id') boardId): Board {
    return this.boardsService.getBoardById(boardId);
  }

  @Delete('/:id')
  deleteBoard(@Param('id') boardId: string): Board[] {
    this.boardsService.removeBoard(boardId);
    return this.boardsService.getAllBoards();
  }
}
