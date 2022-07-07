import { call, put } from 'redux-saga/effects';

import { setAppError, setAppSuccess } from '../../reducers/appReducer';
import { setProfileImage, setCoverImage } from '../../reducers/userReducer';
import { setNewProfileImage } from '../../reducers/activeUserBasicInfoReducer';
import { uploadProfileImg, uploadCoverImg } from '../api/userCoverRequests';

export function* uploadProfileImgHandler({ payload }) {
  try {
    //prettier-ignore
    const { data: {data} } = yield call(uploadProfileImg, payload);
    yield put(setProfileImage(data));
    yield put(setNewProfileImage(data.image));
    yield put(setAppSuccess());
  } catch (error) {
    yield put(setAppError({ message: error.response.data.message }));
  }
}

export function* uploadCoverImgHandler({ payload }) {
  try {
    //prettier-ignore
    const { data: {data} } = yield call(uploadCoverImg, payload);
    yield put(setCoverImage(data));
    yield put(setAppSuccess());
  } catch (error) {
    yield put(setAppError({ message: error.response.data.message }));
  }
}
