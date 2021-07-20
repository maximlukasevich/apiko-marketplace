import React from 'react';
import './App.css';
import { useTypedSelector } from './hooks/useTypedSelector';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Switch, Route, Redirect } from 'react-router-dom';
import { routes } from './utils/routes';

const App: React.FC = () => {

  const { isAuth } = useTypedSelector(state => state.user);

  return (
    <>
    <Switch>

      <Route exact path={routes.HOME} render={() => <h1>Home</h1>  } />

      { isAuth ? <> 
        {/* nothing at this time  */}
      </> : <>
        <Route path={routes.LOGIN} component={Login} />
        <Route path={routes.REGISTER} component={Register} />
      </> }
    </Switch>  
    </>
  );
} 

export default App;
