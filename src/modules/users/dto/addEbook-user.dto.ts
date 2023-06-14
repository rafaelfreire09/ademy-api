import {
  IsEmail,
  IsInt,
  IsOptional,
  IsString,
  Length,
  Matches,
  MaxLength,
} from 'class-validator';
import { I18n, polyglot } from 'src/i18n';
import { ONLY_LETTERS_WITH_SPACE_REGEX } from 'src/shared/regex';

type EbookId = {
  EbookID: number
}

export class AddEbookUserDTO {
  @IsString(polyglot(I18n.STRING_MESSAGE))
  @IsOptional()
  @Matches(
    ONLY_LETTERS_WITH_SPACE_REGEX,
    polyglot(I18n.ONLY_LETTERS_WITH_SPACE_MESSAGE),
  )
  @Length(3, 50, polyglot(I18n.LENGTH_MESSAGE, { min: 3, max: 50 }))
  EbookId?: number;

  // @MaxLength(20, {
  //   each: true,
  // })
  // tags: EbookId[];
}
