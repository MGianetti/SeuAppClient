import React, { memo, useState } from 'react';
import { Box, Flex, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import routes from '../../config/routes';
import { SIDE_MENU_ITEMS_LABELS } from './side-menu.constants';
import {
  itemMenuButtonStyles,
  linkStyle,
  sideMenuContainerStyles,
  sideMenuItemsContainerStyles,
  sideMenuWidthTransition,
} from './side-menu.styles';

const SideMenu = props => {
  const { isMenuExpanded, onMouseEnter, onMouseLeave } = props;
  const [selectedMenuItem, setSelectedMenuItem] = useState(undefined);

  const handleMenuItemHighlight = menuItem => () =>
    setSelectedMenuItem(menuItem);

  return (
    <Box
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...sideMenuWidthTransition(isMenuExpanded)}
      {...sideMenuContainerStyles}
    >
      <Flex {...sideMenuItemsContainerStyles}>
        {Object.keys(SIDE_MENU_ITEMS_LABELS).map(menuItemKey => {
          const sideMenuItemKey = `${menuItemKey}-menu-item-key`;
          const sideMenuItemRoute = routes[menuItemKey.toLowerCase()].root;
          const isMenuItemSelected = selectedMenuItem === menuItemKey;

          return (
            <Link to={sideMenuItemRoute} key={sideMenuItemKey} {...linkStyle}>
              <Button
                onClick={handleMenuItemHighlight(menuItemKey)}
                {...itemMenuButtonStyles({ isMenuItemSelected, menuItemKey })}
              >
                {SIDE_MENU_ITEMS_LABELS[menuItemKey]}
              </Button>
            </Link>
          );
        })}
      </Flex>
    </Box>
  );
};

export default memo(SideMenu);
