import React from 'react';
import styles from './register.module.css';
import { AuthWrapper } from '../commons/AuthWrapper/AuthWrapper';
import { Center } from '@chakra-ui/react';
import { InputField } from '../commons/Input/Input';
import { Button } from '../commons/Button/Button';
import { FormikProps } from 'formik';
import { NavLink } from 'react-router-dom';
import { routes } from '../../utils/routes';
import { IFormikValues } from './types';

interface IRegisterComponent {
  formik: FormikProps<IFormikValues>;
}

export const RegisterComponent: React.FC<IRegisterComponent> = ({ formik }) => {

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