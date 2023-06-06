import { PrismaClient } from '@prisma/client';
import { EbookList } from './utils';

export type Ebooks = {
  EbookID: number;
  Title: string;
  Slug: string;
  Image: string;
  Author: string;
  Price: number;
  Description: string;
};

const getEbooks = () => {
  const ebooksMounted = EbookList.map((ebook) => {
    return {
      EbookID: ebook.id,
      Title: ebook.title,
      Slug: ebook.slug,
      Image: ebook.image,
      Author: ebook.author,
      Price: ebook.price,
      Description: ebook.description,
    };
  });

  return ebooksMounted;
};

export const transactionEbook = async (
  prisma: PrismaClient,
  ebooksList: Ebooks[],
) => {
  try {
    await prisma.$transaction([
      prisma.ebook.deleteMany(),
      prisma.ebook.createMany({
        data: ebooksList,
      }),
    ]);

    console.log(`Ebooks inserteds 📦`);
  } catch (error) {
    console.error('Error inserting Ebooks ⚠️', error);
  }
};

export const insertEbooks = async (prisma: PrismaClient) => {
  const ebooks = getEbooks();

  await transactionEbook(prisma, ebooks);
};
