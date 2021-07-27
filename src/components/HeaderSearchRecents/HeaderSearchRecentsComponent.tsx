import React from 'react';
import styles from './header-search-recents.module.css';
import searchIcon from '../../assets/icons/recent-search.svg';
import { IRecentsComponentProps } from './types';

export const HeaderSearchRecentsComponent: React.FC<IRecentsComponentProps> = ({ 
  recents,
  onClearAllClick 
}) => {
  return ( <>
    <div className={styles.header}>
      <p className={styles.title}>Recent searches</p>
      <p className={styles.action} onClick={onClearAllClick}>Clear All</p>
    </div>
    {recents.map((item, key) => 
      <div className={styles.recent} key={key}>
        <img src={searchIcon} alt="Search icon" />
        <p className={styles.recentResult}>
          {item}
        </p>
      </div>
    )}
  </> );
}