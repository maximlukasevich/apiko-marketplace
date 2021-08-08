import { FormikProps } from 'formik';

export interface IMessageModalProps {
  id: string;
  subject: string;
  avatar: string | null;
  fullName: string;
  location: string | null;
}

export interface IMessageModalComponentProps extends IMessageModalProps {
  formik: FormikProps<IFormikInitialValues>;
}

export interface IFormikInitialValues {
  text: string;
  productId: string;
}