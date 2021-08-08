import {
  MessagesActionCreatorsTypes,
  MessagesInitialState,
  MessagesActionTypes,
} from '../../types/messages';

const initialState: MessagesInitialState = {
  messages: [],
  isLoading: false,
  isFetchedAll: false,
  isMessageSent: false,
};

export const messagesReducer = (
  state = initialState,
  action: MessagesActionCreatorsTypes
): MessagesInitialState => {
  switch (action.type) {
    case MessagesActionTypes.FETCH_MESSAGES:
      return {
        ...state,
        isLoading: true,
        isFetchedAll: false,
      };
    case MessagesActionTypes.FETCH_MESSAGES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        messages: state.messages.concat(action.payload),
      };
    case MessagesActionTypes.FETCH_MESSAGES_ERROR:
      return {
        ...state,
        isLoading: false,
        messages: [],
      };
    case MessagesActionTypes.SEND_MESSAGE:
      return {
        ...state,
        isMessageSent: true,
      };
    case MessagesActionTypes.SEND_MESSAGE_SUCCESS:
      const messageIndex = state.messages.findIndex(
        (message) => message.id === action.payload.oldMessageId
      );
      state.messages[messageIndex].id = action.payload.message.id;
      return {
        ...state,
        isMessageSent: false,
        messages: state.messages,
      };
    case MessagesActionTypes.SEND_MESSAGE_ERROR:
      return {
        ...state,
        isMessageSent: false,
      };
    case MessagesActionTypes.ADD_MESSAGE:
      return {
        ...state,
        messages: [action.payload, ...state.messages],
      };
    case MessagesActionTypes.FETCH_ALL:
      return {
        ...state,
        isFetchedAll: true,
      };
    case MessagesActionTypes.CLEAR_MESSAGES:
      return {
        ...state,
        messages: [],
      };
    default:
      return state;
  }
};
