import { call } from 'redux-saga/effects';

import {
  addComment,
  updateComment,
  deleteComment,
  addCommentReply,
  updateCommentReply,
  deleteCommentReply,
} from '../api/commentRequests';

import {
  setNewComment,
  updateExistingComment,
  deleteExistingComment,
  setNewCommentReply,
  updateExistingCommentReply,
  deleteExistingCommentReply,
} from '../../reducers/userReducer';

import {
  addRelatedPostComment,
  updateRelatedPostComment,
  deleteRelatedPostComment,
  addRelatedPostCommentReply,
  updateRelatedPostCommentReply,
  deleteRelatedPostCommentReply,
} from '../../reducers/timelineReducer';

import { updateCandidate } from './lib/checkAndUpdateCandidate';

export function* addCommentHandler({ payload }) {
  try {
    const { credentials, state } = payload;

    //prettier-ignore
    const { data: {data} } = yield call(addComment, credentials)

    yield call(updateCandidate, {
      postId: state.postId,
      localSetter: setNewComment,
      relatedSetter: addRelatedPostComment,
      data: { data, state },
    });
  } catch (error) {}
}

export function* updateCommentHandler({ payload }) {
  try {
    const { credentials, state } = payload;

    yield call(updateComment, credentials, state.commentId);

    yield call(updateCandidate, {
      postId: state.postId,
      localSetter: updateExistingComment,
      relatedSetter: updateRelatedPostComment,
      data: { data: credentials, state },
    });
  } catch (error) {}
}

export function* deleteCommentHandler({ payload }) {
  try {
    const { commentId } = payload;

    yield call(deleteComment, commentId);

    yield call(updateCandidate, {
      postId: payload.postId,
      localSetter: deleteExistingComment,
      relatedSetter: deleteRelatedPostComment,
      data: payload,
    });
  } catch (error) {}
}

export function* addCommentReplyHandler({ payload }) {
  try {
    const { credentials, state } = payload;

    //prettier-ignore
    const { data: {data} } = yield call(addCommentReply, credentials)

    yield call(updateCandidate, {
      postId: state.postId,
      localSetter: setNewCommentReply,
      relatedSetter: addRelatedPostCommentReply,
      data: { data, state },
    });
  } catch (error) {}
}

export function* updateCommentReplyHandler({ payload }) {
  try {
    const { credentials, state } = payload;

    yield call(updateCommentReply, credentials, state.childCommentId);

    yield call(updateCandidate, {
      postId: state.postId,
      localSetter: updateExistingCommentReply,
      relatedSetter: updateRelatedPostCommentReply,
      data: { data: credentials, state },
    });
  } catch (error) {}
}

export function* deleteCommentReplyHandler({ payload }) {
  try {
    const { childCommentId } = payload;

    yield call(deleteCommentReply, childCommentId);

    yield call(updateCandidate, {
      postId: payload.postId,
      localSetter: deleteExistingCommentReply,
      relatedSetter: deleteRelatedPostCommentReply,
      data: payload,
    });
  } catch (error) {}
}
