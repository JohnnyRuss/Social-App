import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
`;

const IconBox = styled.figcaption`
  font-size: ${({ iconSize }) => (iconSize ? iconSize : '2rem')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.figcaption`
  position: absolute;
  top: -0.4rem;
  right: -0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
  color: white;
`;

function Badge({ Icon, content, iconSize, onClick, onBlur }) {
  return (
    <Container onClick={onClick} onBlur={onBlur}>
      <IconBox iconSize={iconSize}>{Icon}</IconBox>
      {content && <Content>{content}</Content>}
    </Container>
  );
}

export default Badge;
