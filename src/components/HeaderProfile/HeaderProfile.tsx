import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/viewer/actions';
import styles from './header-profile.module.css';
import { Avatar } from '../commons/Avatar/Avatar';
import { NavLink } from 'react-router-dom';
import { routes } from '../../utils/routes';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Menu, MenuButton, MenuList } from '@chakra-ui/react';

interface IHeaderProfile {
  fullName?: string;
  email?: string;
  avatar?: string;
}

export const HeaderProfile: React.FC<IHeaderProfile> = ({
  fullName,
  email,
  avatar,
}) => {
  const viewer = useTypedSelector((state) => state.viewer.viewer);
  const dispatch = useDispatch();
  const onClick = (): void => {
    dispatch(logout());
  };

  return (
    <Menu>
      <MenuButton>
        <Avatar size='md' name={fullName || ''} avatar={avatar} />
      </MenuButton>
      <MenuList className={styles.menu}>
        <div className={styles.menuHeader}>
          <Avatar
            className={styles.menuAvatar}
            size='lg'
            name={fullName || ''}
            avatar={avatar}
          />
          <div className={styles.menuHeaderInfo}>
            <div className={styles.menuUser}>
              <h2 className={styles.menuFullName}>{fullName}</h2>
              <p className={styles.menuEmail}>{email}</p>
            </div>
            <NavLink
              to={routes.USER_PAGE.replace(':id', viewer ? viewer.id : '')}
            >
              <span className={styles.profile}>Profile</span>
            </NavLink>
          </div>
        </div>
        <p className={styles.link}>
          <NavLink to={routes.PROFILE_EDIT}>Edit profile</NavLink>
        </p>
        <hr className={styles.hr} />
        <p className={styles.link} onClick={onClick}>
          Logout
        </p>
      </MenuList>
    </Menu>
  );
};
