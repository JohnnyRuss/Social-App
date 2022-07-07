import React from 'react';

import { ListItem, Caption } from './styled';

function DetailedIcon({
  Icon,
  caption,
  captionSize,
  iconColor,
  iconSize,
  gap,
  size,
  breakPoints,
  onClick,
  id,
}) {
  return (
    <ListItem
      color={iconColor}
      gap={gap}
      iconSize={iconSize}
      size={size}
      breakPoints={breakPoints}
      onClick={onClick}
      htmlFor={id}>
      {Icon}
      <Caption captionSize={captionSize}>{caption}</Caption>
    </ListItem>
  );
}

export default DetailedIcon;
