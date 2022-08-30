import { DEFAULT_ERROR_MESSAGE_M } from '../pages.constants';

export const SIGNIN_EMAIL_PLACEHOLDER = 'Digite seu email';
export const SIGNIN_PASSWORD_PLACEHOLDER = 'Digite sua senha';

export const SIGNIN_KEYS = Object.freeze({
  EMAIL: 'EMAIL',
  PASSWORD: 'PASSWORD',
});

export const SIGNIN_ATTRIBUTES_LABEL = Object.freeze({
  [SIGNIN_KEYS.EMAIL]: 'Email',
  [SIGNIN_KEYS.PASSWORD]: 'Senha',
});

export const SIGNIN_TIPS_LABEL = Object.freeze({
  [SIGNIN_KEYS.EMAIL]: 'Digite seu email',
  [SIGNIN_KEYS.PASSWORD]: 'Digite sua senha',
});

export const SIGNIN_ERROR = Object.freeze({
  [SIGNIN_KEYS.EMAIL]: DEFAULT_ERROR_MESSAGE_M.replace(
    '{ATTRIBUTE}',
    SIGNIN_ATTRIBUTES_LABEL.EMAIL.toLowerCase()
  ),
  [SIGNIN_KEYS.PASSWORD]: DEFAULT_ERROR_MESSAGE_M.replace(
    '{ATTRIBUTE}',
    SIGNIN_ATTRIBUTES_LABEL.PASSWORD.toLowerCase()
  ),
});
