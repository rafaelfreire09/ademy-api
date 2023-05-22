import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersService } from '../users';
import { UsersRepository } from '../users/users.repository';
import { PrismaClientModule } from 'src/libs/prisma-client/src';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UsersService, UsersRepository],
  imports: [PrismaClientModule],
})
export class AuthModule {}
