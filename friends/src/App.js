import React from 'react';
import { Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.min.css";
import FriendsList from './components/FriendsList/FriendsList'
import './App.css';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute'
import { Switch } from 'react-router-dom'
import FriendForm from './components/FriendForm/FriendForm';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      {localStorage.getItem('token') && <NavBar/>}
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path='/friends' component={FriendsList} />
        <PrivateRoute path='/friend_form' component={FriendForm} />
      </Switch>
      <ToastContainer autoClose={3000}
        position='top-right'
        hideProgressBar={true} />
    </div>
  );
}

export default App;
