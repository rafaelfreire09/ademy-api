export enum I18nEnum {
  STRING_MESSAGE = 'translation.STRING_MESSAGE',
  NOT_EMPTY_MESSAGE = 'translation.NOT_EMPTY_MESSAGE',
  EMAIL_IS_VALID_MESSAGE = 'translation.EMAIL_IS_VALID_MESSAGE',
  ONLY_NUMBER_MESSAGE = 'translation.ONLY_NUMBER_MESSAGE',
  ONLY_LETTERS_WITH_SPACE_MESSAGE = 'translation.ONLY_LETTERS_WITH_SPACE_MESSAGE',
  LENGTH_MESSAGE = 'translation.LENGTH_MESSAGE',
  IS_BOOLEAN_MESSAGE = 'translation.IS_BOOLEAN_MESSAGE',
  
  VALIDATE_PASSWORD_MESSAGE = 'translation.VALIDATE_PASSWORD_MESSAGE',

  AUTH_SERVICE_PASSWORD_OR_EMAIL_INVALID = 'translation.AUTH_SERVICE_PASSWORD_OR_EMAIL_INVALID',
  AUTH_SERVICE_USER_NOT_FOUND = 'translation.AUTH_SERVICE_USER_NOT_FOUND',
  AUTH_SERVICE_TOKEN_NOT_IS_VALID = 'translation.AUTH_SERVICE_TOKEN_NOT_IS_VALID',
  AUTH_SERVICE_DO_NOT_HAVE_PERMISSION = 'translation.AUTH_SERVICE_DO_NOT_HAVE_PERMISSION',

  USERS_SERVICE_USER_ALREADY_EXISTS = 'translation.USERS_SERVICE_USER_ALREADY_EXISTS',
  USERS_SERVICE_EMAIL_ALREADY_EXISTS = 'translation.USERS_SERVICE_EMAIL_ALREADY_EXISTS',
  USERS_SERVICE_USER_NOT_FOUND = 'translation.USERS_SERVICE_USER_NOT_FOUND',
  USERS_SERVICE_USER_DELETED = 'translation.USERS_SERVICE_USER_DELETED',
  USERS_SERVICE_USER_IS_INACTIVE = 'translation.USERS_SERVICE_USER_IS_INACTIVE',
}

export const I18n = {
  STRING_MESSAGE: { KEY: I18nEnum.STRING_MESSAGE, message: 'Must be a string' },
  NOT_EMPTY_MESSAGE: {
    KEY: I18nEnum.NOT_EMPTY_MESSAGE,
    message: 'Must not be empty',
  },
  EMAIL_IS_VALID_MESSAGE: {
    KEY: I18nEnum.EMAIL_IS_VALID_MESSAGE,
    message: 'Must be a valid email',
  },
  ONLY_NUMBER_MESSAGE: {
    KEY: I18nEnum.ONLY_NUMBER_MESSAGE,
    message: 'Must be a number',
  },
  ONLY_LETTERS_WITH_SPACE_MESSAGE: {
    KEY: I18nEnum.ONLY_LETTERS_WITH_SPACE_MESSAGE,
    message: 'Must be a string with only letters and spaces',
  },
  LENGTH_MESSAGE: {
    KEY: I18nEnum.LENGTH_MESSAGE,
    message: 'Must be between {min} and {max} characters',
  },
  IS_BOOLEAN_MESSAGE: {
    KEY: I18nEnum.IS_BOOLEAN_MESSAGE,
    message: 'Must be a boolean',
  },

  VALIDATE_PASSWORD_MESSAGE: {
    KEY: I18nEnum.VALIDATE_PASSWORD_MESSAGE,
    message:
      'Must be at least 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character',
  },

  AUTH_SERVICE_PASSWORD_OR_EMAIL_INVALID: {
    KEY: I18nEnum.AUTH_SERVICE_PASSWORD_OR_EMAIL_INVALID,
    message: 'Invalid email or password',
  },
  AUTH_SERVICE_USER_NOT_FOUND: {
    KEY: I18nEnum.AUTH_SERVICE_USER_NOT_FOUND,
    message: 'User not found',
  },
  AUTH_SERVICE_TOKEN_NOT_IS_VALID: {
    KEY: I18nEnum.AUTH_SERVICE_TOKEN_NOT_IS_VALID,
    message: 'Invalid token',
  },
  AUTH_SERVICE_DO_NOT_HAVE_PERMISSION: {
    KEY: I18nEnum.AUTH_SERVICE_DO_NOT_HAVE_PERMISSION,
    message: 'You do not have permission to access this resource.',
  },

  USERS_SERVICE_USER_ALREADY_EXISTS: {
    KEY: I18nEnum.USERS_SERVICE_USER_ALREADY_EXISTS,
    message: 'User already exists',
  },
  USERS_SERVICE_EMAIL_ALREADY_EXISTS: {
    KEY: I18nEnum.USERS_SERVICE_EMAIL_ALREADY_EXISTS,
    message: 'Email already exists',
  },
  USERS_SERVICE_USER_NOT_FOUND: {
    KEY: I18nEnum.USERS_SERVICE_USER_NOT_FOUND,
    message: 'User not found',
  },
  USERS_SERVICE_USER_DELETED: {
    KEY: I18nEnum.USERS_SERVICE_USER_DELETED,
    message: 'User deleted',
  },
} as const;
