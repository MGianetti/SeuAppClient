import {
  DEFAULT_TIP_MALE,
  DEFAULT_ERROR_MESSAGE_M,
  INVALID_ERROR_MESSAGE_F,
  DEFAULT_CHOOSE_TIP_MALE,
} from '../pages.constants';

export const CLIENT_PAGE_TITLE = 'Novo cliente:';
export const CLIENT_PAGE_TITLE_EDIT = 'Editar cliente:';
export const CLIENT_PAGE_DESCRIPTION = 'Cadastre um novo cliente.';
export const VIEW_CLIENTS_PAGE_TITLE = 'Clientes:';
export const VIEW_CLIENTS_DESCRIPTION = 'Consulta de clientes.';
export const NEW_CLIENT_BUTTON = 'Novo';

export const SEX_PLACEHOLDER = 'Selecione o sexo';

export const CLIENT_MODAL_CANCEL = 'Cancelar';
export const CLIENT_MODAL_TITLE = 'Cadastre um novo cliente';
export const CLIENT_MODAL_ACTION_LABEL = 'Cadastrar';

export const CLIENT_MODAL_TITLE_EDITING = 'Edite o cliente';
export const CLIENT_MODAL_ACTION_LABEL_EDITING = 'Salvar';

export const SEARCH_CLIENT_PLACEHOLDER = 'Buscar cliente';

export const CLIENT_KEYS = Object.freeze({
  NAME: 'NAME',
  EMAIL: 'EMAIL',
  CELLPHONE: 'CELLPHONE',
  SEX: 'SEX',
  AGE: 'AGE',
});

export const CLIENT_ATTRIBUTES_LABEL = Object.freeze({
  [CLIENT_KEYS.NAME]: 'Nome',
  [CLIENT_KEYS.EMAIL]: 'Email',
  [CLIENT_KEYS.CELLPHONE]: 'Celular',
  [CLIENT_KEYS.SEX]: 'Sexo',
  [CLIENT_KEYS.AGE]: 'Idade',
});

export const CLIENT_TIPS_LABEL = Object.freeze({
  [CLIENT_KEYS.NAME]: DEFAULT_TIP_MALE.replace(
    '{ATTRIBUTE}',
    CLIENT_ATTRIBUTES_LABEL.NAME.toLocaleLowerCase()
  ).replace('{ENTITY}', 'cliente'),
  [CLIENT_KEYS.EMAIL]: DEFAULT_TIP_MALE.replace(
    '{ATTRIBUTE}',
    CLIENT_ATTRIBUTES_LABEL.EMAIL.toLocaleLowerCase()
  ).replace('{ENTITY}', 'cliente'),
  [CLIENT_KEYS.CELLPHONE]: DEFAULT_TIP_MALE.replace(
    '{ATTRIBUTE}',
    CLIENT_ATTRIBUTES_LABEL.CELLPHONE.toLocaleLowerCase()
  ).replace('{ENTITY}', 'cliente'),
  [CLIENT_KEYS.SEX]: DEFAULT_CHOOSE_TIP_MALE.replace(
    '{ATTRIBUTE}',
    CLIENT_ATTRIBUTES_LABEL.SEX.toLocaleLowerCase()
  ).replace('{ENTITY}', 'cliente'),
  [CLIENT_KEYS.AGE]: DEFAULT_TIP_MALE.replace(
    '{ATTRIBUTE}',
    CLIENT_ATTRIBUTES_LABEL.AGE.toLocaleLowerCase()
  ).replace('{ENTITY}', 'cliente'),
});

export const CLIENT_ERROR = Object.freeze({
  [CLIENT_KEYS.NAME]: DEFAULT_ERROR_MESSAGE_M.replace(
    '{ATTRIBUTE}',
    CLIENT_ATTRIBUTES_LABEL.NAME.toLocaleLowerCase()
  ),
  [CLIENT_KEYS.EMAIL]: DEFAULT_ERROR_MESSAGE_M.replace(
    '{ATTRIBUTE}',
    CLIENT_ATTRIBUTES_LABEL.EMAIL.toLocaleLowerCase()
  ),
  [CLIENT_KEYS.CELLPHONE]: DEFAULT_ERROR_MESSAGE_M.replace(
    '{ATTRIBUTE}',
    CLIENT_ATTRIBUTES_LABEL.CELLPHONE.toLocaleLowerCase()
  ),
  [CLIENT_KEYS.SEX]: DEFAULT_ERROR_MESSAGE_M.replace(
    '{ATTRIBUTE}',
    CLIENT_ATTRIBUTES_LABEL.SEX.toLocaleLowerCase()
  ),
  [CLIENT_KEYS.AGE]: INVALID_ERROR_MESSAGE_F.replace(
    '{ATTRIBUTE}',
    CLIENT_ATTRIBUTES_LABEL.AGE.toLocaleLowerCase()
  ),
});

export const SEX_OPTIONS = Object.freeze({
  MALE: 'Masculino',
  FEMALE: 'Feminino',
});

export const clientColumn = [
  {
    Header: 'Nome',
    accessor: 'name',
  },
  {
    Header: 'Email',
    accessor: 'email',
  },
  {
    Header: 'Celular',
    accessor: 'cellphone',
  },
  {
    Header: 'Sexo',
    accessor: 'sex',
  },
  {
    Header: 'Idade',
    accessor: 'age',
    isNumeric: true,
  },
];
