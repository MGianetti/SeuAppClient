import { DEFAULT_TIP, DEFAULT_ERROR_MESSAGE_M } from '../pages.constants';

export const PRODUCT_PAGE_TITLE = 'Novo produto:';
export const PRODUCT_PAGE_TITLE_EDIT = 'Edite o produto';

export const PRODUCT_MODAL_TITLE = 'Cadastre um novo produto';

export const PRODUCT_MODAL_TITLE_EDITING = 'Editar produto:';
export const PRODUCT_MODAL_ACTION_LABEL_EDITING = 'Salvar';

export const PRODUCT_MODAL_ACTION_LABEL = 'Cadastrar';
export const PRODUCT_PAGE_DESCRIPTION = 'Cadastre um novo produto.';
export const VIEW_PRODUCTS_PAGE_TITLE = 'Produtos:';
export const VIEW_PRODUCTS_DESCRIPTION = 'Consulta de produtos.';
export const NEW_PRODUCT_BUTTON = 'Novo';

export const PRODUCT_MODAL_CANCEL = 'Cancelar';

export const CATEGORY_PLACEHOLDER = 'Escolha uma categoria';
export const SEARCH_PRODUCT_PLACEHOLDER = 'Buscar produto';

export const PRODUCT_KEYS = Object.freeze({
  PRICE: 'PRICE',
  CATEGORY: 'CATEGORY',
  DESCRIPTION: 'DESCRIPTION',
});

export const PRODUCT_ATTRIBUTES_LABEL = Object.freeze({
  [PRODUCT_KEYS.PRICE]: 'Preço',
  [PRODUCT_KEYS.CATEGORY]: 'Categoria',
  [PRODUCT_KEYS.DESCRIPTION]: 'Descrição',
});

export const PRODUCT_TIPS_LABEL = Object.freeze({
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

export const productsMockData = [
  {
    description: 'Corte',
    price: 39.9,
    category: 'Cosméticos',
  },
  {
    description: 'Corte',
    price: 29.9,
    category: 'Cosméticos',
  },
  {
    description: 'Corte',
    price: 19.9,
    category: 'Bebidas',
  },
];

export const productsColumns = [
  {
    Header: 'Descrição',
    accessor: 'description',
  },
  {
    Header: 'Categoria',
    accessor: 'category',
  },
  {
    Header: 'Preço',
    accessor: 'price',
    isNumeric: true,
  },
];
