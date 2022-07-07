import { takeLatest } from 'redux-saga/effects';

import { createPost, deletePost, updatePost } from '../../reducers/appReducer';
import { getRelatedPosts } from '../../reducers/timelineReducer';
import {
  createPostHandler,
  deletePostHandler,
  updatePostHandler,
  getRelatedPostsHandler,
} from '../handlers/postHandler';

function* postSaga() {
  yield takeLatest(createPost, createPostHandler);
  yield takeLatest(deletePost, deletePostHandler);
  yield takeLatest(updatePost, updatePostHandler);
  yield takeLatest(getRelatedPosts, getRelatedPostsHandler);
}

export default postSaga;
