import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import CreateBoardDto from './dto/create-board.dto';
import { Board } from './board.entity';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}
  //

  @Get()
  getAll(): Promise<Board[]> {
    return this.boardsService.getAllBoards();
  }
  // @Get()
  // getAll(): Board[] {
  //   return this.boardsService.getAllBoards();
  // }
  //

  @Post()
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardsService.createBoard(createBoardDto);
  }
  // @Post()
  // @UsePipes(ValidationPipe)
  // createBoard(@Body() createBoardDto: CreateBoardDto): Board {
  //   return this.boardsService.createBoard(createBoardDto);
  // }
  //

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardsService.getBoardById(id);
  }
  // @Get('/:id')
  // getBoardById(@Param('id') boardId): Board {
  //   return this.boardsService.getBoardById(boardId);
  // }
  //
  @Delete('/:id')
  deleteBoard(@Param('id', ParseIntPipe) boardId: number): Promise<void> {
    return this.boardsService.deleteBoard(boardId);
  }
  // @Delete('/:id')
  // deleteBoard(@Param('id') boardId: string): Board[] {
  //   this.boardsService.removeBoard(boardId);
  //   return this.boardsService.getAllBoards();
  // }
  //
  // @Patch('/:id/status')
  // updateBoardStatus(
  //   @Param('id') boardId: string,
  //   @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  // ): Board {
  //   return this.boardsService.updateBoardStatus(boardId, status);
  // }
}
