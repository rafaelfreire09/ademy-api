import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { AuthenticateDTO } from './dto/authenticate.dto';
import { I18n } from 'src/i18n';
import { I18nContext } from 'nestjs-i18n';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async authenticate(
    authenticateDTO: AuthenticateDTO,
    i18nContext: I18nContext,
  ) {
    const user = await this.usersService.findOneByEmail(authenticateDTO.Email);

    if (!user) {
      // throw new UnauthorizedException(
      //   i18nContext.translate(I18n.AUTH_SERVICE_PASSWORD_OR_EMAIL_INVALID.message),
      // );
      throw new UnauthorizedException('Email ou senha inválidos');
    }

    const passwordMatch = await compare(
      authenticateDTO.Password,
      user.Password,
    );

    if (!passwordMatch) {
      // throw new UnauthorizedException(
      //   i18nContext.translate(I18n.AUTH_SERVICE_PASSWORD_OR_EMAIL_INVALID.message),
      // );
      throw new UnauthorizedException('Email ou senha inválidos');
    }

    const payload = { sub: user.UserID };

    // tslint:disable-next-line: no-dynamic-delete
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    delete user.Password;

    return {
      User: {
        UserID: user.UserID,
        Email: user.Email,
        Name: user.Name,
        CreatedAt: user.CreatedAt,
        UpdatedAt: user.UpdatedAt,
      },
      Token: this.jwtService.sign(payload),
    };
  }
}
