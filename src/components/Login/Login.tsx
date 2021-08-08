import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/viewer/actions';
import { LoginComponent } from './LoginComponent';
import { FormikValues, FormikErrors, FormikProps, useFormik } from 'formik';
import { IFormikValues } from './types';

export const Login: React.FC = () => {
  const dispatch = useDispatch();
  const onSubmit = (values: FormikValues) => {
    dispatch(login(values.email, values.password));
  };

  const validate = (values: IFormikValues) => {
    const errors: FormikErrors<IFormikValues> = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Required';
    }
    return errors;
  };

  const formik: FormikProps<IFormikValues> = useFormik<IFormikValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validate: validate,
    onSubmit: onSubmit,
  });

  return <LoginComponent formik={formik} />;
};
