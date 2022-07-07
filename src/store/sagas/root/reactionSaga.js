import { takeLatest } from 'redux-saga/effects';

import {
  reactOnPost,
  updateReactionOnPost,
  deleteReactionOnPost,
  reactOnComment,
  updateReactionOnComment,
  deleteReactionOnComment,
} from '../../reducers/appReducer';

import {
  reactOnPostHandler,
  updateReactionOnPostHandler,
  deleteReactionOnPostHandler,
  reactOnCommentHandler,
  updateReactionOnCommentHandler,
  deleteReactionOnCommentHandler,
} from '../handlers/reactionsHandler';

function* reactionSaga() {
  yield takeLatest(reactOnPost, reactOnPostHandler);
  yield takeLatest(updateReactionOnPost, updateReactionOnPostHandler);
  yield takeLatest(deleteReactionOnPost, deleteReactionOnPostHandler);
  yield takeLatest(reactOnComment, reactOnCommentHandler);
  yield takeLatest(updateReactionOnComment, updateReactionOnCommentHandler);
  yield takeLatest(deleteReactionOnComment, deleteReactionOnCommentHandler);
}

export default reactionSaga;
