import { Injectable, BadRequestException } from '@nestjs/common';
import { EbooksRepository } from './ebooks.repository';
import { Prisma } from '@prisma/client';
import { CreateEbookDTO, UpdateEbookDTO } from './dto';

import { I18n } from 'src/i18n';
import { I18nContext } from 'nestjs-i18n';

@Injectable()
export class EbooksService {
  constructor(private readonly ebooksRepository: EbooksRepository) {}

  async create(createEbookDTO: CreateEbookDTO, i18nContext: I18nContext) {
    const created = await this.ebooksRepository.create(createEbookDTO);

    return created;
  }

  findAll() {
    return this.ebooksRepository.findAll();
  }

  async findOne(ebookId: number, i18nContext: I18nContext) {
    const hasEbookData = await this.ebooksRepository.findOne(ebookId);

    if (!hasEbookData) {
      throw new BadRequestException(
        i18nContext.translate(I18n.EBOOKS_SERVICE_EBOOK_NOT_FOUND.message),
      );
    }

    return hasEbookData;
  }

  async findOneBySlug(ebookSlug: string, i18nContext: I18nContext) {
    const hasEbookData = await this.ebooksRepository.findOneBySlug(ebookSlug);

    if (!hasEbookData) {
      throw new BadRequestException(
        i18nContext.translate(I18n.EBOOKS_SERVICE_EBOOK_NOT_FOUND.message),
      );
    }

    return hasEbookData;
  }

  async update(
    ebookId: number,
    updateEbookDTO: UpdateEbookDTO,
    i18nContext: I18nContext,
  ) {
    const hasEbookData = await this.ebooksRepository.findOne(ebookId);

    if (!hasEbookData) {
      throw new BadRequestException(
        i18nContext.translate(I18n.EBOOKS_SERVICE_EBOOK_NOT_FOUND.message),
      );
    }

    const inputUpdateEbookDTO: Prisma.EbookUpdateInput = {
      Title: updateEbookDTO.Title,
      Slug: updateEbookDTO.Slug,
      Image: updateEbookDTO.Image,
      Author: updateEbookDTO.Author,
      Price: updateEbookDTO.Price,
      Description: updateEbookDTO.Description,
    };

    return await this.ebooksRepository.update(ebookId, inputUpdateEbookDTO);
  }

  async remove(id: number, i18nContext: I18nContext) {
    const hasEbookData = await this.ebooksRepository.findOne(id);

    if (!hasEbookData)
      throw new BadRequestException(
        i18nContext.translate(I18n.EBOOKS_SERVICE_EBOOK_NOT_FOUND.message),
      );

    const { Title } = await this.ebooksRepository.remove(id);

    return {
      success: i18nContext.translate(I18n.EBOOKS_SERVICE_EBOOK_DELETED.message, {
        args: { Title },
      }),
    };
  }

  async getSrcBySlug(ebookSlug: string, i18nContext: I18nContext) {
    const hasEbookData = await this.ebooksRepository.getSrcBySlug(ebookSlug);

    if (!hasEbookData) {
      throw new BadRequestException(
        i18nContext.translate(I18n.EBOOKS_SERVICE_EBOOK_NOT_FOUND.message),
      );
    }

    return hasEbookData;
  }
}
