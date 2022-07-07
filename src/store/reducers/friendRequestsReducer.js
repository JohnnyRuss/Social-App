import { createSlice } from '@reduxjs/toolkit';

const friendRequestsSlice = createSlice({
  name: 'friendRequests',
  initialState: {
    pendingRequests: [],
    sentRequests: [],
  },
  reducers: {
    getRequests() {},

    setRequests(state, { payload }) {
      state.sentRequests = payload.sentRequests.map((req) => ({
        userId: req.id,
        userImage: req.profileImg.image,
        userName: req.userName,
      }));

      state.pendingRequests = payload.pendingRequests.map((req) => ({
        userId: req.id,
        userImage: req.profileImg.image,
        userName: req.userName,
      }));
    },

    sendRequest() {},

    setNewRequest(state, { payload }) {
      state.sentRequests.push({
        userId: payload.id,
        userImage: payload.image,
        userName: payload.userName,
      });
    },

    confirmRequest() {},

    setConfirmedRequest(state, { payload }) {
      state.pendingRequests = state.pendingRequests.filter((req) => req.userId !== payload.id);
    },

    deleteRequest() {},

    setDeletedRequest(state, { payload }) {
      state.pendingRequests = state.pendingRequests.filter((req) => req.userId !== payload.id);
    },

    cancelRequest() {},

    setCanceledRequest(state, { payload }) {
      state.sentRequests = state.sentRequests.filter((req) => req.userId !== payload.id);
    },
  },
});

export const friendRequestsReducer = friendRequestsSlice.reducer;
export const {
  getRequests,
  setRequests,
  sendRequest,
  setNewRequest,
  confirmRequest,
  setConfirmedRequest,
  deleteRequest,
  setDeletedRequest,
  cancelRequest,
  setCanceledRequest,
} = friendRequestsSlice.actions;
