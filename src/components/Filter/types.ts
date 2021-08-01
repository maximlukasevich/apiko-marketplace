import { FormikProps } from 'formik';

export interface IFormikValues {
  priceFrom: number | null;
  priceTo: number | null;
}

export interface IFilterComponentProps {
  formik: FormikProps<IFormikValues>;
}