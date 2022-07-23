import styled from 'styled-components';
import { flexBox, flexProperty, boxShadowBlack } from '../../../styles/styled';
import { smallDesktop_1280 } from '../../media';

export const Container = styled.div`
  ${boxShadowBlack()};
  padding: 2rem;
  border-radius: 0.5rem;
  ${smallDesktop_1280({
    padding: '1rem',
  })}
`;

export const PostTools = styled.div`
  ${flexBox()};
  ${flexProperty({ justify: 'space-between', align: 'center' })};
  gap: 2rem;
  width: 90%;
  margin: 0 auto;
  padding: 1.5rem 0 0.5rem;
  border-top: 1px solid black;

  ${smallDesktop_1280({
    margin: '0.5rem 1.5rem 0',
    padding: '1rem 0 0',
    gap: '1rem',
  })}
`;
