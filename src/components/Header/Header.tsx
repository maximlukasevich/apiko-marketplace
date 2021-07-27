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

interface IHeader {
  light?: boolean,
}

export const Header: React.FC<IHeader> = ({ light, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, isAuth } = useTypedSelector(state => state.user);
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
    <header className={`
      ${styles.header}
      ${light ? styles.light : ''}
    `} >
      <nav className={styles.nav}>
        <NavLink to={routes.HOME}>
          <img src={!light ? logoWhite : logoBlack} alt='Apiko Logo' />
        </NavLink>

        <div className={styles.mobileMenuIcon} onClick={onOpen}> 
          {!light ? <HamburgerIcon color='#FFF' boxSize='35' /> : <HamburgerIcon boxSize='35' />}
        </div>

        <div className={styles.navLinks}>
          {isAuth ?
          <div className={styles.inbox}>
            <div className={styles.inboxCircle}> </div>
            <img className={styles.inboxIcon} src={inbox} alt="Inbox" /> 
          </div>
          : ''}
          <Button className={styles.button}>
            Sell
          </Button>
          
          {isAuth ?
          <div className={styles.headerMenu}> 
            <HeaderProfile fullName={user?.fullName} email={user?.email} avatar={user?.avatar} />
          </div> :
          <NavLink to={routes.LOGIN} className={styles.login} style={!light ? {color: '#fff'} : {color: '#2B2B2B'}}>
            Login
          </NavLink>
          }

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
                {isAuth ? <> 
                <div className={styles.inbox}>
                  <div className={styles.inboxCircle}> </div>
                  <img className={styles.inboxIcon} src={inbox} alt="Inbox" /> 
                </div>
                </> : '' }
                <NavLink to={routes.SAVED} className={styles.mobileSavedLink}>
                  <img className={styles.heart} src={heartMobile} alt='Heart' /> 
                </NavLink>
                {!isAuth && 
                  <NavLink to={routes.LOGIN} className={styles.login} style={{color: '#fff'}}>
                    Login
                  </NavLink>
                }
              </div>
              <DrawerCloseButton className={styles.closeButton} color='#FFF' />
            </div>
          </DrawerHeader>
          <DrawerBody pl='15' pr='15'>
            <div className={styles.mobileMenu}>
              <div className={styles.mobileButton}> 
                <Button className={styles.button}>
                  Sell
                </Button>
                {isAuth && 
                <div className={styles.headerMenu}> 
                  <HeaderProfile fullName={user?.fullName} email={user?.email} avatar={user?.avatar} />
                </div> } 
              </div>
              {children}
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <div className={styles.children}>
        {children}
      </div>
    </header>
  );
}

Header.defaultProps = {
  light: false,
}