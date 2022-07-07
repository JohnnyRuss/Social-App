import { restrictedRoutes } from './axios-config';

export async function reactOnPost(credentials) {
  return await restrictedRoutes.post(`/posts/postReactions`, credentials);
}

export async function updateReactionOnPost(credentials, reactionId) {
  return await restrictedRoutes.patch(`/posts/postReactions/${reactionId}`, credentials);
}

export async function deleteReactionOnPost(reactionId) {
  return await restrictedRoutes.delete(`/posts/postReactions/${reactionId}`);
}

export async function reactOnComment(credentials) {
  return await restrictedRoutes.post(`/posts/commentReactions`, credentials);
}

export async function updateReactionOnComment(credentials, reactionId) {
  return await restrictedRoutes.patch(`/posts/commentReactions/${reactionId}`, credentials);
}

export async function deleteReactionOnComment(reactionId) {
  return await restrictedRoutes.delete(`/posts/commentReactions/${reactionId}`);
}
