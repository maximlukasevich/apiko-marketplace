import { IChat } from '../../types/chats';

export interface IInboxProps {
  chats: Array<IChat>;
  isChatsLoading: boolean;
}

export interface IInboxComponentProps extends IInboxProps {
  showChats: boolean;
}
