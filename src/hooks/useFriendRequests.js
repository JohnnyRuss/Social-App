import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  sendRequest,
  cancelRequest,
  confirmRequest,
  deleteRequest,
  getRequests,
} from '../store/reducers/friendRequestsReducer';

export default function useFriendRequests(stateParams) {
  const dispatch = useDispatch();
  const { userId } = useParams();

  const [alreadySent, setAlreadySent] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [isFriend, setIsFriend] = useState(false);
  const [none, setNone] = useState(false);

  const sendFriendRequest = (userId) => dispatch(sendRequest({ userId, state: stateParams }));

  const cancelFriendRequest = (userId) => dispatch(cancelRequest({ userId, state: stateParams }));

  const confirmFriendRequest = (userId) => dispatch(confirmRequest({ userId, state: stateParams }));

  const deleteFriendRequest = (userId) => dispatch(deleteRequest({ userId, state: stateParams }));

  useEffect(() => {
    dispatch(getRequests());
  }, [dispatch]);

  const pendingRequests = useSelector((state) => state.requests.pendingRequests).map(
    (req) => req.userId
  );

  const sentRequests = useSelector((state) => state.requests.sentRequests).map(
    (req) => req?.userId
  );

  const userFriends = useSelector((state) => state.user.user.friends).map((friend) => friend.id);

  const activeUserId = useSelector((state) => state.userBasics.user.id);

  useEffect(() => {
    if (pendingRequests.includes(userId)) setIsPending(true);
    else setIsPending(false);
    if (sentRequests.includes(userId)) setAlreadySent(true);
    else setAlreadySent(false);
    if (userFriends.includes(activeUserId)) setIsFriend(true);
    else setIsFriend(false);
  }, [pendingRequests, sentRequests, userFriends, userId, activeUserId]);

  useEffect(() => {
    setNone(!isPending && !alreadySent && !isFriend);
  }, [alreadySent, isFriend, isPending]);

  return {
    alreadySent,
    isPending,
    isFriend,
    none,
    sendFriendRequest,
    cancelFriendRequest,
    confirmFriendRequest,
    deleteFriendRequest,
  };
}
