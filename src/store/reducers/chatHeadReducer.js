import { createSlice } from '@reduxjs/toolkit';

const ChatHeadSlice = createSlice({
  name: 'ChatHead',
  initialState: {
    conversations: [],
    minimisedConversations: [],
    extra: [],
    limit: 3,
  },
  reducers: {
    setConversation(state, { payload }) {
      orderAvailableAndMinimisedConversations({ state, payload });
    },

    removeConversation(state, { payload }) {
      fillterOut({ state, key: 'conversations', payload });
    },

    setMinimiseConversation(state, { payload }) {
      fillterOut({ state, key: 'conversations', payload });
      orderAvailableMinimisedAndExtraMinimisedConversations({ state, payload });
    },

    reActivateConversation(state, { payload }) {
      fillterOutMinimised({ state, payload });
    },

    removeConversationFromMinimised(state, { payload }) {
      if (state.minimisedConversations.includes(payload))
        fillterOut({ state, key: 'minimisedConversations', payload });
      else if (state.extra.includes(payload)) fillterOut({ state, key: 'extra', payload });

      reOrderMinimised({ state });
    },

    setAndUpdateAvailableWindowLimit(state, { payload }) {
      state.limit = payload;
      reOrderConversations({ state });
    },

    closeAllConversations(state) {
      state.conversations = [];
      state.minimisedConversations = [];
      state.extra = [];
    },

    minimiseAllActiveConversations(state) {
      state.conversations.forEach((win) =>
        orderAvailableMinimisedAndExtraMinimisedConversations({ state, payload: win })
      );
      state.conversations = [];
    },
  },
});

export const chatHeadReducer = ChatHeadSlice.reducer;

export const {
  setConversation,
  removeConversation,
  setMinimiseConversation,
  reActivateConversation,
  removeConversationFromMinimised,
  setAndUpdateAvailableWindowLimit,
  closeAllConversations,
  minimiseAllActiveConversations,
} = ChatHeadSlice.actions;

function orderAvailableAndMinimisedConversations({ state, payload }) {
  if (state.conversations.includes(payload)) return;
  else if (state.minimisedConversations.includes(payload)) {
    fillterOutAndPush({
      from: 'minimisedConversations',
      to: 'conversations',
      payload,
      state,
    });

    reOrderConversations({ state });

    return;
  } else if (state.extra.includes(payload)) {
    fillterOutAndPush({
      from: 'extra',
      to: 'conversations',
      payload,
      state,
    });

    reOrderConversations({ state });

    return;
  }

  reOrderConversations({ state, payload });
}

function orderAvailableMinimisedAndExtraMinimisedConversations({ state, payload }) {
  if (state.minimisedConversations.length === 6) {
    state.minimisedConversations.push(payload);

    const firstTwo = state.minimisedConversations.slice(0, 2);

    firstTwo.forEach((win) => {
      state.extra.push(win);
      state.minimisedConversations = state.minimisedConversations.filter(
        (conversation) => conversation !== win
      );
    });

    return;
  } else if (state.minimisedConversations.length === 5 && state.extra[0]) {
    state.minimisedConversations.push(payload);

    state.extra.push(state.minimisedConversations[0]);

    state.minimisedConversations.shift();

    return;
  } else state.minimisedConversations.push(payload);
}

function reOrderConversations({ state, payload }) {
  if (payload) state.conversations.push(payload);

  if (state.conversations.length > state.limit) {
    const availableWindows = state.conversations.slice(
      state.conversations.length - state.limit,
      state.conversations.length
    );

    const restWindows = state.conversations.slice(0, state.conversations.length - state.limit);
    restWindows.forEach((win) =>
      orderAvailableMinimisedAndExtraMinimisedConversations({ state, payload: win })
    );

    state.conversations = availableWindows;
  }

  reOrderMinimised({ state });
}

function reOrderMinimised({ state }) {
  if (!state.extra[0]) return;
  else if (
    state.extra.length === 1 ||
    (state.extra.length === 2 && state.minimisedConversations.length < 5)
  ) {
    state.extra.forEach((win) =>
      fillterOutAndPush({
        state,
        from: 'extra',
        to: 'minimisedConversations',
        payload: win,
      })
    );
    return;
  } else if (state.minimisedConversations.length < 5) {
    fillterOutAndPush({
      state,
      from: 'extra',
      to: 'minimisedConversations',
      payload: state.extra[state.extra.length - 1],
    });
    return;
  }
}

function fillterOutMinimised({ state, payload }) {
  if (state.minimisedConversations.includes(payload))
    fillterOut({ state, key: 'minimisedConversations', payload });
  else if (state.extra.includes(payload)) fillterOut({ state, key: 'extra', payload });

  reOrderConversations({ state, payload });
}

function fillterOut({ state, key, payload }) {
  state[key] = state[key].filter((conversation) => conversation !== payload);
}

function fillterOutAndPush({ state, from, to, payload }) {
  fillterOut({ state, key: from, payload });
  state[to].push(payload);
}
