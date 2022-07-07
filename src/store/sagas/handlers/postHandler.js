import { call, put } from 'redux-saga/effects';

import { createPostSuccess, createPostError } from '../../reducers/appReducer';
import { setNewPost, deleteUserPost, updateUserPost } from '../../reducers/userReducer';
import { setRelatedPosts, deleteRelatedPost } from '../../reducers/timelineReducer';
import { createPost, deletePost, updatePost, getRelatedPosts } from '../api/postRequest';

import { updateCandidate } from './lib/checkAndUpdateCandidate';

export function* createPostHandler({ payload }) {
  try {
    //prettier-ignore
    const { data : { data } }= yield call(createPost, payload);
    yield put(setNewPost(data));
    yield put(createPostSuccess());
  } catch (error) {
    console.log(error.response.data.message);
    yield put(createPostError(error.response.data.message));
  }
}

export function* deletePostHandler({ payload }) {
  try {
    yield call(deletePost, payload);

    yield call(updateCandidate, {
      postId: payload,
      localSetter: deleteUserPost,
      relatedSetter: deleteRelatedPost,
      data: payload,
    });
  } catch (error) {}
}

export function* updatePostHandler({ payload }) {
  try {
    //prettier-ignore
    const { credentials, state:{ postId} } = payload;
    yield call(updatePost, credentials, postId);
    yield put(updateUserPost({ postId, description: credentials.description }));
  } catch (error) {}
}

export function* getRelatedPostsHandler({ payload }) {
  try {
    //prettier-ignore
    const {data:{data}} = yield call(getRelatedPosts, payload)
    yield put(setRelatedPosts(data));
  } catch (error) {}
}
