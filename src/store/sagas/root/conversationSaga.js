import { takeLatest } from 'redux-saga/effects';

import {
  getAllConversations,
  getConversation,
  deleteConversation,
  sendMessage,
} from '../../reducers/conversationReducer';

import {
  getAllConversationsHandler,
  getConversationHandler,
  deleteConversationHandler,
  sendMessageHandler,
} from '../handlers/conversationHandler';

function* conversationSaga() {
  yield takeLatest(getAllConversations, getAllConversationsHandler);
  yield takeLatest(getConversation, getConversationHandler);
  yield takeLatest(deleteConversation, deleteConversationHandler);
  yield takeLatest(sendMessage, sendMessageHandler);
}

export default conversationSaga;
