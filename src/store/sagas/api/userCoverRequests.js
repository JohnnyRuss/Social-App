import { restrictedRoutes } from './axios-config';

export async function uploadProfileImg(params) {
  return await restrictedRoutes.post('/users/updateMe/profileImg', params, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

export async function uploadCoverImg(params) {
  return await restrictedRoutes.post('/users/updateMe/coverImg', params, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}
