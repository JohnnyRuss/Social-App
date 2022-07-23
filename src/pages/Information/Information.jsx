import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Container, SideBar } from '../../components/Information';

function Information() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('review');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <SideBar />
      <Outlet />
    </Container>
  );
}

export default Information;
