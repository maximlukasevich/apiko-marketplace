import './App.css';
import 'typeface-roboto';
import 'typeface-rubik';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useTypedSelector } from './hooks/useTypedSelector';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { EditPropfilePage } from './pages/EditPropfilePage';
import { HomePage } from './pages/HomePage';
import { SavedProductsPage } from './pages/SavedProductsPage';
import { useToast } from '@chakra-ui/react';
import { routes } from './utils/routes';
import { auth } from './store/viewer/actions';
import { ProductPage } from './pages/ProductPage';
import { ProductUploadPage } from './pages/ProductUploadPage';
import { UserPage } from './pages/UserPage';
import { InboxPage } from './pages/InboxPage';

const App: React.FC = () => {
  const isAuth = useTypedSelector((state) => state.viewer.isAuth);
  const notification = useTypedSelector((state) => state.notifications);
  const toast = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, [dispatch]);

  useEffect(() => {
    if (notification?.notification) {
      toast({
        description: notification.notification,
        status: notification.type,
        position: 'top-right',
        duration: 4000,
        isClosable: true,
      });
    }
  }, [notification, toast]);

  return (
    <>
      <Switch>
        <Route exact path={routes.HOME} component={HomePage} />
        <Route path={routes.SAVED} component={SavedProductsPage} />
        <Route path={routes.PRODUCT} component={ProductPage} />
        <Route path={routes.USER_PAGE} component={UserPage} />

        {isAuth ? (
          <>
            <Switch>
              <Route
                exact
                path={routes.PRODUCT_UPLOAD}
                component={ProductUploadPage}
              />
              <Route path={routes.PROFILE_EDIT} component={EditPropfilePage} />
              <Route path={routes.INBOX} component={InboxPage} />

              <Redirect from={routes.LOGIN} to={routes.HOME} />
              <Redirect from={routes.REGISTER} to={routes.HOME} />
            </Switch>
          </>
        ) : (
          <>
            <Switch>
              <Route path={routes.LOGIN} component={LoginPage} />
              <Route path={routes.REGISTER} component={RegisterPage} />

              <Redirect from={routes.PRODUCT_UPLOAD} to={routes.REGISTER} />
              <Redirect from={routes.PROFILE_EDIT} to={routes.REGISTER} />
              <Redirect from='*' to={routes.HOME} />
            </Switch>
          </>
        )}
      </Switch>
    </>
  );
};

export default App;
