import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userBasicInfoReducer } from './activeUserBasicInfoReducer';
import { userReducer } from './userReducer';
import { conversationReducer } from './conversationReducer';
import { timelineReducer } from './timelineReducer';
import { appReducer } from './appReducer';
import { chatHeadReducer } from './chatHeadReducer';
import { friendRequestsReducer } from './friendRequestsReducer';

const userPersistConfig = {
  key: 'user',
  version: 1,
  blacklist: [],
  storage,
};

const chatHeadPersistConfig = {
  key: 'chatHead',
  version: 1,
  blacklist: [],
  storage,
};

const persistedUser = persistReducer(userPersistConfig, userBasicInfoReducer);
const persistedChatHead = persistReducer(chatHeadPersistConfig, chatHeadReducer);

export const rootReducer = combineReducers({
  userBasics: persistedUser,
  user: userReducer,
  conversation: conversationReducer,
  timeline: timelineReducer,
  app: appReducer,
  chatHead: persistedChatHead,
  requests: friendRequestsReducer,
});
