import React from 'react';
import styles from './login.module.css';
import { InputField } from '../commons/Input/Input';
import { AuthWrapper } from '../commons/AuthWrapper/AuthWrapper';
import { Button } from '../commons/Button/Button';
import { Center } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../utils/routes';
import { FormikProps } from 'formik';
import { IFormikValues } from './types';

interface ILoginComponent {
  formik: FormikProps<IFormikValues>;
}

export const LoginComponent: React.FC<ILoginComponent>= ({ formik }) => {
  return (
    <>
    <AuthWrapper>
      <Center>
        <h1 className={styles.heading}>Login</h1>
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
          required />
        <InputField 
          name='password'
          errors={formik.errors.password && formik.touched.password && formik.errors.password}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label='Password' 
          type='password'
          autoComplete='off'
          required />
        <div className={styles.rememberPasswordDiv}>
          <p className={styles.rememberPassword}>Don’t remember password?</p>
        </div>
        <Button type='submit'>
          Continue
        </Button>
      </form>
    </AuthWrapper> 

    <AuthWrapper className={styles.registerDiv}>
      <p>I have no account,{' '} 
        <NavLink to={routes.REGISTER}>
          <span className={styles.link}>REGISTER NOW</span>
        </NavLink>
      </p>
    </AuthWrapper>

    </>
  );
}
