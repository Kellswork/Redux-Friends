import axios from 'axios';

export const LOGGIN_IN = 'LOGGIN_IN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const FRIEND_SUCCESS = 'FRIEND_SUCCESS';
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';


export const login = userDetails => dispatch => {
    dispatch({ type: LOGGIN_IN });
    axios.post('http://localhost:5000/api/login', userDetails)
        .then(res => {
            console.log(res.data)
            localStorage.setItem('token', res.data.payload);
            dispatch({ type: LOGIN_SUCCESS })
        })
        .catch(error => {
            dispatch({ type: LOGIN_FAILURE, payload: error.response.data.error })
        })
        .finally(() => {
            dispatch({ type: LOGGIN_IN, payload: false });
        })
}




