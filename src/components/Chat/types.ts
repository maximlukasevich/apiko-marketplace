import { FormikProps } from 'formik';
import { IMessage } from '../../types/messages';
import { IChat, IParticipant } from '../../types/chats';
import { IProduct } from '../../types/products';

export interface IFormikInitialValues {
  text: string;
}

export interface IChatProps {
  chats: Array<IChat>;
  messages: Array<IMessage>;
  isFetchedAll: boolean;
  isLoading: boolean;
}

export interface IChatComponentProps extends IChatProps {
  saller: IParticipant;
  product: IProduct;
  formik: FormikProps<IFormikInitialValues>;
  fetchMore: () => void;
  chatBottomRef: any;
}