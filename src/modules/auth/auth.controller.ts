import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthenticateDTO } from './dto/authenticate.dto';
import { AuthService } from './auth.service';
import { I18nContext } from 'nestjs-i18n';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(200)
  @Post('/')
  async authenticate(
    @Body() authenticateDTO: AuthenticateDTO,
    i18nContext: I18nContext,
  ) {
    return this.authService.authenticate(authenticateDTO, i18nContext);
  }
}
