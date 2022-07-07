import { takeLatest } from 'redux-saga/effects';
import { logIn } from '../../reducers/activeUserBasicInfoReducer';
import { logInHandler } from '../handlers/authenticationHandler';

function* authenticationSaga() {
  yield takeLatest(logIn, logInHandler);
}

export default authenticationSaga;
