import { takeLatest } from 'redux-saga/effects';

import { uploadProfileImg, uploadCoverImg } from '../../reducers/appReducer';
import { uploadProfileImgHandler, uploadCoverImgHandler } from '../handlers/userCoverHandler';

function* userCoverSaga() {
  yield takeLatest(uploadProfileImg, uploadProfileImgHandler);
  yield takeLatest(uploadCoverImg, uploadCoverImgHandler);
}

export default userCoverSaga;
