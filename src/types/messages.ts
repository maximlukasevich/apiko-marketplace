export enum MessagesActionTypes {
  FETCH_MESSAGES = 'FETCH_MESSAGES',
  FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS',
  FETCH_MESSAGES_ERROR = 'FETCH_MESSAGES_ERROR',
  SEND_MESSAGE = 'SEND_MESSAGE',
  SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS',
  SEND_MESSAGE_ERROR = 'SEND_MESSAGE_ERROR',
  ADD_MESSAGE = 'ADD_MESSAGE',
  FETCH_ALL = 'FETCH_ALL',
  CLEAR_MESSAGES = 'CLEAR_MESSAGES',
}

export type MessagesActionCreatorsTypes = IFetchMessages |
                                          IFetchMessagesSuccess |
                                          IFetchMessagesError |
                                          ISendMessage |
                                          ISendMessageSuccess |
                                          ISendMessageError |
                                          IAddMessage |
                                          IFetchAll |
                                          IClearMessages;

export interface MessagesInitialState {
  messages: Array<IMessage>;
  isLoading: boolean;
  isFetchedAll: boolean;
  isMessageSent: boolean;
}

export interface IMessage {
  id: number;
  chatId: string;
  ownerId: string;
  text: string;
  read: boolean;
  createdAt: number;
  updatedAt: number | null;
}

interface IFetchMessages { 
  type: MessagesActionTypes.FETCH_MESSAGES; 
}

interface IFetchMessagesSuccess { 
  type: MessagesActionTypes.FETCH_MESSAGES_SUCCESS; 
  payload: Array<IMessage>;
}

interface IFetchMessagesError {
  type: MessagesActionTypes.FETCH_MESSAGES_ERROR;
}

interface ISendMessage {
  type: MessagesActionTypes.SEND_MESSAGE;
}

interface ISendMessageSuccess {
  type: MessagesActionTypes.SEND_MESSAGE_SUCCESS;
  payload: {
    message: IMessage;
    oldMessageId: number;
  }
}

interface ISendMessageError {
  type: MessagesActionTypes.SEND_MESSAGE_ERROR;
}

interface IAddMessage {
  type: MessagesActionTypes.ADD_MESSAGE;
  payload: IMessage;
}

interface IFetchAll {
  type: MessagesActionTypes.FETCH_ALL;
}

interface IClearMessages {
  type: MessagesActionTypes.CLEAR_MESSAGES;
}