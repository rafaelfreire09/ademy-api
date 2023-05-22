import { Prisma, PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

const getDefaultUser = async (): Promise<Prisma.UserCreateManyInput> => {
  if (
    !process.env.DEFAULT_USER ||
    !process.env.DEFAULT_EMAIL ||
    !process.env.DEFAULT_PASSWORD
  ) {
    throw new Error(
      'Missing DEFAULT_USER or DEFAULT_EMAIL or DEFAULT_PASSWORD in .env',
    );
  }

  const password = process.env.DEFAULT_PASSWORD;

  const SALT = 10;

  return {
    Name: process.env.DEFAULT_USER,
    Email: process.env.DEFAULT_EMAIL,
    Password: await hash(password, SALT),
  };
};

export const insertUsers = async (prisma: PrismaClient) => {
  const user = await getDefaultUser();

  try {
    await prisma.$transaction([
      prisma.user.deleteMany(),
      prisma.user.createMany({
        data: [user],
      }),
    ]);

    console.log(`ADMIN inserted: ${user.Name} 📦`);
  } catch (error) {
    console.error('Error inserting ADMIN ⚠️', error);
  }
};
