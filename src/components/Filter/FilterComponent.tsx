import React from 'react';
import styles from './filter.module.css';
import { Wrapper } from '../commons/Wrapper/Wrapper';
import { Select } from '@chakra-ui/select';
import selectArrow from '../../assets/icons/selectArrow.svg';
import selectGrid from '../../assets/icons/selectGrid.svg';
import { InputField } from '../commons/Input/Input';
import { IFilterComponentProps } from './types';

export const FilterComponent: React.FC<IFilterComponentProps> = ({ formik }) => {
  return (
    <div className={styles.container}>
      <Wrapper className={styles.wrapper}>
        <div className={styles.filters}>
          <div className={styles.selectContainer}>
            <Select 
              className={styles.select}
              focusBorderColor='none'
              icon={<img src={selectArrow} alt='arrow'/>} 
              placeholder='Choose Category' />
            <img className={styles.selectIcon} src={selectGrid} alt='grid' />
          </div>

          <form onSubmit={formik.handleSubmit} className={styles.inputs}>
            <InputField 
              type='number'
              name='priceFrom'
              value={formik.values.priceFrom || ''}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              wrapperClassName={styles.inputWrapper} 
              className={styles.input}
              placeholder='Price from (USD)' />
            <span className={styles.line}></span>
            <InputField 
              type='number'
              name='priceTo'
              value={formik.values.priceTo || ''}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              wrapperClassName={styles.inputWrapper} 
              className={styles.input}
              placeholder='Price to (USD)' />     
          </form>
        </div>
      </Wrapper>
    </div>
  );
}