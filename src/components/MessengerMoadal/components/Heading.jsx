import React from 'react';

import { Heading as HeadingContainer, Text, IconBox } from './styled';
import { FullScreenIcon } from '../../Layouts/Icons/icons';
function Heding({ text, withIcon }) {
  return (
    <HeadingContainer>
      <Text>{text}</Text>
      {withIcon && (
        <IconBox size={1.4}>
          <FullScreenIcon />
        </IconBox>
      )}
    </HeadingContainer>
  );
}

export default Heding;
