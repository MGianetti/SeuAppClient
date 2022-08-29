import {
  DEFAULT_TIP,
  DEFAULT_ERROR_MESSAGE_M,
  INVALID_ERROR_MESSAGE_F,
} from '../pages.constants';

export const PROFESSIONAL_PAGE_TITLE = 'Novo profissional:';
export const PROFESSIONAL_PAGE_DESCRIPTION = 'Cadastre um novo profissional.';
export const VIEW_PROFESSIONALS_PAGE_TITLE = 'Profissionais:';
export const VIEW_PROFESSIONALS_DESCRIPTION = 'Consulta de profissionais.';
export const NEW_PROFESSIONAL_BUTTON = 'Novo';

export const SEARCH_PROFESSIONAL_PRACEHOLDER = 'Profissional';
export const SEX_PLACEHOLDER = 'Selecione o sexo';

export const PROFESSIONAL_MODAL_TITLE = 'Cadastre um novo profissional';
export const PROFESSIONAL_MODAL_CANCEL = 'Cancelar';
export const PROFESSIONAL_MODAL_ACTION_LABEL = 'Cadastrar';

export const PROFESSIONAL_KEYS = Object.freeze({
  NAME: 'NAME',
  NICK_NAME: 'NICK_NAME',
  CPF: 'CPF',
  CNPJ: 'CNPJ',
  CELLPHONE: 'CELLPHONE',
  EMAIL: 'EMAIL',
});

export const PROFESSIONAL_ATTRIBUTES_LABEL = Object.freeze({
  [PROFESSIONAL_KEYS.NAME]: 'Nome',
  [PROFESSIONAL_KEYS.NICK_NAME]: 'Apelido',
  [PROFESSIONAL_KEYS.CPF]: 'CPF',
  [PROFESSIONAL_KEYS.CNPJ]: 'CNPJ',
  [PROFESSIONAL_KEYS.CELLPHONE]: 'Celular',
  [PROFESSIONAL_KEYS.EMAIL]: 'Email',
});

export const PROFESSIONAL_TIPS_LABEL = Object.freeze({
  [PROFESSIONAL_KEYS.NAME]: DEFAULT_TIP.replace(
    '{ATTRIBUTE}',
    PROFESSIONAL_ATTRIBUTES_LABEL.NAME.toLocaleLowerCase()
  ).replace('{ENTITY}', 'profissional'),
  [PROFESSIONAL_KEYS.NICK_NAME]: DEFAULT_TIP.replace(
    '{ATTRIBUTE}',
    PROFESSIONAL_ATTRIBUTES_LABEL.NICK_NAME.toLocaleLowerCase()
  ).replace('{ENTITY}', 'profissional'),
  [PROFESSIONAL_KEYS.CPF]: DEFAULT_TIP.replace(
    '{ATTRIBUTE}',
    PROFESSIONAL_ATTRIBUTES_LABEL.CPF.toLocaleLowerCase()
  ).replace('{ENTITY}', 'profissional'),
  [PROFESSIONAL_KEYS.CNPJ]: DEFAULT_TIP.replace(
    '{ATTRIBUTE}',
    PROFESSIONAL_ATTRIBUTES_LABEL.CNPJ.toLocaleLowerCase()
  ).replace('{ENTITY}', 'profissional'),
  [PROFESSIONAL_KEYS.CELLPHONE]: DEFAULT_TIP.replace(
    '{ATTRIBUTE}',
    PROFESSIONAL_ATTRIBUTES_LABEL.CELLPHONE.toLocaleLowerCase()
  ).replace('{ENTITY}', 'profissional'),
  [PROFESSIONAL_KEYS.EMAIL]: DEFAULT_TIP.replace(
    '{ATTRIBUTE}',
    PROFESSIONAL_ATTRIBUTES_LABEL.EMAIL.toLocaleLowerCase()
  ).replace('{ENTITY}', 'profissional'),
});

export const PROFESSIONAL_ERROR = Object.freeze({
  [PROFESSIONAL_KEYS.NAME]: DEFAULT_ERROR_MESSAGE_M.replace(
    '{ATTRIBUTE}',
    PROFESSIONAL_ATTRIBUTES_LABEL.NAME.toLocaleLowerCase()
  ),
  [PROFESSIONAL_KEYS.NICK_NAME]: DEFAULT_ERROR_MESSAGE_M.replace(
    '{ATTRIBUTE}',
    PROFESSIONAL_ATTRIBUTES_LABEL.NICK_NAME.toLocaleLowerCase()
  ),
  [PROFESSIONAL_KEYS.CPF]: DEFAULT_ERROR_MESSAGE_M.replace(
    '{ATTRIBUTE}',
    PROFESSIONAL_ATTRIBUTES_LABEL.CPF.toLocaleLowerCase()
  ),
  [PROFESSIONAL_KEYS.CNPJ]: DEFAULT_ERROR_MESSAGE_M.replace(
    '{ATTRIBUTE}',
    PROFESSIONAL_ATTRIBUTES_LABEL.CNPJ.toLocaleLowerCase()
  ),
  [PROFESSIONAL_KEYS.CELLPHONE]: INVALID_ERROR_MESSAGE_F.replace(
    '{ATTRIBUTE}',
    PROFESSIONAL_ATTRIBUTES_LABEL.CELLPHONE.toLocaleLowerCase()
  ),
  [PROFESSIONAL_KEYS.EMAIL]: INVALID_ERROR_MESSAGE_F.replace(
    '{ATTRIBUTE}',
    PROFESSIONAL_ATTRIBUTES_LABEL.EMAIL.toLocaleLowerCase()
  ),
});

export const professionalsColumns = [
  {
    Header: 'Nome',
    accessor: 'name',
  },
  {
    Header: 'Apelido',
    accessor: 'nickname',
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
    Header: 'CPF',
    accessor: 'cpf',
  },
  {
    Header: 'CNPJ',
    accessor: 'cnpj',
  },
];
