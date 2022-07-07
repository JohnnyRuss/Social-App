import { call } from 'redux-saga/effects';

import {
  addReactionOnPost,
  updatePostReaction,
  deletePostReaction,
  addReactionOnComment,
  updateCommentReaction,
  deleteCommentReaction,
} from '../../reducers/userReducer';

import {
  addReactionOnRelatedPost,
  updateRelatedPostReaction,
  deleteRelatedPostReaction,
  addReactionOnRelatedPostComment,
  updateRelatedPostCommentReaction,
  deleteRelatedPostCommentReaction,
} from '../../reducers/timelineReducer';

import {
  reactOnPost,
  updateReactionOnPost,
  deleteReactionOnPost,
  reactOnComment,
  updateReactionOnComment,
  deleteReactionOnComment,
} from '../api/reactionRequests';

import { updateCandidate } from './lib/checkAndUpdateCandidate';

export function* reactOnPostHandler({ payload }) {
  try {
    //prettier-ignore
    const {data : { data } } = yield call(reactOnPost, payload)

    yield call(updateCandidate, {
      postId: payload.post,
      localSetter: addReactionOnPost,
      relatedSetter: addReactionOnRelatedPost,
      data: data,
    });
  } catch (error) {}
}

export function* updateReactionOnPostHandler({ payload }) {
  try {
    const { credentials, state } = payload;
    yield call(updateReactionOnPost, credentials, state.reactionId);

    yield call(updateCandidate, {
      postId: state.postId,
      localSetter: updatePostReaction,
      relatedSetter: updateRelatedPostReaction,
      data: state,
    });
  } catch (error) {}
}

export function* deleteReactionOnPostHandler({ payload }) {
  try {
    const { reactionId } = payload;
    yield call(deleteReactionOnPost, reactionId);

    yield call(updateCandidate, {
      postId: payload.postId,
      localSetter: deletePostReaction,
      relatedSetter: deleteRelatedPostReaction,
      data: payload,
    });
  } catch (error) {}
}

export function* reactOnCommentHandler({ payload }) {
  try {
    //prettier-ignore
    const {data:{data}} = yield call(reactOnComment, payload)

    yield call(updateCandidate, {
      postId: payload.post,
      localSetter: addReactionOnComment,
      relatedSetter: addReactionOnRelatedPostComment,
      data: { data, postId: payload.post },
    });
  } catch (error) {}
}

export function* updateReactionOnCommentHandler({ payload }) {
  try {
    const { credentials, state } = payload;
    yield call(updateReactionOnComment, credentials, state.reactionId);

    yield call(updateCandidate, {
      postId: state.postId,
      localSetter: updateCommentReaction,
      relatedSetter: updateRelatedPostCommentReaction,
      data: state,
    });
  } catch (error) {}
}

export function* deleteReactionOnCommentHandler({ payload }) {
  try {
    const { reactionId } = payload;
    yield call(deleteReactionOnComment, reactionId);

    yield call(updateCandidate, {
      postId: payload.postId,
      localSetter: deleteCommentReaction,
      relatedSetter: deleteRelatedPostCommentReaction,
      data: payload,
    });
  } catch (error) {}
}
