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

const timeleneSlice = createSlice({
  name: 'timeline',
  initialState: {
    process: { error: false, pending: false, message: '' },
    getRelatedPostsProcess: { error: false, pending: false, message: '' },
    searchProcess: { error: false, pending: false, message: '' },
    timelinePosts: [],
    relatedPosts: [],
    searchResults: [],
    activeRelatedPosts: false,
  },
  reducers: {
    getTimelinePosts(state, payload) {
      state.process.pending = true;
      state.process.pending = true;
      state.process.message = '';
    },

    setTimelinePosts(state, { payload }) {
      setPosts({ state, payload, destination: 'timelinePosts' });
      state.process.pending = false;
    },

    // SEARCH
    searchUser(state) {
      state.searchProcess.pending = true;
      state.searchProcess.pending = true;
      state.searchProcess.message = '';
    },

    setSearchResult(state, { payload }) {
      state.searchResults = payload.map((res) => ({
        id: res.id,
        userName: res.userName,
        profileImage: res.profileImg.image,
      }));

      state.searchProcess.pending = false;
    },

    clearSearchResults(state, { payload }) {
      state.searchResults = [];
    },

    // RELATED-POSTS
    getRelatedPosts(state) {
      state.getRelatedPostsProcess.error = false;
      state.getRelatedPostsProcess.pending = true;
      state.getRelatedPostsProcess.message = '';
      state.activeRelatedPosts = true;
    },

    setRelatedPosts(state, { payload }) {
      setPosts({ state, payload, destination: 'relatedPosts' });
      state.getRelatedPostsProcess.pending = false;
    },

    setRelatedPostsError(state, { payload }) {
      state.getRelatedPostsProcess.error = true;
      state.getRelatedPostsProcess.pending = false;
      state.getRelatedPostsProcess.message = payload;
      state.activeRelatedPosts = false;
    },

    deactivateRelatedPosts(state) {
      state.activeRelatedPosts = false;
      state.relatedPosts = [];
    },

    deleteRelatedPost(state, { payload }) {
      deletePost({ payload, location: state.relatedPosts });
    },

    // RELATED-POSTS-CRUD
    addReactionOnRelatedPost(state, { payload }) {
      addPostReaction({ state, payload, location: state.relatedPosts });
    },

    updateRelatedPostReaction(state, { payload }) {
      updateReactionOnPost({ payload, location: state.relatedPosts });
    },

    deleteRelatedPostReaction(state, { payload }) {
      deleteReactionOnPost({ payload, location: state.relatedPosts });
    },

    addReactionOnRelatedPostComment(state, { payload }) {
      addCommentReaction({ payload, location: state.relatedPosts });
    },

    updateRelatedPostCommentReaction(state, { payload }) {
      commentReactionUpdate({ payload, location: state.relatedPosts });
    },

    deleteRelatedPostCommentReaction(state, { payload }) {
      state.relatedPosts = commentReactionDelete({ payload, data: state.relatedPosts });
    },

    // RELATED-POSTS-COMMENTS

    addRelatedPostComment(state, { payload }) {
      addComment({ payload, location: state.relatedPosts });
    },

    updateRelatedPostComment(state, { payload }) {
      updateComment({ payload, location: state.relatedPosts });
    },

    deleteRelatedPostComment(state, { payload }) {
      deleteComment({ payload, location: state.relatedPosts });
    },

    addRelatedPostCommentReply(state, { payload }) {
      addCommentReply({ payload, location: state.relatedPosts });
    },

    updateRelatedPostCommentReply(state, { payload }) {
      updateCommentReply({ payload, location: state.relatedPosts });
    },

    deleteRelatedPostCommentReply(state, { payload }) {
      deleteCommentReply({ payload, location: state.relatedPosts });
    },

    setTimelineError(state, { payload }) {
      state.process.error = true;
      state.process.pending = false;
      state.process.message = payload.message;
    },
  },
});

export const timelineReducer = timeleneSlice.reducer;

export const {
  //TimelinePosts
  getTimelinePosts,
  setTimelinePosts,
  setTimelineError,
  // SEARCH
  searchUser,
  setSearchResult,
  clearSearchResults,
  // RelatedPosts
  getRelatedPosts,
  setRelatedPosts,
  setRelatedPostsError,
  deactivateRelatedPosts,
  deleteRelatedPost,
  // RelatedPosts Reactions
  addReactionOnRelatedPost,
  updateRelatedPostReaction,
  deleteRelatedPostReaction,
  addReactionOnRelatedPostComment,
  updateRelatedPostCommentReaction,
  deleteRelatedPostCommentReaction,
  // RelatedPosts Comments
  addRelatedPostComment,
  updateRelatedPostComment,
  deleteRelatedPostComment,
  addRelatedPostCommentReply,
  updateRelatedPostCommentReply,
  deleteRelatedPostCommentReply,
} = timeleneSlice.actions;

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

function setPosts({ state, payload, destination }) {
  state[destination] = payload.map((post) => ({
    ...destructurer(post, ['comments', 'reactions', 'user']),
    user: post.user.id,
    authorImg: post.user.profileImg,
    authorName: post.user.userName,
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
}
