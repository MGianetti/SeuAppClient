import { DEFAULT_ERROR_MESSAGE_M } from '../pages.constants';

export const SIGNUP_EMAIL_PLACEHOLDER = 'Digite seu email';
export const SIGNUP_PASSWORD_PLACEHOLDER = 'Digite sua senha';

export const SIGNUP_KEYS = Object.freeze({
  EMAIL: 'EMAIL',
  PASSWORD: 'PASSWORD',
  CONFIRM_PASSWORD: 'CONFIRM_PASSWORD',
});

export const SIGNUP_ATTRIBUTES_LABEL = Object.freeze({
  [SIGNUP_KEYS.EMAIL]: 'Email',
  [SIGNUP_KEYS.PASSWORD]: 'Senha',
  [SIGNUP_KEYS.CONFIRM_PASSWORD]: 'Confirme a senha',
});

export const SIGNUP_TIPS_LABEL = Object.freeze({
  [SIGNUP_KEYS.EMAIL]: 'Digite seu email',
  [SIGNUP_KEYS.PASSWORD]: 'Digite sua senha',
  [SIGNUP_KEYS.CONFIRM_PASSWORD]: 'Confirme a sua senha',
});

export const SIGNUP_ERROR = Object.freeze({
  [SIGNUP_KEYS.EMAIL]: DEFAULT_ERROR_MESSAGE_M.replace(
    '{ATTRIBUTE}',
    SIGNUP_ATTRIBUTES_LABEL.EMAIL.toLowerCase()
  ),
  [SIGNUP_KEYS.PASSWORD]: DEFAULT_ERROR_MESSAGE_M.replace(
    '{ATTRIBUTE}',
    SIGNUP_ATTRIBUTES_LABEL.PASSWORD.toLowerCase()
  ),
  [SIGNUP_KEYS.CONFIRM_PASSWORD]: DEFAULT_ERROR_MESSAGE_M.replace(
    '{ATTRIBUTE}',
    SIGNUP_ATTRIBUTES_LABEL.CONFIRM_PASSWORD.toLowerCase()
  ),
});
