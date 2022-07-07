import { call, put } from 'redux-saga/effects';

import {
  getFriendRequests,
  sendRequest,
  confirmRequest,
  deleteRequest,
  cancelRequest,
} from '../api/friendRequests';

import {
  setRequests,
  setNewRequest,
  setConfirmedRequest,
  setDeletedRequest,
  setCanceledRequest,
} from '../../reducers/friendRequestsReducer';

export function* getFriendRequestsHandler() {
  try {
    //prettier-ignore
    const { data : { data } } = yield call(getFriendRequests);
    yield put(setRequests(data));
  } catch (error) {}
}

export function* sendRequestHandler({ payload }) {
  try {
    const { userId, state } = payload;
    yield call(sendRequest, userId);
    yield put(setNewRequest(state));
  } catch (error) {}
}

export function* confirmRequestHandler({ payload }) {
  try {
    const { userId, state } = payload;
    yield call(confirmRequest, userId);
    yield put(setConfirmedRequest(state));
  } catch (error) {}
}

export function* deleteRequestHandler({ payload }) {
  try {
    const { userId, state } = payload;
    yield call(deleteRequest, userId);
    yield put(setDeletedRequest(state));
  } catch (error) {}
}

export function* cancelRequestHandler({ payload }) {
  try {
    const { userId, state } = payload;
    yield call(cancelRequest, userId);
    yield put(setCanceledRequest(state));
  } catch (error) {}
}
