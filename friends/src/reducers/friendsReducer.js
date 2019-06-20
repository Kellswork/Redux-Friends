import { LOGGIN_IN, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions";


const initialState = {
    friends: [],
    loggingIn: false,
    error: null
}

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGGIN_IN:
            return {
                ...state, loggingIn: action.payload
            }
        case LOGIN_SUCCESS:
            return {
                ...state, friends: action.payload
            }
            case LOGIN_FAILURE: 
            return{
                ...state, error: action.payload
            }
        default:
            return state;
    }

}