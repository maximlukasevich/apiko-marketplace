import React from 'react';
import { MessageModalComponent } from './MessageModalComponent';
import { IMessageModalProps } from './types';
import { useFormik, FormikValues, FormikProps } from 'formik';
import { IFormikValues } from './types';
import { useDispatch } from 'react-redux';
import { createChat } from '../../store/chats/actions';
import { useHistory } from 'react-router-dom';
import { routes } from '../../utils/routes';

export const MessageModal: React.FC<IMessageModalProps> = ({
  id,
  subject,
  avatar,
  fullName,
  location,
  children,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = (values: FormikValues) => {
    dispatch(createChat(values.text, values.productId));
    history.push(routes.INBOX);
  };

  const formik: FormikProps<IFormikValues> = useFormik<IFormikValues>({
    initialValues: {
      text: '',
      productId: id,
    },
    onSubmit: onSubmit,
  });

  return (
    <MessageModalComponent
      id={id}
      subject={subject}
      avatar={avatar}
      fullName={fullName}
      location={location}
      formik={formik}
      children={children}
    />
  );
};
