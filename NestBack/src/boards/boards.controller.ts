import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import CreateBoardDto from './dto/create-board.dto';
import { Board } from './board.entity';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { BoardStatus } from './board-status.enum';
import { AuthGuard } from '@nestjs/passport';

@Controller('boards')
@UseGuards(AuthGuard())
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

  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  ): Promise<Board> {
    return this.boardsService.updateBoardStatus(id, status);
  }
  // @Patch('/:id/status')
  // updateBoardStatus(
  //   @Param('id') boardId: string,
  //   @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  // ): Board {
  //   return this.boardsService.updateBoardStatus(boardId, status);
  // }
}
