import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { BoardsService } from './boards.service';
import CreateBoardDto from './dto/create-board.dto';
import {BoardStatusValidationPipe} from "./pipes/board-status-validation.pipe";

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Get()
  getAll(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post()
  @UsePipes(ValidationPipe)
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

  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id') boardId: string,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  ): Board {
    return this.boardsService.updateBoardStatus(boardId, status);
  }
}
