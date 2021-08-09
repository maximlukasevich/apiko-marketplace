import React from 'react';
import styles from './header.module.css';
import logoBlack from '../../assets/icons/apiko-black.svg';
import logoWhite from '../../assets/icons/apiko-white.svg';
import heartOutlineBlack from '../../assets/icons/heart-outline-black.svg';
import heartOutlineWhite from '../../assets/icons/heart-outline-white.svg';
import heart from '../../assets/icons/heart.svg';
import inbox from '../../assets/icons/inbox.svg';
import { Button } from '../commons/Button/Button';
import { routes } from '../../utils/routes';
import { NavLink } from 'react-router-dom';
import { HeaderProfile } from '../HeaderProfile/HeaderProfile';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import HeaderSearch from '../HeaderSearch/HeaderSearch';
import { Filter } from '../Filter/Filter';

interface IHeader {
  light?: boolean;
  search?: boolean;
  filter?: boolean;
}

export const Header: React.FC<IHeader> = ({
  light,
  search,
  filter,
  children,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { viewer, isAuth } = useTypedSelector((state) => state.viewer);
  const location = useLocation();
  let heartIcon = heartOutlineWhite;
  let heartMobile = heartOutlineWhite;
  if (light) {
    heartIcon = heartOutlineBlack;
  } else if (location.pathname === routes.SAVED) {
    heartIcon = heart;
    heartMobile = heart;
  }

  return (
    <>
      <header
        className={`
      ${styles.header}
      ${light ? styles.light : ''}
    `}
      >
        <nav className={styles.nav}>
          <NavLink to={routes.HOME}>
            <img src={!light ? logoWhite : logoBlack} alt='Apiko Logo' />
          </NavLink>

          <div className={styles.mobileMenuIcon} onClick={onOpen}>
            {!light ? (
              <HamburgerIcon color='#FFF' boxSize='35' />
            ) : (
              <HamburgerIcon boxSize='35' />
            )}
          </div>

          <div className={styles.navLinks}>
            {isAuth && location.pathname !== routes.PRODUCT_UPLOAD ? (
              <NavLink to={routes.INBOX}>
                <div className={styles.inbox}>
                  <div className={styles.inboxCircle}> </div>
                  <img className={styles.inboxIcon} src={inbox} alt='Inbox' />
                </div>
              </NavLink>
            ) : (
              ''
            )}
            {location.pathname !== routes.PRODUCT_UPLOAD ? (
              <NavLink to={routes.PRODUCT_UPLOAD}>
                <Button className={styles.button}>Sell</Button>
              </NavLink>
            ) : (
              ''
            )}
            {isAuth ? (
              <div className={styles.headerMenu}>
                <HeaderProfile
                  fullName={viewer.fullName}
                  email={viewer.email}
                  avatar={viewer.avatar || undefined}
                />
              </div>
            ) : (
              <NavLink
                to={routes.LOGIN}
                className={styles.login}
                style={!light ? { color: '#fff' } : { color: '#2B2B2B' }}
              >
                Login
              </NavLink>
            )}

            <NavLink to={routes.SAVED}>
              <img className={styles.heart} src={heartIcon} alt='Heart' />
            </NavLink>
          </div>
        </nav>

        {/* Mobile Menu */}
        <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent background='linear-gradient(180deg, #090810 0%, #171236 100%)'>
            <DrawerHeader padding='0'>
              <div className={styles.mobileHeader}>
                <div className={styles.mobileIcons}>
                  {isAuth ? (
                    <>
                      <NavLink to={routes.INBOX}>
                        <div className={styles.inbox}>
                          <div className={styles.inboxCircle}> </div>
                          <img
                            className={styles.inboxIcon}
                            src={inbox}
                            alt='Inbox'
                          />
                        </div>
                      </NavLink>
                    </>
                  ) : (
                    ''
                  )}
                  <NavLink to={routes.SAVED} className={styles.mobileSavedLink}>
                    <img
                      className={styles.heart}
                      src={heartMobile}
                      alt='Heart'
                    />
                  </NavLink>
                  {!isAuth && (
                    <NavLink
                      to={routes.LOGIN}
                      className={styles.login}
                      style={{ color: '#fff' }}
                    >
                      Login
                    </NavLink>
                  )}
                </div>
                <DrawerCloseButton
                  className={styles.closeButton}
                  color='#FFF'
                />
              </div>
            </DrawerHeader>
            <DrawerBody pl='15' pr='15'>
              <div className={styles.mobileMenu}>
                <div className={styles.mobileButton}>
                  <NavLink
                    to={routes.PRODUCT_UPLOAD}
                    className={styles.mobileNavLink}
                  >
                    <Button className={styles.button}>Sell</Button>
                  </NavLink>
                  {isAuth && (
                    <div className={styles.headerMenu}>
                      <HeaderProfile
                        fullName={viewer.fullName}
                        email={viewer.email}
                        avatar={viewer.avatar || undefined}
                      />
                    </div>
                  )}
                </div>
                <div className={styles.mobileChildren}>
                  {filter ? <Filter /> : ''}
                  {search ? <HeaderSearch /> : ''}
                  {children}
                </div>
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <div className={styles.children}>
          {search ? <HeaderSearch /> : ''}
          {children}
        </div>
      </header>

      {filter ? (
        <div className={styles.filter}>
          <Filter />
        </div>
      ) : (
        ''
      )}
    </>
  );
};

Header.defaultProps = {
  light: false,
  search: false,
  filter: false,
};
