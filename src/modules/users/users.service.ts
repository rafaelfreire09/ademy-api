import { Injectable, BadRequestException } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { Prisma } from '@prisma/client';
import { CreateUserDTO, UpdateUserDTO } from './dto';
import { hash } from 'bcrypt';

import { I18n } from 'src/i18n';
import { I18nContext } from 'nestjs-i18n';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(createUserDTO: CreateUserDTO, i18nContext: I18nContext) {
    const { Email, Name, Password } = createUserDTO;

    const rounds = 10;

    const userAlreadyExists = await this.usersRepository.findOneByEmail(
      createUserDTO.Email,
    );

    if (userAlreadyExists) {
      throw new BadRequestException(
        i18nContext.translate(I18n.USERS_SERVICE_USER_ALREADY_EXISTS.message),
      );
    }

    const inputUserCreate: Prisma.UserCreateManyInput = {
      Email,
      Name,
      Password: await hash(Password, rounds),
    };

    const created = await this.usersRepository.create(inputUserCreate);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    delete created.Password;

    return created;
  }

  findAll() {
    return this.usersRepository.findAll();
  }

  async findOne(userId: number, i18nContext: I18nContext) {
    const hasUserData = await this.usersRepository.findOne(userId);

    if (!hasUserData) {
      throw new BadRequestException(
        i18nContext.translate(I18n.USERS_SERVICE_USER_NOT_FOUND.message),
      );
    }

    return hasUserData;
  }

  async update(
    userId: number,
    updateUserDTO: UpdateUserDTO,
    i18nContext: I18nContext,
  ) {
    const hasUserData = await this.usersRepository.findOne(userId);

    if (!hasUserData) {
      throw new BadRequestException(
        i18nContext.translate(I18n.USERS_SERVICE_USER_NOT_FOUND.message),
      );
    }

    if (updateUserDTO.Email) {
      const emailAlreadyExists = await this.findOneByEmail(updateUserDTO.Email);

      if (emailAlreadyExists) {
        throw new BadRequestException(
          i18nContext.translate(
            I18n.USERS_SERVICE_EMAIL_ALREADY_EXISTS.message,
          ),
        );
      }
    }

    const inputUpdateUserDTO: Prisma.UserUpdateInput = {
      Email: updateUserDTO.Email,
      Name: updateUserDTO.Name,
    };

    return await this.usersRepository.update(userId, inputUpdateUserDTO);
  }

  async remove(id: number, i18nContext: I18nContext) {
    const hasUserData = await this.usersRepository.findOne(id);

    if (!hasUserData)
      throw new BadRequestException(
        i18nContext.translate(I18n.USERS_SERVICE_USER_NOT_FOUND.message),
      );

    const { Name } = await this.usersRepository.remove(id);

    return {
      success: i18nContext.translate(I18n.USERS_SERVICE_USER_DELETED.message, {
        args: { Name },
      }),
    };
  }

  async findOneByEmail(email: string) {
    return await this.usersRepository.findOneByEmail(email);
  }
}
