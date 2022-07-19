// POSTS
export function deletePost({ payload, data }) {
  return data.filter((post) => post.id !== payload);
}

// REACTIONS
function reactionBody(data, state) {
  return {
    id: data._id,
    reaction: data.reaction,
    user: data.user,
    userImage: {
      image: state?.profileImg?.image,
    },
    userName: state?.userName,
  };
}

export function addPostReaction({ state, payload, location }) {
  const data = reactionBody(payload, state);
  location.find((post) => post.id === payload.post).reactions.push(data);
}

export function updateReactionOnPost({ payload, location }) {
  const { reactionId, postId, reaction } = payload;
  const i = location.findIndex((post) => post.id === postId);
  location[i].reactions.find((reaction) => reaction.id === reactionId).reaction = reaction;
}

export function deleteReactionOnPost({ payload, location }) {
  const { reactionId, postId } = payload;
  const i = location.findIndex((post) => post.id === postId);
  location[i].reactions = location[i].reactions.filter((reaction) => reaction.id !== reactionId);
}

export function addCommentReaction({ state, payload, location }) {
  const { data, postId } = payload;
  const newReaction = reactionBody(data, state);

  const i = location.findIndex((post) => post.id === postId);
  // eslint-disable-next-line array-callback-return
  location[i].comments.map((comment) => {
    if (comment.id === data.comment) comment.reactions.push(newReaction);
    else if (comment.replies.some((reply) => reply.id === data.comment)) {
      const x = comment.replies.findIndex((reply) => reply.id === data.comment);
      comment.replies[x].reactions?.push(newReaction);
    }
  });
}

export function commentReactionUpdate({ payload, location }) {
  const { postId, commentId, reactionId, reaction } = payload;

  const i = location.findIndex((post) => post.id === postId);
  // eslint-disable-next-line array-callback-return
  location[i].comments.map((comment) => {
    if (comment.id === commentId)
      comment.reactions.find((reaction) => reaction.id === reactionId).reaction = reaction;
    else if (comment.replies.some((reply) => reply.id === commentId)) {
      comment.replies
        .find((reply) => reply.id === commentId)
        .reactions.find((reaction) => reaction.id === reactionId).reaction = reaction;
    }
  });
}

export function commentReactionDelete({ payload, location }) {
  const { reactionId, postId, commentId } = payload;

  const i = location.findIndex((post) => post.id === postId);

  // eslint-disable-next-line array-callback-return
  location[i].comments.map((comment) => {
    if (comment.id === commentId)
      comment.reactions = comment.reactions.filter((reaction) => reaction.id !== reactionId);
    else if (comment.replies.some((reply) => reply.id === commentId)) {
      const x = comment.replies.findIndex((reply) => reply.id === commentId);
      comment.replies[x].reactions = comment.replies[x].reactions.filter(
        (reaction) => reaction.id !== reactionId
      );
    }
  });
}

// COMMENTS
export function addComment({ payload, location }) {
  //prettier-ignore
  const { data, state:{ postId, authorName, authorImage} } = payload;

  location
    .find((post) => post.id === postId)
    .comments.unshift({ ...data, authorName, authorImage, reactions: [], replies: [] });
}

export function updateComment({ payload, location }) {
  //prettier-ignore
  const { data, state:{ postId, commentId} } = payload;

  location
    .find((post) => post.id === postId)
    .comments.find((comment) => comment.id === commentId).text = data.text;
}

export function deleteComment({ payload, location }) {
  const { postId, commentId } = payload;

  const i = location.findIndex((post) => post.id === postId);

  location[i].comments = location[i].comments.filter((comment) => comment.id !== commentId);
}

export function addCommentReply({ payload, location }) {
  //prettier-ignore
  const { data, state:{ postId, commentId, authorName, authorImage} } = payload;

  location
    .find((post) => post.id === postId)
    .comments.find((comment) => comment.id === commentId)
    .replies.push({ ...data, authorName, authorImage, reactions: [] });
}

export function updateCommentReply({ payload, location }) {
  //prettier-ignore
  const {data, state:{ postId, commentId, childCommentId }} = payload;

  location
    .find((post) => post.id === postId)
    .comments.find((comment) => comment.id === commentId)
    .replies.find((reply) => reply.id === childCommentId).text = data.text;
}

export function deleteCommentReply({ payload, location }) {
  const { postId, commentId, childCommentId } = payload;

  const i = location.findIndex((post) => post.id === postId);
  const x = location[i].comments.findIndex((comment) => comment.id === commentId);

  location[i].comments[x].replies = location[i].comments[x].replies.filter(
    (comment) => comment.id !== childCommentId
  );
}
