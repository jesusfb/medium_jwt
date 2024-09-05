import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BooksController } from './book.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [BooksController],
  providers: [BookService],
  imports: [PrismaModule],
})
export class BookModule {}
