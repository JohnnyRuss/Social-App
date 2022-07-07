import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { small_640 } from '../../media';

const Loggo = styled.h1`
  color: white;
  font-size: 3rem;
  cursor: pointer;

  ${small_640({
    fontSize: '2.5rem',
  })}
`;

function Logo() {
  return (
    <Link to='/'>
      <Loggo>R</Loggo>
    </Link>
  );
}

export default Logo;
