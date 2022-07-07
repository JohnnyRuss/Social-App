import axios from 'axios';

const USER = JSON.parse(localStorage.getItem('user'));

export const authentication = axios.create({
  baseURL: 'http://localhost:8800/api/v1/auth',
  withCredentials: true,
  headers: {
    authorization: USER,
  },
});

export const restrictedRoutes = axios.create({
  baseURL: 'http://localhost:8800/api/v1',
  withCredentials: true,
});

const refresh = axios.create({
  baseURL: 'http://localhost:8800/api/v1/auth/refresh',
  withCredentials: true,
  headers: {
    authorization: USER,
  },
  method: 'POST',
});

restrictedRoutes.interceptors.response.use(
  (response) => response,
  async (err) => {
    const config = err.config;
    const error = err.response.data;

    if (error.message === 'jwt expired' && USER) return await reAuthorized(config);

    if (error.message === 'you are not authorized' && error.statusCode === 401 && USER)
      return await reAuthorized(config);

    return Promise.reject(err);
  }
);

async function reAuthorized(config) {
  config.sent = true;

  //prettier-ignore
  const {data : { refresher:refreshToken } } = await refresh();
  localStorage.setItem('user', JSON.stringify(refreshToken));

  return restrictedRoutes(config);
}

function defineURL(path) {
  const { pathname } = new URL(window.location.href);
  const location = pathname.split('/')[1];
  console.log(pathname);
  return location === path;
}

// const test = defineURL('profile');
// console.log(test);
