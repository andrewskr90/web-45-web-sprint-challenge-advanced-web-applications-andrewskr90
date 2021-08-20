import React from "react";
import { Route, Switch } from "react-router-dom";
import axiosWithAuth from "./helpers/axiosWithAuth";

import Login from "./components/Login";
import Logout from "./components/Logout"
import BubblePage from './components/BubblePage'
import PrivateRoute from "./components/PrivateRoute";
import "./styles.scss";

function App(props) {

  const handleLogout = (e) => {
    axiosWithAuth()
      .post('/logout')
      .then(res => {
        localStorage.removeItem('token')
      })
      .catch(err => console.log(err))
  }

  return (
    
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a onClick={handleLogout} data-testid="logoutButton" href="/login">logout</a>
        </header>
        <Switch>
        <PrivateRoute path='/bubble-page' component={BubblePage}/>
        <PrivateRoute path='/logout' component={Logout}/>
        <Route path='login'>
          <Login/>
        </Route>
        <Route path='/'>
          <Login/>
        </Route>
        </Switch>
      </div>
    
  );
}

export default App;

//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'.
//2. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.