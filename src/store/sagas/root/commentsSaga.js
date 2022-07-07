import { takeLatest } from 'redux-saga/effects';

import {
  addComment,
  updateComment,
  deleteComment,
  addCommentReply,
  updateCommentReply,
  deleteCommentReply,
} from '../../reducers/appReducer';

import {
  addCommentHandler,
  updateCommentHandler,
  deleteCommentHandler,
  addCommentReplyHandler,
  updateCommentReplyHandler,
  deleteCommentReplyHandler,
} from '../handlers/commentsHandler';

function* commentsSaga() {
  yield takeLatest(addComment, addCommentHandler);
  yield takeLatest(updateComment, updateCommentHandler);
  yield takeLatest(deleteComment, deleteCommentHandler);
  yield takeLatest(addCommentReply, addCommentReplyHandler);
  yield takeLatest(updateCommentReply, updateCommentReplyHandler);
  yield takeLatest(deleteCommentReply, deleteCommentReplyHandler);
}

export default commentsSaga;
