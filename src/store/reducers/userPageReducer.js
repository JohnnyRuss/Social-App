// import { createSlice } from '@reduxjs/toolkit';

// const userPageSlice = createSlice({
//   name: 'timeline',
//   initialState: {
//     process: { error: false, pending: false, message: '' },
//     user: {
//       _id: '',
//       role: '',
//       active: false,
//       email: '',
//       firstName: '',
//       lastName: '',
//       userName: '',
//       profileImg: '',
//       coverImg: '',
//       photos: [],
//       createdAt: undefined,
//       posts: [],
//       userInfo: {},
//       friends: [],
//     },
//   },
//   reducers: {
//     getUserPage(state, payload) {
//       state.process.error = false;
//       state.process.pending = true;
//       state.process.message = '';
//     },

//     setUserPage(state, { payload }) {
//       Object.keys(payload).forEach((key) => {
//         if (Object.keys(state.user).includes(key)) state.user[key] = payload[key];
//       });

//       state.process.pending = false;
//     },

//     setPageError(state, { payload }) {
//       state.process.error = true;
//       state.process.pending = false;
//       state.process.message = payload.message;
//     },
//   },
// });

// export const userPageReducer = userPageSlice.reducer;

// export const { getUserPage, setUserPage, setPageError } = userPageSlice.actions;
