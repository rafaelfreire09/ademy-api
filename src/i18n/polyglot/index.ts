import { i18nValidationMessage } from 'nestjs-i18n';
import { ValidationArguments } from 'class-validator';

/**
 * Returns the validation message and an example of the message.
 *
 * @param translation The key of the message to be returned.
 * @param args Optional arguments for the message.
 * @returns An object containing the validation message and an example of the message.
 */
export const polyglot = (
  translation: {
    KEY: string;
    message: string;
  },
  args?: any,
): any => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const message = i18nValidationMessage<any>(translation.KEY, args);

  return {
    message: message({} as ValidationArguments),
  };
};

export * from './i18n';
