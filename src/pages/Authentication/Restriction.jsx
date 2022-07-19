import { Fragment, useRef } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { Navigation } from '../../components';
import Conversation from '../../components/ChatHead/Conversation';

import { useRestriction } from '../../hooks';

function Restriction() {
  const activeUser = useRestriction();
  const { pathname } = useLocation();
  const messagesRout = useRef(pathname.includes('messages'));

  return (
    <Fragment>
      {activeUser ? (
        <Fragment>
          <Navigation />
          <Conversation />
          <Outlet />
        </Fragment>
      ) : (
        <Navigate to='/login' />
      )}
    </Fragment>
  );
}

export default Restriction;
