import { FormikProps } from 'formik';

export interface IFormikValues {
  fullName: string;
  phone: string | null;
  location: string | null;
}

export interface IEditProfileComponent {
  avatar?: string | null;
  avatarLoading?: boolean;
  formik: FormikProps<IFormikValues>;
  onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}
