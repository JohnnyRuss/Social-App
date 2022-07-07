import { createSlice } from '@reduxjs/toolkit';

import {
  // Post
  deletePost,
  // Reactions
  addPostReaction,
  deleteReactionOnPost,
  updateReactionOnPost,
  addCommentReaction,
  commentReactionUpdate,
  commentReactionDelete,
  // Comments
  addComment,
  updateComment,
  deleteComment,
  addCommentReply,
  updateCommentReply,
  deleteCommentReply,
} from './lib/crossStateHelpers';

const userSlice = createSlice({
  name: 'User',
  initialState: {
    process: { error: false, pending: false, message: '' },
    user: {
      _id: '',
      role: '',
      active: false,
      email: '',
      firstName: '',
      lastName: '',
      userName: '',
      profileImg: '',
      coverImg: '',
      photos: [],
      createdAt: null,
      posts: [],
      userInfo: {},
      friends: [],
      userMeadiaAlbums: {
        profileImages: [],
        coverImages: [],
        timelineImages: [],
      },
      // pendingRequests: [],
      // sentRequests: [],
    },
  },
  reducers: {
    getMe(state) {
      state.process.error = false;
      state.process.pending = true;
      state.process.message = '';
    },

    getUser(state, payload) {
      state.process.error = false;
      state.process.pending = true;
      state.process.message = '';
    },

    setUser(state, { payload }) {
      Object.keys(payload).forEach((key) => {
        if (key === 'posts') {
          state.user[key] = payload[key].map((post) => ({
            ...destructurer(post, ['comments', 'reactions']),
            authorImg: payload.profileImg,
            authorName: payload.userName,
            comments: post.comments.map((comment) => ({
              ...destructurer(comment, ['author', 'reactions', 'replies']),
              ...destructureAuthor(comment),
              reactions: destructureReactions(comment),
              replies: comment.replies.map((reply) => ({
                ...destructurer(reply, ['author', 'reactions']),
                ...destructureAuthor(reply),
                reactions: destructureReactions(reply),
              })),
            })),
            reactions: destructureReactions(post),
          }));
        } else state.user[key] = payload[key];
      });

      state.process.pending = false;
      state.process.message = '';
    },

    // User-Cover & Media
    setProfileImage(state, { payload }) {
      state.user.profileImg = {
        image: payload.image,
        post: payload._id,
      };

      state.user.posts.unshift({
        ...payload,
        authorName: state.user.userName,
        authorImg: payload.image,
        comments: [],
        reactions: [],
      });
    },

    setCoverImage(state, { payload }) {
      state.user.coverImg = {
        image: payload.image,
        post: payload._id,
      };

      state.user.posts.unshift({
        ...payload,
        authorName: state.user.userName,
        authorImg: payload.image,
        comments: [],
        reactions: [],
      });
    },

    setUserMediaAlbums(state) {
      state.user.posts
        .filter((post) => Object.keys(post).includes('image'))
        .forEach((post) => {
          if (post.type === 'profileImage') state.user.userMeadiaAlbums.profileImages.push(post);
          else if (post.type === 'coverImage') state.user.userMeadiaAlbums.coverImages.push(post);
          else if (post.type === 'timeline') state.user.userMeadiaAlbums.timelineImages.push(post);
        });
    },

    resetUserMediaAlbums(state) {
      Object.keys(state.user.userMeadiaAlbums).forEach(
        (key) => (state.user.userMeadiaAlbums[key] = [])
      );
    },

    // Post
    setNewPost(state, { payload }) {
      state.user.posts.unshift({ ...payload, reactions: [], comments: [] });
    },

    deleteUserPost(state, { payload }) {
      state.user.posts = deletePost({ payload, data: state.user.posts });
    },

    updateUserPost(state, { payload }) {
      const { description, postId } = payload;
      state.user.posts.find((post) => post.id === postId).description = description;
    },

    // Reactions
    addReactionOnPost(state, { payload }) {
      addPostReaction({ state: state.user, payload, location: state.user.posts });
    },

    updatePostReaction(state, { payload }) {
      updateReactionOnPost({ payload, location: state.user.posts });
    },

    deletePostReaction(state, { payload }) {
      deleteReactionOnPost({ payload, location: state.user.posts });
    },

    addReactionOnComment(state, { payload }) {
      addCommentReaction({ state: state.user, payload, location: state.user.posts });
    },

    updateCommentReaction(state, { payload }) {
      commentReactionUpdate({ payload, location: state.user.posts });
    },

    deleteCommentReaction(state, { payload }) {
      commentReactionDelete({ payload, location: state.user.posts });
    },

    // Comments
    setNewComment(state, { payload }) {
      addComment({ payload, location: state.user.posts });
    },

    updateExistingComment(state, { payload }) {
      updateComment({ payload, location: state.user.posts });
    },

    deleteExistingComment(state, { payload }) {
      deleteComment({ payload, location: state.user.posts });
    },

    setNewCommentReply(state, { payload }) {
      addCommentReply({ payload, location: state.user.posts });
    },

    updateExistingCommentReply(state, { payload }) {
      updateCommentReply({ payload, location: state.user.posts });
    },

    deleteExistingCommentReply(state, { payload }) {
      deleteCommentReply({ payload, location: state.user.posts });
    },

    setPageError(state, { payload }) {
      state.process.error = true;
      state.process.pending = false;
      state.process.message = payload.message;
    },
  },
});

export const userReducer = userSlice.reducer;

export const {
  getMe,
  getUser,
  setUser,
  setProfileImage,
  setCoverImage,
  setUserMediaAlbums,
  resetUserMediaAlbums,
  setNewPost,
  deleteUserPost,
  updateUserPost,
  addReactionOnPost,
  updatePostReaction,
  deletePostReaction,
  addReactionOnComment,
  updateCommentReaction,
  deleteCommentReaction,
  setNewComment,
  updateExistingComment,
  deleteExistingComment,
  setNewCommentReply,
  updateExistingCommentReply,
  deleteExistingCommentReply,
  setPageError,
} = userSlice.actions;

function destructureReactions(target) {
  return target.reactions.map((reaction) => ({
    id: reaction._id,
    reaction: reaction.reaction,
    user: reaction.user._id,
    userImage: reaction.user.profileImg,
    userName: reaction.user.userName,
  }));
}

function destructureAuthor(target) {
  return {
    authorName: target.author.userName,
    authorImage: target.author.profileImg,
    authorId: target.author._id,
  };
}

function destructurer(target, excludeFields) {
  const keys = Object.keys(target);
  const temp = {};

  keys.map((key) => {
    if (!excludeFields.includes(key)) return (temp[key === '_id' ? 'id' : key] = target[key]);
    return null;
  });

  return temp;
}
