import React from 'react';
import styles from './register.module.css';
import { AuthWrapper } from '../commons/AuthWrapper/AuthWrapper';
import { Center } from '@chakra-ui/react';
import { InputField } from '../commons/Input/Input';
import { Button } from '../commons/Button/Button';
import { useFormik, FormikProps, FormikErrors, FormikValues } from 'formik';
import { NavLink } from 'react-router-dom';
import { routes } from '../../utils/routes';

interface IFormikValues {
  email: string,
  fullName: string,
  password: string,
  passwordAgain: string,
}

interface IRegisterComponent {
  onSubmit: (values: FormikValues) => void;
}

export const RegisterComponent: React.FC<IRegisterComponent> = ({ onSubmit }) => {

  const validate = (values: IFormikValues) => {
    const errors: FormikErrors<IFormikValues> = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.fullName) {
      errors.fullName = 'Required';
    } else if (!/^[А-ЯA-Z][а-яa-z]+\s[А-ЯA-Z][а-яa-z]+$/i.test(values.fullName)) {
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
  }

  const formik: FormikProps<IFormikValues> = useFormik<IFormikValues>({
    initialValues: {
      email: '',
      fullName: '',
      password: '',
      passwordAgain: ''
    },
    validate: validate,
    onSubmit: onSubmit
  });

  return (
    <>
      <AuthWrapper>
        <Center>
          <h1 className={styles.heading}>Register</h1>
        </Center>
        <form onSubmit={formik.handleSubmit}>
          <InputField 
            name='email'
            errors={formik.errors.email && formik.touched.email && formik.errors.email}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label='Email' 
            type='email' 
            placeholder='Example@gmail.com'
            required
          />
          <InputField 
            name='fullName'
            errors={formik.errors.fullName && formik.touched.fullName && formik.errors.fullName}
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label='Full Name' 
            type='text' 
            placeholder='Tony Stark'
            required
          />
          <InputField 
            name='password'
            errors={formik.errors.password && formik.touched.password && formik.errors.password}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label='Password' 
            type='password' 
            autoComplete='off'
            required
          />
          <InputField 
            name='passwordAgain'
            errors={formik.errors.passwordAgain && formik.touched.passwordAgain && formik.errors.passwordAgain}
            value={formik.values.passwordAgain}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label='Password again' 
            type='password' 
            autoComplete='off'
            required
          />
          <Button type='submit' className={styles.button}>
            Register
          </Button>
        </form>
      </AuthWrapper>
      
      <AuthWrapper className={styles.loginDiv}>
        <p>I already have an account,{' '} 
          <NavLink to={routes.LOGIN}>
          <span className={styles.link}>LOG IN</span>
          </NavLink>
        </p>
      </AuthWrapper>
    </>
  );
}