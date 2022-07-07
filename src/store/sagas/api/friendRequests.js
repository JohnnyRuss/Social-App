import { restrictedRoutes } from './axios-config';

export async function getFriendRequests() {
  return restrictedRoutes.get(`/users/friendRequests`);
}

export async function sendRequest(userId) {
  return restrictedRoutes.post(`/users/${userId}/addToFriends`);
}

export async function confirmRequest(userId) {
  return restrictedRoutes.post(`/users/${userId}/confirmFriend`);
}

export async function deleteRequest(userId) {
  return restrictedRoutes.delete(`/users/${userId}/deleteRequest`);
}

export async function cancelRequest(userId) {
  return restrictedRoutes.patch(`/users/${userId}/cancelRequest`);
}
