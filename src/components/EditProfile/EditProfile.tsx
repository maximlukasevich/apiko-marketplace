import React, { useState } from 'react';
import axios from 'axios';
import { userUpdate } from '../../store/viewer/actions';
import { useDispatch } from 'react-redux';
import { FormikValues, FormikErrors, FormikProps, useFormik } from 'formik';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { EditProfileComponent } from './EditProfileComponent';
import {
  sendNotificationError,
  sendNotificationSuccess,
} from '../../store/notifications/actions';
import { IFormikValues } from './types';

export const EditProfile: React.FC = () => {
  const viewer = useTypedSelector((state) => state.viewer.viewer);
  const [avatarLoading, setAvatarLoading] = useState(false);
  const [avatar, setAvatar] = useState<string | null>(viewer.avatar);
  const dispatch = useDispatch();
  const onChange = (event: React.SyntheticEvent<HTMLInputElement>): void => {
    if (
      event.currentTarget?.files &&
      event.currentTarget?.files[0]?.type !== 'image/jpeg' &&
      event.currentTarget?.files[0]?.type !== 'image/png'
    ) {
      dispatch(
        sendNotificationError('File type does not match .jpeg, .jpg or .png')
      );
    } else {
      if (event.currentTarget.files !== null) {
        setAvatarLoading(true);
        const formData = new FormData();
        formData.append('image', event.currentTarget.files[0]);
        axios
          .post('/upload/images', formData, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          })
          .then((res) => {
            dispatch(
              sendNotificationSuccess('New photo uploaded successfully')
            );
            setAvatar(res.data);
            setAvatarLoading(false);
          })
          .catch((error) => {
            dispatch(sendNotificationError('Upload failed'));
            console.log(error);
            setAvatarLoading(false);
          });
      } else {
        dispatch(sendNotificationError('File not found'));
      }
    }
  };
  const onSubmit = (values: FormikValues): void => {
    dispatch(
      userUpdate(values.fullName, avatar, values.phone, values.location)
    );
  };

  const validate = (values: IFormikValues) => {
    const errors: FormikErrors<IFormikValues> = {};
    if (!values.fullName) {
      errors.fullName = 'Required';
    } else if (
      !/^[А-ЯA-Z][а-яa-z]+\s[А-ЯA-Z][а-яa-z]+$/i.test(values.fullName)
    ) {
      errors.fullName = 'First and last name entered incorrectly';
    }
    if (!values.phone) {
      errors.phone = 'Required';
    } else if (
      !/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/i.test(
        values.phone
      )
    ) {
      errors.phone = 'Incorrect phone number';
    }
    if (!values.location) {
      errors.location = 'Required';
    }
    return errors;
  };

  const formik: FormikProps<IFormikValues> = useFormik<IFormikValues>({
    initialValues: {
      fullName: viewer.fullName,
      phone: viewer.phone,
      location: viewer.location,
    },
    validate: validate,
    onSubmit: onSubmit,
  });

  return (
    <EditProfileComponent
      formik={formik}
      avatar={avatar}
      onChange={onChange}
      avatarLoading={avatarLoading}
    />
  );
};
