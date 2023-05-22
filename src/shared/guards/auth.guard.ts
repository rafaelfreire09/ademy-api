import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { PrismaService } from '@lib/prisma-client';
// import { ROLES_KEY } from '../decorators/roles.decorators';
import { I18nContext } from 'nestjs-i18n';
import { translations } from 'src/i18n';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly reflector: Reflector,
    private readonly prismaService: PrismaService,
  ) {}
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  async canActivate(context: ExecutionContext): Promise<boolean | void> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    // const roles = this.reflector.get<string[] | undefined>(
    //   ROLES_KEY,
    //   context.getHandler(),
    // );
    const i18n = I18nContext.current();
    const language = i18n?.lang || 'en';

    // const rolesNotRequired = !roles || roles.length === 0;

    if (!token) {
      throw new UnauthorizedException(
        translations[language].AUTH_SERVICE_TOKEN_NOT_IS_VALID,
      );
    }
    try {
      const { sub: userId }: { sub: number } =
        await this.jwtService.verifyAsync(token, {
          secret: process.env.JWT_SECRET,
        });

      const user = await this.prismaService.user.findUnique({
        where: { UserID: userId },
        // include: {
        //   Role: {
        //     select: {
        //       Name: true,
        //     },
        //   },
        // },
      });

      if (!user) {
        throw new UnauthorizedException(
          translations[language].AUTH_SERVICE_TOKEN_NOT_IS_VALID,
        );
      }

      request.User = {
        UserID: user.UserID,
      };

      // if (rolesNotRequired) {
      //   return true; // No roles required
      // }

      // if (!roles.includes(user.Role.Name)) {
      //   throw new ForbiddenException(
      //     translations[language].AUTH_SERVICE_DO_NOT_HAVE_PERMISSION,
      //   );
      // }

      return true; // User has required role
    } catch (error) {
      throw new ForbiddenException(
        translations[language].AUTH_SERVICE_DO_NOT_HAVE_PERMISSION,
      );
    }
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
