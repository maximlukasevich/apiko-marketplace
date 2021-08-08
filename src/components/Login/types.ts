import { FormikProps } from 'formik';

export interface IFormikValues {
  email: string;
  password: string;
}

export interface ILoginComponent {
  formik: FormikProps<IFormikValues>;
}
