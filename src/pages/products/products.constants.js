import { DEFAULT_TIP, DEFAULT_ERROR_MESSAGE_M } from '../pages.constants';

export const PRODUCT_PAGE_TITLE = 'Novo produto:';
export const PRODUCT_PAGE_DESCRIPTION = 'Cadastre um novo produto.';
export const CATEGORY_PLACEHOLDER = 'Selecione a categoria';

export const PRODUCT_KEYS = Object.freeze({
  NAME: 'NAME',
  PRICE: 'PRICE',
  CATEGORY: 'CATEGORY',
  DESCRIPTION: 'DESCRIPTION',
});

export const PRODUCT_ATTRIBUTES_LABEL = Object.freeze({
  [PRODUCT_KEYS.NAME]: 'Nome',
  [PRODUCT_KEYS.PRICE]: 'Preço',
  [PRODUCT_KEYS.CATEGORY]: 'Categoria',
  [PRODUCT_KEYS.DESCRIPTION]: 'Descrição',
});

export const PRODUCT_TIPS_LABEL = Object.freeze({
  [PRODUCT_KEYS.NAME]: DEFAULT_TIP.replace(
    '{ATTRIBUTE}',
    PRODUCT_ATTRIBUTES_LABEL.NAME.toLocaleLowerCase()
  ).replace('{ENTITY}', 'produto'),
  [PRODUCT_KEYS.PRICE]: DEFAULT_TIP.replace(
    '{ATTRIBUTE}',
    PRODUCT_ATTRIBUTES_LABEL.PRICE.toLocaleLowerCase()
  ).replace('{ENTITY}', 'produto'),
  [PRODUCT_KEYS.CATEGORY]: DEFAULT_TIP.replace(
    '{ATTRIBUTE}',
    PRODUCT_ATTRIBUTES_LABEL.CATEGORY.toLocaleLowerCase()
  ).replace('{ENTITY}', 'produto'),
  [PRODUCT_KEYS.DESCRIPTION]: DEFAULT_TIP.replace(
    '{ATTRIBUTE}',
    PRODUCT_ATTRIBUTES_LABEL.DESCRIPTION.toLocaleLowerCase()
  ).replace('{ENTITY}', 'produto'),
});

export const PRODUCT_ERROR = Object.freeze({
  [PRODUCT_KEYS.NAME]: DEFAULT_ERROR_MESSAGE_M.replace(
    '{ATTRIBUTE}',
    PRODUCT_ATTRIBUTES_LABEL.NAME.toLocaleLowerCase()
  ),
  [PRODUCT_KEYS.PRICE]: DEFAULT_ERROR_MESSAGE_M.replace(
    '{ATTRIBUTE}',
    PRODUCT_ATTRIBUTES_LABEL.PRICE.toLocaleLowerCase()
  ),
  [PRODUCT_KEYS.CATEGORY]: DEFAULT_ERROR_MESSAGE_M.replace(
    '{ATTRIBUTE}',
    PRODUCT_ATTRIBUTES_LABEL.CATEGORY.toLocaleLowerCase()
  ),
  [PRODUCT_KEYS.DESCRIPTION]: DEFAULT_ERROR_MESSAGE_M.replace(
    '{ATTRIBUTE}',
    PRODUCT_ATTRIBUTES_LABEL.DESCRIPTION.toLocaleLowerCase()
  ),
});
