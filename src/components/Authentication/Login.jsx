import { Container } from './components/styled';
import SideBar from './components/SideBar';
import LogInForm from './components/LogInForm';
import { useAuthentication } from '../../hooks';

function Login() {
  const { handleForm, error, pending } = useAuthentication('logIn');

  return (
    <Container>
      <SideBar />
      <LogInForm handleForm={handleForm} error={error} pending={pending} />
    </Container>
  );
}

export default Login;
