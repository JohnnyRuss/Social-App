import { authentication } from './axios-config';

export async function logIn(params) {
  return await authentication.post('/login', params);
}
