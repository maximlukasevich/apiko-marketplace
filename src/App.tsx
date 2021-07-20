import './App.css';
import 'typeface-roboto';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from './hooks/useTypedSelector';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { HomePage } from './pages/HomePage';
import { Switch, Route, Redirect } from 'react-router-dom';
import { routes } from './utils/routes';
import { auth } from './store/user/actions';

const App: React.FC = () => {

  const { isAuth } = useTypedSelector(state => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isAuth) {
      dispatch(auth());
    }
  }, [isAuth, dispatch]);

  return (
    <>
    <Switch>

      <Route exact path={routes.HOME} component={HomePage} />

      { isAuth ? <> 
        
        <Redirect from={routes.LOGIN} to={routes.HOME} />
        <Redirect from={routes.REGISTER} to={routes.HOME} />
      </> : <>
        <Route path={routes.LOGIN} component={LoginPage} />
        <Route path={routes.REGISTER} component={RegisterPage} />
      </> }
    </Switch>  
    </>
  );
} 

export default App;
