import { SIDE_MENU_ITEMS_ICONS } from './side-menu.constants';

export const itemMenuButtonStyles = ({ menuItemKey, isMenuItemSelected }) => {
  const hoverBackground = !isMenuItemSelected && 'rgb(166, 166, 174, 0.4)';

  const iconColor = isMenuItemSelected
    ? { color: 'azure' }
    : { color: 'lightGray' };

  const leftIcon = SIDE_MENU_ITEMS_ICONS[menuItemKey](iconColor);

  return {
    w: '100%',
    justifyContent: 'flex-start',
    pl: '8px',
    display: 'flex',
    alignItems: 'center',
    mb: '16px',
    variant: 'unstyled',
    _hover: { background: hoverBackground },
    leftIcon,
  };
};

export const sideMenuContainerStyles = {
  h: 'calc(100% - 16px);',
  bg: 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))',
  borderRadius: '16px',
  ml: '16px',
  padding: '16px',
  alignItems: 'left',
};

export const sideMenuItemsContainerStyles = {
  direction: 'column',
  alignItems: 'start',
  w: '100%',
  h: '100%',
  overflow: 'hidden',
};

export const linkStyle = { style: { width: '100%' } };

export const sideMenuWidthTransition = isMenuExpanded => {
  const transitionWidth = isMenuExpanded ? 256 : 64;
  return {
    style: { width: `${transitionWidth}px`, transition: 'width 0.5s' },
  };
};
