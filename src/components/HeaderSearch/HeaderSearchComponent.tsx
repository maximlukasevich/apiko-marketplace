import React, { useRef } from 'react';
import styles from './header-search.module.css';
import { Wrapper } from '../commons/Wrapper/Wrapper';
import { InputField } from '../commons/Input/Input';
import { Button } from '../commons/Button/Button';
import searchIcon from '../../assets/icons/search_icon.svg';
import locationFilledIcon from '../../assets/icons/location_filled.svg';
import { Collapse, useDisclosure, useOutsideClick } from '@chakra-ui/react';
import HeaderSearchRecents from '../HeaderSearchRecents/HeaderSearchRecents';
import { HeaderSearchSuggestions } from '../HeaderSearchSuggestions/HeaderSearchSuggestions';
import { IHeaderSearchComponentProps } from './types';
import { Spinner } from '@chakra-ui/spinner';

export const HeaderSearchComponent: React.FC<IHeaderSearchComponentProps> = ({
  formik,
  isLoading,
  suggestions,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const ref = useRef(null);
  useOutsideClick({
    ref: ref,
    handler: () => onClose(),
  });

  let collapseContent: any = <p className={styles.noSuggestions}>No recents</p>;
  if (formik.values.name) {
    if (isLoading) {
      collapseContent = (
        <Spinner size='md' color='#349a89' className={styles.spinner} />
      );
    } else {
      if (!suggestions.length) {
        collapseContent = (
          <p className={styles.noSuggestions}>No suggestions</p>
        );
      } else {
        collapseContent = suggestions.map((item, key) => (
          <HeaderSearchSuggestions
            id={item.id}
            title={item.title}
            price={item.price}
            photos={item.photos}
            key={key}
          />
        ));
      }
    }
  } else {
    collapseContent = <HeaderSearchRecents />;
  }

  return (
    <Wrapper className={styles.wrapper}>
      <form onSubmit={formik.handleSubmit} className={styles.search}>
        <div className={styles.menu} ref={ref} id='menu'>
          <InputField
            icon={searchIcon}
            value={formik.values.name || ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name='name'
            wrapperClassName={[
              styles.nameInput,
              isOpen ? styles.openRecent : '',
            ].join(' ')}
            className={styles.input}
            onFocus={onOpen}
            placeholder='Search products by name'
          />
          <Collapse in={isOpen} animateOpacity className={styles.collapse}>
            {collapseContent}
          </Collapse>
        </div>
        <InputField
          icon={locationFilledIcon}
          value={formik.values.location || ''}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name='location'
          wrapperClassName={styles.locationInput}
          className={styles.input}
          placeholder='Location'
        />
        <Button type='submit' className={styles.button}>
          Search
        </Button>
      </form>
    </Wrapper>
  );
};
