import { FiUser, FiScissors, FiShoppingBag } from 'react-icons/fi';

export const SIDE_MENU_ITEMS_LABELS = Object.freeze({
  CLIENTS: 'Clientes',
  SERVICES: 'Serviços',
  PRODUCTS: 'Produtos',
  PROFESSIONALS: 'Profissionais',
  EXIBITION: 'Exibição',
});

export const SIDE_MENU_ITEMS_ICONS = Object.freeze({
  CLIENTS: props => <FiUser {...props} h="24px" w="24px" />,
  SERVICES: props => <FiScissors outlined {...props} sors h="24px" w="24px" />,
  PRODUCTS: props => <FiShoppingBag {...props} pingBag h="24px" w="24px" />,
  PROFESSIONALS: props => <FiUser {...props} h="24px" w="24px" />,
  EXIBITION: props => <FiUser {...props} h="24px" w="24px" />,
});
