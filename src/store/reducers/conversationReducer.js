import { createSlice } from '@reduxjs/toolkit';

const conversationSlice = createSlice({
  name: 'conversation',
  initialState: {
    modalProcess: { error: false, pending: false, message: '' },
    activeChatHeadsProcess: { error: false, pending: false, message: '' },
    messengerProcess: { error: false, pending: false, message: '' },
    conversation: {
      conversations: [],
    },
  },
  reducers: {
    getAllConversations(state, { payload: { process } }) {
      state[process].error = false;
      state[process].pending = true;
      state[process].message = '';
    },

    getConversation() {},

    deleteConversation() {},

    sendMessage(state) {
      state.process.error = false;
      state.process.pending = true;
      state.process.message = '';
    },

    setDeletedConversation(state, { payload }) {
      state.conversation.conversations = state.conversation.conversations.filter(
        (con) => con.id !== payload
      );
    },

    setConversations(state, { payload }) {
      const { data, id, process } = payload;

      const DB_Data = data.map((conversation) => {
        const adressat = conversation.users.find((user) => user._id !== id);

        const messages = conversation.messages?.map((msg) => ({
          user: msg?.user,
          text: msg?.text,
          createdAt: msg?.createdAt,
          _id: msg?._id,
        }));

        const lastMessage = messages?.[messages?.length - 1];

        return {
          id: conversation._id,
          adressat: adressat._id,
          adressatImage: adressat.profileImg,
          adressatName: adressat.userName,
          lastMessage: lastMessage,
          messages: messages,
        };
      });

      const existsInState = state.conversation.conversations.map((con) => con.id);

      DB_Data.forEach((con) => {
        if (!existsInState.includes(con.id)) state.conversation.conversations.push(con);
      });

      if (process) state[process].pending = false;
    },

    setNewMessage(state, { payload }) {
      const conversationIndex = state.conversation.conversations.findIndex(
        (con) => con.id === payload.conversation
      );

      const conversation = state.conversation.conversations[conversationIndex];

      const newMessage = {
        text: payload.text,
        user: payload.userId,
        createdAt: Date.now(),
      };

      conversation.messages.push(newMessage);
      conversation.lastMessage = newMessage;

      state.conversation.conversations[conversationIndex] = conversation;
    },

    setConversationError(state, { payload }) {
      const { process, message } = payload;
      state[process].error = true;
      state[process].pending = false;
      state[process].message = message;
    },
  },
});

export const conversationReducer = conversationSlice.reducer;
export const {
  getAllConversations,
  getConversation,
  deleteConversation,
  setDeletedConversation,
  sendMessage,
  setConversations,
  setNewMessage,
  setConversationError,
} = conversationSlice.actions;
