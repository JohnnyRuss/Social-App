import { restrictedRoutes } from './axios-config';

export async function getUser(params) {
  return await restrictedRoutes(`/users/${params}`);
}

export async function getMe() {
  return await restrictedRoutes(`/users/getMe`);
}

export async function getTimelinePosts() {
  return await restrictedRoutes('/users/timeline');
}

export async function searchUser(query) {
  return await restrictedRoutes(`/users?search=${query}`);
}
