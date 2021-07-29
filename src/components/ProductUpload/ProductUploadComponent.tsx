import React from 'react';
import styles from './product-upload.module.css';
import { Wrapper } from '../commons/Wrapper/Wrapper';
import { InputField } from '../commons/Input/Input';
import { TextArea } from '../commons/TextArea/TextArea';
import { Button } from '../commons/Button/Button';
import { AddIcon, CloseIcon } from '@chakra-ui/icons';
import { IProductUploadComponentProps } from './types';

export const ProductUploadComponent: React.FC<IProductUploadComponentProps> = ({
  formik,
  photos,
  onPhotosChange,
  onPhotoDelete,
}) => {
  return (
    <div className={styles.container}>
      <Wrapper>
        <p className={styles.title}>Add Product</p>
        <form onSubmit={formik.handleSubmit}>
          <InputField 
            name='title'
            errors={formik.errors.title && formik.touched.title && formik.errors.title}
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label='title'
            placeholder='For example: Iron man suit'
            required />

          <InputField 
            name='location'
            errors={formik.errors.location && formik.touched.location && formik.errors.location}
            value={formik.values.location}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label='location'
            placeholder='For example: Los Angeles, CA'
            required />

          <TextArea 
            name='description'
            errors={formik.errors.description && formik.touched.description && formik.errors.description}
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label='description'
            required
            placeholder='For example: Iron man suit' />

          <div className={styles.photosBlock}>
            <p className={styles.label}>
            Photos: 
            </p>
            <div className={styles.photosUpload}>
              {photos.map((photo) => 
              <div className={styles.uploadedPhotoBlock}>
                <img className={styles.uploadedPhoto} src={photo} alt='Uploaded' />
                <CloseIcon className={styles.deleteIcon} onClick={() => onPhotoDelete(photo)} />
              </div>
            )}
              
              <label className={styles.uploadButton}>
                <div className={styles.uploadBlock}>
                  <AddIcon w='38' h='38' color='#349A89' />
                </div>  
                <input 
                  type='file' 
                  multiple 
                  className={styles.uploadInput} 
                  onChange={onPhotosChange} />
              </label>
            </div>

          </div>

          <InputField 
            name='price'
            errors={formik.errors.price && formik.touched.price && formik.errors.price}
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label='price'
            required />

          <Button type='submit' className={styles.button}>
            SUBMIT
          </Button>

        </form>
      </Wrapper>
    </div>
  );
}