import React from 'react';
import { Route } from 'react-router-dom';
import FriendsList from './components/FriendsList/FriendsList'
import './App.css';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute'
import { Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path='/friends' component={FriendsList} />
      </Switch>
    </div>
  );
}

export default App;
