import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { BookService } from './book.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('books')
@UseGuards(JwtAuthGuard)
export class BooksController {
  constructor(private readonly booksService: BookService) {}

  @Post()
  create(@Body() createBookDto, @Request() req) {
    return this.booksService.create({...createBookDto, userId: req.user.userId });
  }

  @Get()
  findAll(@Request() req) {
    return this.booksService.findAll(req.user.userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Request() req) {
    return this.booksService.findOne(+id, req.user.userId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto, @Request() req) {
    return this.booksService.update(+id, updateBookDto, req.user.userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Request() req) {
    return this.booksService.remove(+id, req.user.userId);
  }
}