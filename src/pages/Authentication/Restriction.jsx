import { Fragment, useState, useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { Navigation, Conversation } from '../../components';

import { useRestriction } from '../../hooks';

function Restriction() {
  const activeUser = useRestriction();
  const { pathname } = useLocation();
  const [messagesRoute, setMessagesRoute] = useState(false);

  useEffect(() => {
    setMessagesRoute(pathname.includes('messages'));
  }, [pathname]);

  return (
    <Fragment>
      {activeUser ? (
        <Fragment>
          <Navigation />
          {!messagesRoute && <Conversation />}
          <Outlet />
        </Fragment>
      ) : (
        <Navigate to='/login' />
      )}
    </Fragment>
  );
}

export default Restriction;
