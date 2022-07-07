import { takeLatest } from 'redux-saga/effects';

import {
  getRequests,
  sendRequest,
  confirmRequest,
  deleteRequest,
  cancelRequest,
} from '../../reducers/friendRequestsReducer';

import {
  getFriendRequestsHandler,
  sendRequestHandler,
  confirmRequestHandler,
  deleteRequestHandler,
  cancelRequestHandler,
} from '../handlers/friendRequestsHandler';

function* friendRequestsSaga() {
  yield takeLatest(getRequests, getFriendRequestsHandler);
  yield takeLatest(sendRequest, sendRequestHandler);
  yield takeLatest(confirmRequest, confirmRequestHandler);
  yield takeLatest(deleteRequest, deleteRequestHandler);
  yield takeLatest(cancelRequest, cancelRequestHandler);
}

export default friendRequestsSaga;
