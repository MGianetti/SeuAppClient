import {
  DEFAULT_TIP,
  DEFAULT_ERROR_MESSAGE_M,
  INVALID_ERROR_MESSAGE_F,
} from '../pages.constants';

export const SERVICE_PAGE_TITLE = 'Novo serviço:';
export const SERVICE_PAGE_DESCRIPTION = 'Cadastre um novo serviço.';

export const SERVICE_KEYS = Object.freeze({
  NAME: 'NAME',
  PRICE: 'PRICE',
  DESCRIPTION: 'DESCRIPTION',
});

export const SERVICE_ATTRIBUTES_LABEL = Object.freeze({
  [SERVICE_KEYS.NAME]: 'Nome',
  [SERVICE_KEYS.PRICE]: 'Preço',
  [SERVICE_KEYS.DESCRIPTION]: 'Descrição',
});

export const SERVICE_TIPS_LABEL = Object.freeze({
  [SERVICE_KEYS.NAME]: DEFAULT_TIP.replace(
    '{ATTRIBUTE}',
    SERVICE_ATTRIBUTES_LABEL.NAME.toLocaleLowerCase()
  ).replace('{ENTITY}', 'serviço'),
  [SERVICE_KEYS.PRICE]: DEFAULT_TIP.replace(
    '{ATTRIBUTE}',
    SERVICE_ATTRIBUTES_LABEL.PRICE.toLocaleLowerCase()
  ).replace('{ENTITY}', 'serviço'),
  [SERVICE_KEYS.DESCRIPTION]: DEFAULT_TIP.replace(
    '{ATTRIBUTE}',
    SERVICE_ATTRIBUTES_LABEL.DESCRIPTION.toLocaleLowerCase()
  ).replace('{ENTITY}', 'serviço'),
});

export const SERVICE_ERROR = Object.freeze({
  [SERVICE_KEYS.NAME]: DEFAULT_ERROR_MESSAGE_M.replace(
    '{ATTRIBUTE}',
    SERVICE_ATTRIBUTES_LABEL.NAME.toLocaleLowerCase()
  ),
  [SERVICE_KEYS.PRICE]: DEFAULT_ERROR_MESSAGE_M.replace(
    '{ATTRIBUTE}',
    SERVICE_ATTRIBUTES_LABEL.PRICE.toLocaleLowerCase()
  ),
  [SERVICE_KEYS.DESCRIPTION]: DEFAULT_ERROR_MESSAGE_M.replace(
    '{ATTRIBUTE}',
    SERVICE_ATTRIBUTES_LABEL.DESCRIPTION.toLocaleLowerCase()
  ),
});
