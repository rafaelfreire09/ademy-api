import {
  IsEmail,
  IsIP,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
} from 'class-validator';
import { I18n, polyglot } from 'src/i18n';
import {
  ONLY_LETTERS_WITH_SPACE_REGEX,
  VALIDATE_PASSWORD_REGEX,
} from 'src/shared/regex';

export class CreateUserDTO {
  @IsString(polyglot(I18n.STRING_MESSAGE))
  @IsNotEmpty(polyglot(I18n.NOT_EMPTY_MESSAGE))
  @Matches(
    ONLY_LETTERS_WITH_SPACE_REGEX,
    polyglot(I18n.ONLY_LETTERS_WITH_SPACE_MESSAGE),
  )
  @Length(3, 50, polyglot(I18n.LENGTH_MESSAGE, { min: 3, max: 50 }))
  Name: string;

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
