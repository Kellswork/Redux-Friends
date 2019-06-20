import axios from 'axios';

export const LOGGIN_IN = 'LOGGIN_IN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';


export const login = userDetails => dispatch => {
    dispatch({ type: LOGGIN_IN, payload: true });
    axios.post('http://localhost:5000/api/login', userDetails)
        .then(res => {
            console.log('login successful')
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.token })
        })
        .catch(error => {
            
            dispatch({ type: LOGIN_FAILURE, payload: error.response.data.error })
        })
        .finally(() => {
            dispatch({ type: LOGGIN_IN, payload: false });
        })
}