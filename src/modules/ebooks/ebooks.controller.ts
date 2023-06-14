import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { I18n, I18nContext } from 'nestjs-i18n';
import { EbooksService } from './ebooks.service';
import { CreateEbookDTO, UpdateEbookDTO } from './dto';

@Controller('ebooks')
export class EbooksController {
  constructor(private readonly ebooksService: EbooksService) {}

  @Post('/')
  create(
    @Body() createEbookDTO: CreateEbookDTO,
    @I18n() i18nContext: I18nContext,
  ) {
    return this.ebooksService.create(createEbookDTO, i18nContext);
  }

  @Get('/')
  findAll() {
    return this.ebooksService.findAll();
  }

  @Get('/:id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
    @I18n() i18nContext: I18nContext,
  ) {
    return this.ebooksService.findOne(id, i18nContext);
  }

  @Get('/bySlug/:id')
  findOneBySlug(
    @Param('id') id: string,
    @I18n() i18nContext: I18nContext,
  ) {
    return this.ebooksService.findOneBySlug(id, i18nContext);
  }

  @Put('/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateEbookDTO: UpdateEbookDTO,
    @I18n() i18nContext: I18nContext,
  ) {
    return this.ebooksService.update(id, updateEbookDTO, i18nContext);
  }

  @Delete('/:id')
  async remove(
    @Param('id', ParseIntPipe) id: number,
    @I18n() i18nContext: I18nContext,
  ) {
    return await this.ebooksService.remove(id, i18nContext);
  }

  @Get('/downloadBySlug/:id')
  getSrcBySlug(
    @Param('id') id: string,
    @I18n() i18nContext: I18nContext,
  ) {
    return this.ebooksService.getSrcBySlug(id, i18nContext);
  }
}
