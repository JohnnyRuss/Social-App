import { createSlice } from '@reduxjs/toolkit';

const userBasicInfoSlice = createSlice({
  name: 'basicInfo',
  initialState: {
    process: { error: false, pending: false, message: '' },
    user: {
      _id: '',
      role: '',
      userName: '',
      firstName: '',
      lastName: '',
      profileImg: {},
      isActive: false,
    },
  },
  reducers: {
    logIn(state) {
      localStorage.removeItem('persist:user');
      state.process.error = false;
      state.process.pending = true;
      state.process.message = '';
    },

    setLoggedInUser(state, { payload }) {
      const { data, refreshToken } = payload;
      Object.keys(data).forEach((key) => (state.user[key] = data[key]));
      localStorage.setItem('user', JSON.stringify(refreshToken));
      state.user.isActive = true;
      state.process.pending = false;
    },

    setNewProfileImage(state, { payload }) {
      state.user.profileImg.image = payload;
    },

    setAuthError(state, { payload }) {
      state.process.error = true;
      state.process.pending = false;
      state.process.message = payload.message;
    },
  },
});

export const userBasicInfoReducer = userBasicInfoSlice.reducer;
export const { logIn, setLoggedInUser, setNewProfileImage, setAuthError } =
  userBasicInfoSlice.actions;
