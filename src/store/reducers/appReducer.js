import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    process: { error: false, pending: false, message: '' },
    createPostProcess: { error: false, pending: false, message: '' },
  },
  reducers: {
    uploadProfileImg(state) {
      state.process.error = false;
      state.process.pending = true;
      state.process.message = '';
    },

    uploadCoverImg(state) {
      state.process.error = false;
      state.process.pending = true;
      state.process.message = '';
    },

    createPost(state) {
      state.createPostProcess.error = false;
      state.createPostProcess.pending = true;
      state.createPostProcess.message = '';
    },

    createPostSuccess(state) {
      state.createPostProcess.error = false;
      state.createPostProcess.pending = false;
      state.createPostProcess.message = '';
    },

    createPostError(state, { payload }) {
      state.createPostProcess.error = true;
      state.createPostProcess.pending = false;
      state.createPostProcess.message = payload;
    },

    deletePost(state) {},

    updatePost(state) {},

    reactOnPost() {},

    updateReactionOnPost() {},

    deleteReactionOnPost() {},

    reactOnComment() {},

    updateReactionOnComment() {},

    deleteReactionOnComment() {},

    addComment() {},

    updateComment() {},

    deleteComment() {},

    addCommentReply() {},

    updateCommentReply() {},

    deleteCommentReply() {},

    setAppSuccess(state) {
      state.process.error = false;
      state.process.pending = false;
      state.process.message = '';
    },

    setAppError(state, { payload }) {
      state.process.error = true;
      state.process.pending = false;
      state.process.message = payload.message;
    },
  },
});

export const appReducer = appSlice.reducer;

export const {
  uploadProfileImg,
  uploadCoverImg,
  createPost,
  deletePost,
  updatePost,
  createPostSuccess,
  createPostError,
  reactOnPost,
  updateReactionOnPost,
  deleteReactionOnPost,
  reactOnComment,
  updateReactionOnComment,
  deleteReactionOnComment,
  addComment,
  updateComment,
  deleteComment,
  addCommentReply,
  updateCommentReply,
  deleteCommentReply,
  setAppSuccess,
  setAppError,
} = appSlice.actions;
