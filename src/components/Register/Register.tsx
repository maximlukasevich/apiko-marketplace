import React, { useEffect } from 'react';
import { RegisterComponent } from './RegisterComponent';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { FormikValues } from 'formik';
import { useToast } from '@chakra-ui/react'; 
import { useDispatch } from 'react-redux';
import { register } from '../../store/user/actions';

export const Register = () => {
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
    dispatch(register(values.fullName, values.email, values.password));
  }
  return <RegisterComponent onSubmit={onSubmit} />
}