import { Module } from '@nestjs/common';
import { EbooksService } from './ebooks.service';
import { EbooksController } from './ebooks.controller';
import { PrismaClientModule } from 'src/libs/prisma-client/src';
import { EbooksRepository } from './ebooks.repository';

@Module({
  controllers: [EbooksController],
  providers: [EbooksService, EbooksRepository],
  imports: [PrismaClientModule],
})
export class EbookModule {}
