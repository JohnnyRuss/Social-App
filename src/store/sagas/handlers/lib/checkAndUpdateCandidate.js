import { call, put, select } from 'redux-saga/effects';

function* checkCandidateUpdate(postId) {
  const activeRelatedPosts = yield select(({ timeline }) => timeline.activeRelatedPosts);
  const localPosts = yield select(({ user }) => user.user.posts);
  const existInLocal = localPosts.map((post) => post.id).includes(postId);
  return { activeRelatedPosts, existInLocal };
}

export function* updateCandidate({ postId, localSetter, relatedSetter, data }) {
  //prettier-ignore
  const { activeRelatedPosts, existInLocal } = yield call(checkCandidateUpdate, postId);

  if (activeRelatedPosts) {
    yield put(relatedSetter(data));
    if (existInLocal) yield put(localSetter(data));

    return;
  }

  yield put(localSetter(data));
}
