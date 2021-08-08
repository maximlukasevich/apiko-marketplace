export enum ChatActionTypes {
  FETCH_CHATS = 'FETCH_CHATS',
  FETCH_CHATS_SUCCESS = 'FETCH_CHATS_SUCCESS',
  FETCH_CHATS_ERROR = 'FETCH_CHATS_ERROR',
  CREATE_CHAT_SUCCESS = 'CREATE_CHAT_SUCCESS',
  CREATE_CHAT_ERROR = 'CREATE_CHAT_ERROR',
  ADD_LAST_MESSAGE = 'ADD_LAST_MESSAGE',
}

export type TAction = IFetchChats |
                      IFetchChatsSuccess |
                      IFetchChatsError |
                      ICreateChatSuccess |
                      ICreateChatError |
                      IAddLastMessage;

export interface IInitialState {
  chats: Array<IChat>;
  isChatsLoading: boolean;
}

export interface IChat {
  id: string;
  productId: string;
  ownerId: string;
  createdAt: number;
  updatedAt: number | null;
  lastMessage: ILastMessage;
  product: {
    id: string;
    ownerId: string;
    title: string;
    photos: Array<string>;
    description: string | null;
    location: string;
    price: number;
    createdAt: number;
    updatedAt: number | null;
    saved: boolean;
  };
  participants: Array<IParticipant>;
}

export interface IParticipant {
  id: string;
  fullName: string;
  location: string | null;
  avatar: string | null;
  phone:  string | null;
  createdAt: number;
  updatedAt:  number | null;
}

interface ILastMessage {
  id: number;
  chatId: string;
  ownerId: string;
  text: string;
  read: boolean;
  createdAt: number;
  updatedAt: number | null;
}

interface IFetchChats { 
  type: ChatActionTypes.FETCH_CHATS;
}

interface IFetchChatsSuccess { 
  type: ChatActionTypes.FETCH_CHATS_SUCCESS;
  payload: Array<IChat>;
}

interface IFetchChatsError {
  type: ChatActionTypes.FETCH_CHATS_ERROR;
}

interface ICreateChatSuccess {
  type: ChatActionTypes.CREATE_CHAT_SUCCESS;
}

interface ICreateChatError {
  type: ChatActionTypes.CREATE_CHAT_ERROR;
}

interface IAddLastMessage {
  type: ChatActionTypes.ADD_LAST_MESSAGE;
  payload: {
    lastMessage: ILastMessage,
    chatId: string,
  }
}