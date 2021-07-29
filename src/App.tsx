import './App.css';
import 'typeface-roboto';
import 'typeface-rubik';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from './hooks/useTypedSelector';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { EditPropfilePage } from './pages/EditPropfilePage';
import { HomePage } from './pages/HomePage';
import { SavedProductsPage } from './pages/SavedProductsPage'
import { Switch, Route, Redirect } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { routes } from './utils/routes';
import { auth } from './store/user/actions';
import { ProductPage } from './pages/ProductPage';
import { ProductUploadPage } from './pages/ProductUploadPage';

const App: React.FC = () => {
  const { isAuth } = useTypedSelector(state => state.user);
  const notification = useTypedSelector(state => state.notifications);
  const toast = useToast();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isAuth) {
      dispatch(auth());
    }
  }, [isAuth, dispatch]);
  useEffect(() => {
    if (notification?.notification) {
      toast({
        description: notification.notification,
        status: notification.type,
        position: 'top-right',
        duration: 4000,
        isClosable: true
      });
    }
  }, [notification, toast]);

  return (
    <>
    <Switch>

      <Route exact path={routes.HOME} component={HomePage} />
      <Route path={routes.SAVED} component={SavedProductsPage} />
      <Route path={routes.PRODUCT} component={ProductPage} />

      { isAuth ? <> 
        <Switch>
          <Route exact path={routes.PRODUCT_UPLOAD} component={ProductUploadPage} />
          <Route path={routes.PROFILE_EDIT} component={EditPropfilePage} />

          <Redirect from={routes.LOGIN} to={routes.HOME} />
          <Redirect from={routes.REGISTER} to={routes.HOME} />
        </Switch>
      </> : <>
        <Switch>
          <Route path={routes.LOGIN} component={LoginPage} />
          <Route path={routes.REGISTER} component={RegisterPage} />
        
          <Redirect from={routes.PRODUCT_UPLOAD} to={routes.REGISTER} />
          <Redirect from={routes.PROFILE_EDIT} to={routes.REGISTER} />
        </Switch>
      </> }
    </Switch>  
    </>
  );
} 

export default App;
