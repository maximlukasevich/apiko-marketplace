import {
  ChatsInitialState,
  ChatsActionCreatorsTypes,
  ChatsActionTypes,
} from '../../types/chats';

const initialState: ChatsInitialState = {
  chats: [],
  isChatsLoading: false,
};

export const chatsReducer = (
  state = initialState,
  action: ChatsActionCreatorsTypes
): ChatsInitialState => {
  switch (action.type) {
    case ChatsActionTypes.FETCH_CHATS:
      return {
        ...state,
        isChatsLoading: true,
      };
    case ChatsActionTypes.FETCH_CHATS_SUCCESS:
      return {
        ...state,
        isChatsLoading: false,
        chats: action.payload.sort(
          (a, b) => b.lastMessage.createdAt - a.lastMessage.createdAt
        ),
      };
    case ChatsActionTypes.FETCH_CHATS_ERROR:
      return {
        ...state,
        isChatsLoading: false,
        chats: [],
      };
    case ChatsActionTypes.ADD_LAST_MESSAGE:
      const chatIndex = state.chats.findIndex(
        (chat) => chat.id === action.payload.chatId
      );
      state.chats[chatIndex].lastMessage = action.payload.lastMessage;
      return {
        ...state,
        chats: [...state.chats],
      };
    default:
      return state;
  }
};
