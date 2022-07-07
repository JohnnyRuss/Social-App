import { call, put } from 'redux-saga/effects';
import { getMe, getUser, getTimelinePosts, searchUser } from '../api/userRequests';
import { setUser } from '../../reducers/userReducer';
import { setTimelinePosts, setSearchResult } from '../../reducers/timelineReducer';

export function* getUserHandler({ payload }) {
  try {
    //prettier-ignore
    const {data:{data}} = yield call(getUser, payload);
    yield put(setUser(data));
  } catch (error) {
    console.log({ error: error.response, handler: 'getMeHandler' });
  }
}

export function* getMeHandler() {
  try {
    //prettier-ignore
    const {data:{data}} = yield call(getMe);
    yield put(setUser(data));
  } catch (error) {
    console.log({
      handler: 'getMeHandler',
      error: error.response || error.message,
      stack: error.response ? null : error.stack,
    });
  }
}

export function* getTimelinePostsHandler({ payload }) {
  try {
    //prettier-ignore
    const {data:{data}} = yield call(getTimelinePosts);
    yield put(setTimelinePosts(data));
  } catch (error) {
    console.log({
      error: error.response.data || error.message,
      handler: 'getTimelinePostsHandler',
    });
  }
}

export function* searchUserHandler({ payload }) {
  try {
    //prettier-ignore
    const { data : { data } } = yield call(searchUser, payload)
    yield put(setSearchResult(data));
  } catch (error) {}
}
