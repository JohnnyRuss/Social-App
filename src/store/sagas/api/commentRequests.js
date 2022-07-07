import { restrictedRoutes } from './axios-config';

export async function addComment(credentials) {
  return restrictedRoutes.post('/posts/comments', credentials);
}

export async function updateComment(credentials, id) {
  return restrictedRoutes.patch(`/posts/comments/${id}`, credentials);
}

export async function deleteComment(id) {
  return restrictedRoutes.delete(`/posts/comments/${id}`);
}

export async function addCommentReply(credentials) {
  return restrictedRoutes.post('/posts/commentReplies', credentials);
}

export async function updateCommentReply(credentials, id) {
  return restrictedRoutes.patch(`/posts/commentReplies/${id}`, credentials);
}

export async function deleteCommentReply(id) {
  return restrictedRoutes.delete(`/posts/commentReplies/${id}`);
}
