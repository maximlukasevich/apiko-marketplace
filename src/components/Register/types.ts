import { FormikProps } from 'formik';

export interface IFormikValues {
  email: string;
  fullName: string;
  password: string;
  passwordAgain: string;
}

export interface IRegisterComponent {
  formik: FormikProps<IFormikValues>;
}
