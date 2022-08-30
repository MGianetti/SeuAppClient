import { DEFAULT_TIP, DEFAULT_ERROR_MESSAGE_M } from '../pages.constants';

export const SERVICE_PAGE_TITLE = 'Novo serviço:';
export const SERVICE_PAGE_TITLE_EDITING = 'Editar serviço:';
export const SERVICE_PAGE_DESCRIPTION = 'Cadastre um novo serviço.';
export const VIEW_SERVICES_PAGE_TITLE = 'Serviços:';
export const VIEW_SERVICES_DESCRIPTION = 'Consulta de serviços.';
export const NEW_SERVICE_BUTTON = 'Novo';

export const SEARCH_SERVICE_PLACEHOLDER = 'Buscar serviço';

export const SERVICE_MODAL_CANCEL = 'Cancelar';
export const SERVICE_MODAL_TITLE = 'Cadastre um novo serviço';
export const SERVICE_MODAL_ACTION_LABEL = 'Cadastrar';

export const SERVICE_MODAL_TITLE_EDITING = 'Edite o serviço';
export const SERVICE_MODAL_ACTION_LABEL_EDITING = 'Salvar';

export const SERVICE_KEYS = Object.freeze({
  DESCRIPTION: 'DESCRIPTION',
  PRICE: 'PRICE',
});

export const SERVICE_ATTRIBUTES_LABEL = Object.freeze({
  [SERVICE_KEYS.DESCRIPTION]: 'Descrição',
  [SERVICE_KEYS.PRICE]: 'Preço',
});

export const SERVICE_TIPS_LABEL = Object.freeze({
  [SERVICE_KEYS.PRICE]: DEFAULT_TIP.replace(
    '{ATTRIBUTE}',
    SERVICE_ATTRIBUTES_LABEL.PRICE.toLowerCase()
  ).replace('{ENTITY}', 'serviço'),
  [SERVICE_KEYS.DESCRIPTION]: DEFAULT_TIP.replace(
    '{ATTRIBUTE}',
    SERVICE_ATTRIBUTES_LABEL.DESCRIPTION.toLowerCase()
  ).replace('{ENTITY}', 'serviço'),
});

export const SERVICE_ERROR = Object.freeze({
  [SERVICE_KEYS.PRICE]: DEFAULT_ERROR_MESSAGE_M.replace(
    '{ATTRIBUTE}',
    SERVICE_ATTRIBUTES_LABEL.PRICE.toLowerCase()
  ),
  [SERVICE_KEYS.DESCRIPTION]: DEFAULT_ERROR_MESSAGE_M.replace(
    '{ATTRIBUTE}',
    SERVICE_ATTRIBUTES_LABEL.DESCRIPTION.toLowerCase()
  ),
});

export const servicesColumns = [
  {
    Header: 'Descrição',
    accessor: 'description',
  },
  {
    Header: 'Preço',
    accessor: 'price',
    isNumeric: true,
  },
];
