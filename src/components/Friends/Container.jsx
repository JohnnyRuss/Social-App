import styled from 'styled-components';

const ContainerBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding-bottom: 4rem;
`;

function Container({ children }) {
  return <ContainerBox>{children}</ContainerBox>;
}

export default Container;
