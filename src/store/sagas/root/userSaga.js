import { takeLatest } from 'redux-saga/effects';

import { getTimelinePosts, searchUser } from '../../reducers/timelineReducer';
import { getUser, getMe } from '../../reducers/userReducer';

import {
  getMeHandler,
  getUserHandler,
  getTimelinePostsHandler,
  searchUserHandler,
} from '../handlers/userHandler';

function* userSaga() {
  yield takeLatest(getMe, getMeHandler);
  yield takeLatest(getUser, getUserHandler);
  yield takeLatest(getTimelinePosts, getTimelinePostsHandler);
  yield takeLatest(searchUser, searchUserHandler);
}

export default userSaga;
