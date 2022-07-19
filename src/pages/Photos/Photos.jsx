import { Outlet, useLocation } from 'react-router-dom';
import { Container, Navigation, AllPhotos } from '../../components/Photos';

function Photos() {
  const candidatePaths = ['allPhotos', 'albums'];
  const { pathname } = useLocation();
  const possibleRoute = candidatePaths.some((route) => pathname.includes(route));

  return (
    <Container>
      <Navigation />
      {possibleRoute && <Outlet />}
      {!possibleRoute && <AllPhotos />}
    </Container>
  );
}

export default Photos;
