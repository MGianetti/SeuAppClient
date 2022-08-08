import React, { memo } from 'react';
import { Avatar } from '@chakra-ui/react';

const ProfileAvatar = () => {
  return <Avatar size="sm" name="Kent Dodds" mr="32px" />;
};

export default memo(ProfileAvatar);
