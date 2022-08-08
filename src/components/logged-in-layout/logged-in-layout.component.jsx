import React, { memo, useState } from 'react';
import { Flex } from '@chakra-ui/react';

import Navbar from '../navbar';
import ContentContainer from '../content-container';
import SideMenu from '../side-menu';

const LoggedInLayout = ({ children }) => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  const handleMenuExpansion = () => setIsMenuExpanded(true);
  const handleMenuRetraction = () => setIsMenuExpanded(false);
  const handleToggleMenu = () => setIsMenuExpanded(!isMenuExpanded);

  return (
    <>
      <Navbar
        onHamburguerClick={handleToggleMenu}
        isMenuExpanded={isMenuExpanded}
      />
      <Flex height="calc(100vh - 64px);" minH="1024px">
        <SideMenu
          isMenuExpanded={isMenuExpanded}
          onMouseEnter={handleMenuExpansion}
          onMouseLeave={handleMenuRetraction}
        />
        <ContentContainer>{children}</ContentContainer>
      </Flex>
    </>
  );
};

export default memo(LoggedInLayout);
