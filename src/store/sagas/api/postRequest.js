import { restrictedRoutes } from './axios-config';

export async function createPost(params) {
  return await restrictedRoutes.post('/posts/', params, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

export async function deletePost(params) {
  return await restrictedRoutes.delete(`/posts/${params}`);
}

export async function updatePost(credentials, postId) {
  return await restrictedRoutes.put(`/posts/${postId}`, credentials);
}

export async function getRelatedPosts(params) {
  const { type, user } = params;
  return restrictedRoutes(`/posts/relatedPosts/${type}/${user}`);
}
