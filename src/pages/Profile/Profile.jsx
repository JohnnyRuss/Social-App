import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';

import { getUser, getMe } from '../../store/reducers/userReducer';
import { userPageLoadingProcessSelector, userSelector } from '../../store/selectors/userSelector';

import { Container, UserCover, UserMenu, LandingContainer } from '../../components/Profile';
import { Spinner } from '../../components/Layouts';

function Profile() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  
  const { id } = useSelector(userSelector);
  const { pending } = useSelector(userPageLoadingProcessSelector);

  useEffect(() => {
    if (userId !== id) dispatch(getUser(userId));
    if (userId === id) dispatch(getMe());
  }, [dispatch, id, userId]);

  return (
    <Container>
      {pending && <Spinner />}
      {!pending && (
        <Fragment>
          <UserCover />
          <UserMenu />
          <LandingContainer>
            <Outlet />
          </LandingContainer>
        </Fragment>
      )}
    </Container>
  );
}

export default Profile;
