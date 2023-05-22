import { PrismaService } from 'src/libs/prisma-client/src';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(user: Omit<Prisma.UserCreateManyInput, 'UserID'>) {
    return this.prismaService.user.create({
      data: user,
      select: {
        UserID: true,
        Email: true,
        Name: true,
        CreatedAt: true,
        UpdatedAt: true,
      },
    });
  }

  findAll() {
    return this.prismaService.user.findMany({
      select: {
        UserID: true,
        Email: true,
        Name: true,
        CreatedAt: true,
        UpdatedAt: true,
      },
    });
  }

  findOne(userId: number) {
    return this.prismaService.user.findUnique({
      where: {
        UserID: userId,
      },
      select: {
        UserID: true,
        Email: true,
        Name: true,
        CreatedAt: true,
        UpdatedAt: true,
      },
    });
  }

  update(id: number, user: Prisma.UserUpdateInput) {
    return this.prismaService.user.update({
      where: {
        UserID: id,
      },
      select: {
        UserID: true,
        Email: true,
        Name: true,
        CreatedAt: true,
        UpdatedAt: true,
      },
      data: user,
    });
  }

  remove(id: number) {
    return this.prismaService.user.delete({
      where: {
        UserID: id,
      },
    });
  }

  async findOneByEmail(email: string) {
    return await this.prismaService.user.findUnique({
      where: {
        Email: email
      }
    });
  }
}
