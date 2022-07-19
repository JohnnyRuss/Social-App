import { Outlet } from 'react-router-dom';
import { Container, SideBar } from '../../components/Information';

function Information() {
  return (
    <Container>
      <SideBar />
      <Outlet />
    </Container>
  );
}

export default Information;
