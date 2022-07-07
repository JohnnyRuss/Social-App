export const authenticationProcessSelector = ({ userBasics }) => userBasics.process;
export const userPageLoadingProcessSelector = ({ user }) => user.process;

export const userSelector = ({ userBasics }) => userBasics.user;

export const userNavInfoSelector = ({ userBasics }) => ({
  _id: userBasics.user._id,
  firstName: userBasics.user.firstName,
  profileImg: userBasics.user.profileImg,
  active: userBasics.user.isActive,
});

export const userProfileImageSelector = ({ user }) =>
  user.user.posts.find((post) => post.id === user.user.profileImg.post);

export const userCoverImageSelector = ({ user }) =>
  user.user.posts.find((post) => post.id === user.user.coverImg.post);

export const isActiveSelector = ({ user }) => user.user.isActive;

export const userShortInfoSelector = ({ user }) => ({
  userInfo: {
    friendsAmount: user.user.friends?.length,
    friends: user.user.friends?.slice(0, 8),
    userName: user.user.userName,
  },
  profileImg: user.user.profileImg,
  coverImg: user.user.coverImg,
});

export const userMediaAlbumsSelector = ({ user }) => user.user.userMeadiaAlbums;

export const userInfoSelector = (key, state) => ({
  userInfo: state[key].user.userInfo,
});

export const userPostsPageSelector = (state) => ({
  posts: state.user.user.posts,
  sideBarInfo: {
    hobbies: state.user.user.userInfo.hobbies,
    media: state.user.user.posts
      ?.filter((post) => Object.keys(post).includes('image'))
      .map((mediaPost) => ({ image: mediaPost.image, user: mediaPost.user, id: mediaPost.id }))
      .slice(0, 9),
    friends: state.user.user.friends?.slice(0, 9),
  },
});

export const userFriendsSelector = (state) => state.user.user.friends;

export const userHobbiesSelector = ({ userPage }) => userPage.user.userInfo.hobbies;

export const userPhotosSelector = ({ userPage }) => userPage.user.friends.photos;

export const timelinePostsSelector = ({ timeline }) => timeline.timelinePosts;

export const relatedPostsSelector = ({ timeline }) => ({
  process: timeline.getRelatedPostsProcess,
  relatedPosts: timeline.relatedPosts,
});
