import { FormikProps } from 'formik';

export interface IFormikInitialValues {
  title: string;
  location: string;
  description: string;
  price: number;
}

export interface IProductUploadComponentProps {
  formik: FormikProps<IFormikInitialValues>;
  photos: Array<string>;
  onPhotoDelete: (photo: string) => void;
  onPhotosChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}
