import {
  LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  IS_FETCHING_FRIENDS,
  FETCHING_FRIENDS_SUCCESS,
  FETCHING_FRIENDS_FAILURE,
  ADDING_FRIEND,
  ADDING_FRIEND_SUCCESS,
  ADDING_FRIEND_FAILURE,
  DELETING_FRIEND,
  DELETING_FRIEND_SUCCESS,
  DELETING_FRIEND_FAILURE
} from "../actions/actionTypes";

const initialState = {
  fetchingFriends: false,
  savingFriend: false,
  deletingFriend: false,
  friends: [],
  loggingIn: false,
  error: ''
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: true
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_FETCHING_FRIENDS:
      return {
        ...state,
        fetchingFriends: action.payload
      };

    case FETCHING_FRIENDS_SUCCESS:
      return {
        ...state,
        
        friends: action.payload
      };

    case FETCHING_FRIENDS_FAILURE:
      return {
        ...state,
        
        error: action.payload
      };
    case ADDING_FRIEND:
      return {
        ...state,
        savingFriend: action.payload
      };

    case ADDING_FRIEND_SUCCESS:
      return {
        ...state,
        friends: action.payload
      };
    case ADDING_FRIEND_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    case DELETING_FRIEND:
      return {
        ...state,
        deletingFriend: action.payload
      };

    case DELETING_FRIEND_SUCCESS:
      return {
        ...state,
        friends: action.payload
      };
    case DELETING_FRIEND_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
