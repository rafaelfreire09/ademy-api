import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
} from 'class-validator';
import { polyglot, I18n } from 'src/i18n';

import { VALIDATE_PASSWORD_REGEX } from 'src/shared/regex';

export class AuthenticateDTO {
  @IsString(polyglot(I18n.STRING_MESSAGE))
  @IsNotEmpty(polyglot(I18n.NOT_EMPTY_MESSAGE))
  @IsEmail({}, polyglot(I18n.EMAIL_IS_VALID_MESSAGE))
  @Length(3, 50, polyglot(I18n.LENGTH_MESSAGE, { min: 3, max: 50 }))
  Email: string;

  @IsString(polyglot(I18n.STRING_MESSAGE))
  @IsNotEmpty(polyglot(I18n.NOT_EMPTY_MESSAGE))
  @Length(8, 50, polyglot(I18n.LENGTH_MESSAGE, { min: 8, max: 50 }))
  @Matches(VALIDATE_PASSWORD_REGEX, polyglot(I18n.VALIDATE_PASSWORD_MESSAGE))
  Password: string;
}
