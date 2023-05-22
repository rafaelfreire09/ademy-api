import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { I18n, I18nContext } from 'nestjs-i18n';
import { UsersService } from './users.service';
import { CreateUserDTO, UpdateUserDTO } from './dto';
import { AuthGuard } from 'src/shared/guards';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/')
  create(
    @Body() createUserDTO: CreateUserDTO,
    @I18n() i18nContext: I18nContext,
  ) {
    return this.usersService.create(createUserDTO, i18nContext);
  }

  @Get('/')
  findAll() {
    return this.usersService.findAll();
  }

  @Get('/:id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
    @I18n() i18nContext: I18nContext,
  ) {
    return this.usersService.findOne(id, i18nContext);
  }

  @Put('/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDTO: UpdateUserDTO,
    @I18n() i18nContext: I18nContext,
  ) {
    return this.usersService.update(id, updateUserDTO, i18nContext);
  }

  @Delete('/:id')
  async remove(
    @Param('id', ParseIntPipe) id: number,
    @I18n() i18nContext: I18nContext,
  ) {
    return await this.usersService.remove(id, i18nContext);
  }
}
