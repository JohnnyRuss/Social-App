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

  const activeUserId = useSelector((state) => state.userBasics.user.id);

  // FETCH DATA IF IT'S NOT ALREADY FETCHED
  const isFetched = useSelector((state) => state.requests.isFetched);

  useEffect(() => {
    if (isFetched) return;
    dispatch(getRequests());
  }, [dispatch, isFetched]);

  // Preserve Necessary State Data
  const pendingRequests = useSelector((state) => state.requests.pendingRequests);

  const pendingRequestsIds = pendingRequests?.map((req) => req?.userId);

  const sentRequests = useSelector((state) => state.requests.sentRequests);

  const sentRequestsIds = sentRequests?.map((req) => req?.userId);

  const userFriends = useSelector((state) => state.user.user.friends).map((friend) => friend.id);

  // Set States To Identifie If User Already Sent Or Get Request, Even Check If User Is Already Friend
  const [alreadySent, setAlreadySent] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [isFriend, setIsFriend] = useState(false);
  const [none, setNone] = useState(false);

  useEffect(() => {
    if (pendingRequestsIds.includes(userId)) setIsPending(true);
    else setIsPending(false);
    if (sentRequestsIds.includes(userId)) setAlreadySent(true);
    else setAlreadySent(false);
    if (userFriends.includes(activeUserId)) setIsFriend(true);
    else setIsFriend(false);
  }, [pendingRequestsIds, sentRequestsIds, userFriends, userId, activeUserId]);

  useEffect(() => {
    setNone(!isPending && !alreadySent && !isFriend);
  }, [alreadySent, isFriend, isPending]);

  // Action Creators To SEND, CONFIRM, CANCEL OR DELETE Request
  const sendFriendRequest = (userId) => dispatch(sendRequest({ userId, state: stateParams }));

  const cancelFriendRequest = (userId) => dispatch(cancelRequest({ userId, state: stateParams }));

  const confirmFriendRequest = (userId) => dispatch(confirmRequest({ userId, state: stateParams }));

  const deleteFriendRequest = (userId) => dispatch(deleteRequest({ userId, state: stateParams }));

  return {
    pendingRequests,
    sentRequests,
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
