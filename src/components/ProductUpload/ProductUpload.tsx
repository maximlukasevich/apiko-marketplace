import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { ProductUploadComponent } from './ProductUploadComponent';
import { useFormik, FormikValues, FormikErrors, FormikProps } from 'formik';
import { IFormikInitialValues } from './types';
import {
  sendNotificationError,
  sendNotificationSuccess,
} from '../../store/notifications/actions';
import { uploadProduct } from '../../store/products/actions';

export const ProductUpload = () => {
  const [photos, setPhotos] = useState<Array<string>>([]);
  const dispatch = useDispatch();

  const onSubmit = (values: FormikValues) => {
    if (photos.length === 0) {
      dispatch(sendNotificationError('Upload at least one photo'));
    } else {
      dispatch(
        uploadProduct(
          values.title,
          values.description,
          photos,
          values.location,
          values.price
        )
      );
      values.title = '';
      values.location = '';
      values.description = '';
      values.price = 0;
      setPhotos([]);
    }
  };

  const onPhotosChange = (
    event: React.SyntheticEvent<HTMLInputElement>
  ): void => {
    if (event.currentTarget?.files) {
      const photosArray = Array.from(event.currentTarget.files);
      photosArray.forEach((photo) => {
        if (photo.type !== 'image/jpeg' && photo.type !== 'image/png') {
          dispatch(
            sendNotificationError(
              `File: ${photo.name} does not match .jpeg, .jpg or .png'`
            )
          );
        } else {
          const formData = new FormData();
          formData.append(`image`, photo);
          axios
            .post('/upload/images', formData, {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
            })
            .then((res) => {
              dispatch(
                sendNotificationSuccess(
                  `Photo ${photo.name} successfully uploaded`
                )
              );
              setPhotos((prevState) => prevState.concat(res.data));
            })
            .catch((error) => {
              dispatch(sendNotificationError('Upload failed'));
              console.log(error);
            });
        }
      });
    } else {
      dispatch(sendNotificationError('File not found'));
    }
  };

  const onPhotoDelete = (photo: string) => {
    setPhotos((prevState) => prevState.filter((item) => item !== photo));
  };

  const validate = (values: IFormikInitialValues) => {
    const errors: FormikErrors<IFormikInitialValues> = {};
    if (!values.title) {
      errors.title = 'Required';
    }
    if (!values.location) {
      errors.location = 'Required';
    }
    if (!values.description) {
      errors.description = 'Required';
    }
    if (!values.price) {
      errors.price = 'Required';
    }
    return errors;
  };

  const formik: FormikProps<IFormikInitialValues> =
    useFormik<IFormikInitialValues>({
      initialValues: {
        title: '',
        location: '',
        description: '',
        price: 0,
      },
      validate: validate,
      onSubmit: onSubmit,
    });
  return (
    <ProductUploadComponent
      formik={formik}
      photos={photos}
      onPhotoDelete={onPhotoDelete}
      onPhotosChange={onPhotosChange}
    />
  );
};
