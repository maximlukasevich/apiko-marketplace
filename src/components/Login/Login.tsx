import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/user/actions';
import { LoginComponent } from './LoginComponent';
import { FormikValues } from 'formik';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useToast } from '@chakra-ui/react'; 

export const Login: React.FC = () => {
  const error = useTypedSelector(state => state.user.error);
  const toast = useToast();
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      toast({
        title: 'Error',
        description: error,
        status: 'error',
        position: 'top-right',
        duration: 3000,
        isClosable: true
      });
    }
  }, [error, toast]);
  const onSubmit = (values: FormikValues) => {
    dispatch(login(values.email, values.password));
  }
  return <LoginComponent onSubmit={onSubmit} />
}