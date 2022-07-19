import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    process: { error: false, pending: false, message: '' },
    createPostProcess: { error: false, pending: false, message: '' },
  },
  reducers: {
    // USER COVER
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

    // POST CRUD
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

    // POST REACTIONS
    reactOnPost() {},

    updateReactionOnPost() {},

    deleteReactionOnPost() {},

    // COMMENT REACTIONS
    reactOnComment() {},

    updateReactionOnComment() {},

    deleteReactionOnComment() {},

    // COMMENT CRUD
    addComment() {},

    updateComment() {},

    deleteComment() {},

    addCommentReply() {},

    updateCommentReply() {},

    deleteCommentReply() {},

    // USER INFO
    updateUserInfo(stata) {},

    deleteUserInfo(stata) {},

    ////////////////////////

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
  // USER COVER
  uploadProfileImg,
  uploadCoverImg,
  // POST CRUD
  createPost,
  createPostSuccess,
  createPostError,
  deletePost,
  updatePost,
  // POST REACTIONS
  reactOnPost,
  updateReactionOnPost,
  deleteReactionOnPost,
  // COMMENT REACTIONS
  reactOnComment,
  updateReactionOnComment,
  deleteReactionOnComment,
  // COMMENT CRUD
  addComment,
  updateComment,
  deleteComment,
  addCommentReply,
  updateCommentReply,
  deleteCommentReply,
  // USER INFO
  updateUserInfo,
  deleteUserInfo,
  /////////////////
  setAppSuccess,
  setAppError,
} = appSlice.actions;
