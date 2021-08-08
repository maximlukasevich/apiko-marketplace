import React from 'react';
import { RegisterComponent } from './RegisterComponent';
import { useDispatch } from 'react-redux';
import { register } from '../../store/viewer/actions';
import { useFormik, FormikProps, FormikErrors, FormikValues } from 'formik';
import { IFormikValues } from './types';

export const Register = () => {
  const dispatch = useDispatch();
  const onSubmit = (values: FormikValues) => {
    dispatch(register(values.fullName, values.email, values.password));
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
    if (!values.fullName) {
      errors.fullName = 'Required';
    } else if (
      !/^[А-ЯA-Z][а-яa-z]+\s[А-ЯA-Z][а-яa-z]+$/i.test(values.fullName)
    ) {
      errors.fullName = 'First and last name entered incorrectly';
    }
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 6) {
      errors.password = 'At least 6 characters';
    }
    if (!values.passwordAgain) {
      errors.passwordAgain = 'Required';
    } else if (values.passwordAgain !== values.password) {
      errors.passwordAgain = 'Passwords do not match';
    }
    return errors;
  };

  const formik: FormikProps<IFormikValues> = useFormik<IFormikValues>({
    initialValues: {
      email: '',
      fullName: '',
      password: '',
      passwordAgain: '',
    },
    validate: validate,
    onSubmit: onSubmit,
  });

  return <RegisterComponent formik={formik} />;
};
