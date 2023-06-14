import {
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { I18n, polyglot } from 'src/i18n';

export class UpdateEbookDTO {
  @IsString(polyglot(I18n.STRING_MESSAGE))
  @IsOptional()
  @Length(3, 200, polyglot(I18n.LENGTH_MESSAGE, { min: 3, max: 200 }))
  Title?: string;

  @IsString(polyglot(I18n.STRING_MESSAGE))
  @IsOptional()
  Slug?: string;

  @IsString(polyglot(I18n.STRING_MESSAGE))
  @IsOptional()
  Image?: string;

  @IsString(polyglot(I18n.STRING_MESSAGE))
  @IsOptional()
  Src?: string;

  @IsString(polyglot(I18n.STRING_MESSAGE))
  @IsOptional()
  Author?: string;

  @IsNumber(polyglot(I18n.ONLY_NUMBER_MESSAGE))
  @IsOptional()
  Price?: number;

  @IsString(polyglot(I18n.STRING_MESSAGE))
  @IsOptional()
  @Length(0, 2000, polyglot(I18n.LENGTH_MESSAGE, { min: 0, max: 2000 }))
  Description?: string;
}
