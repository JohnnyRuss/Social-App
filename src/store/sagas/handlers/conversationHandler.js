import { call, put } from 'redux-saga/effects';

import { socket } from '../../socket';

import {
  setConversations,
  setNewMessage,
  setConversationError,
  setDeletedConversation,
} from '../../reducers/conversationReducer';
import { setConversation } from '../../reducers/chatHeadReducer';

import {
  getAllConversations,
  getConversation,
  deleteConversation,
  sendMessage,
} from '../api/conversationRequests';

export function* getAllConversationsHandler({ payload: { id, process } }) {
  try {
    //prettier-ignore
    const { data: {data} } = yield call(getAllConversations);
    yield put(setConversations({ data, id, process }));
  } catch (error) {
    yield put(setConversationError({ message: error.response?.data.message, process }));
  }
}

export function* getConversationHandler({ payload }) {
  try {
    const { adressatId, id } = payload;
    //prettier-ignore
    const { data: {data} } = yield call(getConversation, adressatId);
    yield put(setConversations({ data: [data], id }));
    yield put(setConversation(data.id));
  } catch (error) {
    console.log(error.response.data);
  }
}

export function* deleteConversationHandler({ payload }) {
  try {
    yield call(deleteConversation, payload);
    yield put(setDeletedConversation(payload));
  } catch (error) {}
}

export function* sendMessageHandler({ payload: { newMessage, credentials } }) {
  try {
    //prettier-ignore
    yield call(sendMessage, newMessage, credentials.conversation);
    socket.emit('sendMessage', credentials);
    yield put(setNewMessage(credentials));
  } catch (error) {
    // yield put(setAppError({ message: error.response?.data.message }));
  }
}
