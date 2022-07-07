import { call, put } from 'redux-saga/effects';
import { logIn } from '../api/authenticationRequests';
import { setLoggedInUser, setAuthError } from '../../reducers/activeUserBasicInfoReducer';

export function* logInHandler({ payload }) {
  try {
    //prettier-ignore
    const {data} = yield call(logIn, payload);
    yield put(setLoggedInUser(data));
  } catch (error) {
    yield put(setAuthError({ message: error.response.data.message }));
  }
}
