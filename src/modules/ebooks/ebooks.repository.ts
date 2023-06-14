import { PrismaService } from 'src/libs/prisma-client/src';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class EbooksRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(ebook: Omit<Prisma.EbookCreateManyInput, 'EbookID'>) {
    return this.prismaService.ebook.create({
      data: ebook,
      select: {
        EbookID: true,
        Title: true,
        Slug: true,
        Image: true,
        Src: true,
        Author: true,
        Price: true,
        Description: true,
        CreatedAt: true,
        UpdatedAt: true,
      },
    });
  }

  findAll() {
    return this.prismaService.ebook.findMany({
      select: {
        EbookID: true,
        Title: true,
        Slug: true,
        Image: true,
        Author: true,
        Price: true,
        Description: true,
        CreatedAt: true,
        UpdatedAt: true,
      },
    });
  }

  findOne(ebookId: number) {
    return this.prismaService.ebook.findUnique({
      where: {
        EbookID: ebookId,
      },
      select: {
        EbookID: true,
        Title: true,
        Slug: true,
        Image: true,
        Author: true,
        Price: true,
        Description: true,
        CreatedAt: true,
        UpdatedAt: true,
      },
    });
  }

  findOneBySlug(ebookSlug: string) {
    return this.prismaService.ebook.findUnique({
      where: {
        Slug: ebookSlug,
      },
      select: {
        EbookID: true,
        Title: true,
        Slug: true,
        Image: true,
        Author: true,
        Price: true,
        Description: true,
        CreatedAt: true,
        UpdatedAt: true,
      },
    });
  }

  update(id: number, ebook: Prisma.EbookUpdateInput) {
    return this.prismaService.ebook.update({
      where: {
        EbookID: id,
      },
      select: {
        EbookID: true,
        Title: true,
        Slug: true,
        Image: true,
        Author: true,
        Price: true,
        Description: true,
        CreatedAt: true,
        UpdatedAt: true,
      },
      data: ebook,
    });
  }

  remove(id: number) {
    return this.prismaService.ebook.delete({
      where: {
        EbookID: id,
      },
    });
  }

  getSrcBySlug(ebookSlug: string) {
    return this.prismaService.ebook.findUnique({
      where: {
        Slug: ebookSlug,
      },
      select: {
        Src: true
      },
    });
  }
}
