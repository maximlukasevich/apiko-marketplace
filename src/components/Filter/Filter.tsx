// @ts-nocheck
import React, { useEffect } from 'react';
import { FilterComponent } from './FilterComponent';
import { useDispatch } from 'react-redux';
import { FormikValues, FormikProps, useFormik } from 'formik';
import { IFormikValues } from './types';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { setSearchParams } from '../../store/search/actions';

export const Filter = () => {
  const { keywords, location, priceFrom, priceTo } = useTypedSelector(
    (state) => state.search.searchParams
  );

  const dispatch = useDispatch();

  const onSubmit = (values: FormikValues) => {};

  const formik: FormikProps<IFormikValues> = useFormik<IFormikValues>({
    initialValues: {
      priceFrom: priceFrom,
      priceTo: priceTo,
    },
    onSubmit: onSubmit,
  });
  useEffect(() => {
    const priceFrom =
      formik.values.priceFrom !== '' ? formik.values.priceFrom : null;
    const priceTo = formik.values.priceTo !== '' ? formik.values.priceTo : null;
    dispatch(setSearchParams(keywords, location, priceFrom, priceTo));
  }, [formik.values, dispatch, keywords, location]);

  return <FilterComponent formik={formik} />;
};
