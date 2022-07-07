import styled from 'styled-components';
import { fontSize } from '../../../../styles/styled';

const Text = styled.p`
  padding-top: 2rem;
  ${fontSize('regullarSize')}
`;

function PostDescription({ description }) {
  return <Text>{description}</Text>;
}

export default PostDescription;
