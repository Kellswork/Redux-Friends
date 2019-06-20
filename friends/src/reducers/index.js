import { combineReducers } from 'redux';
import { loginReducer, friendsReducer } from './friendsReducer';

export default combineReducers({
    loginReducer, friendsReducer
})