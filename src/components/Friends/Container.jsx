import styled from 'styled-components';
const ContainerBox = styled.div`
  width: 100%;
`;

function Container({ children }) {
  return <ContainerBox>{children}</ContainerBox>;
}

export default Container;
