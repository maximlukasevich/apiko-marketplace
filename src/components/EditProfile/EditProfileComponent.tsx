import React from 'react';
import styles from './edit-profile.module.css';
import { IFormikValues } from './types';
import { Avatar } from '../commons/Avatar/Avatar';
import { FormikProps } from 'formik';
import { InputField } from '../commons/Input/Input';
import { Button } from '../commons/Button/Button';

interface IEditProfileComponent {
  avatar?: string | null;
  avatarLoading?: boolean;
  formik: FormikProps<IFormikValues>;
  onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}

export const EditProfileComponent: React.FC<IEditProfileComponent> = ({ 
  avatar, avatarLoading, formik, onChange
}) => {

  return (
    <div className={styles.editProfile}>
      <p className={styles.title}>Edit profile</p>
      <div className={styles.changeAvatar}>
        <Avatar className={styles.avatar} name={formik.values.fullName} size='xl' avatar={avatar} />
        <label className={styles.loadLabel}>
          {avatarLoading 
          ? 'Loading...'
          : 'Upgrade Photo'
          }
          <input type='file' onChange={onChange} disabled={avatarLoading} />
        </label>
      </div>

      <form onSubmit={formik.handleSubmit} className={styles.form}>
          <InputField 
            name='fullName'
            errors={formik.errors.fullName && formik.touched.fullName && formik.errors.fullName}
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label='Full Name' 
            type='text' 
            placeholder='Tony Stark'
            required />

          <InputField 
            name='phone'
            errors={formik.errors.phone && formik.touched.phone && formik.errors.phone}
            value={formik.values.phone || ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label='Phone number' 
            type='tel'
            required />

          <InputField 
            name='location'
            errors={formik.errors.location && formik.touched.location && formik.errors.location}
            value={formik.values.location || ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label='Location' 
            type='text' 
            placeholder='Los Angeles, CA'
            required />
            
          <Button className={styles.button} type='submit'>Save</Button>
        </form>
    </div>
  );
}