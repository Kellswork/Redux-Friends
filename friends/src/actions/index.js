import axios from "axios";
import axiosAuth from "../components/axiosAuth";
import {
  LOGGIN_IN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  IS_FETCHING_FRIENDS,
  FETCHING_FRIENDS_SUCCESS,
  FETCHING_FRIENDS_FAILURE,
  ADDING_FRIEND,
  ADDING_FRIEND_SUCCESS,
  ADDING_FRIEND_FAILURE
} from "./actionTypes";

export const login = userDetails => dispatch => {
  dispatch({ type: LOGGIN_IN });
  axios
    .post("http://localhost:5000/api/login", userDetails)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      dispatch({ type: LOGIN_SUCCESS });
    })
    .catch(error => {
      dispatch({ type: LOGIN_FAILURE, payload: error.response.data.error });
    })
    .finally(() => {
      dispatch({ type: LOGGIN_IN, payload: false });
    });
};

export const fetchFriends = () => dispatch => {
  dispatch({
    type: IS_FETCHING_FRIENDS,
    payload: true
  });
  axiosAuth()
    .get("http://localhost:5000/api/friends")
    .then(res => {
      console.log(res.data);
      dispatch({ type: FETCHING_FRIENDS_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({
        type: FETCHING_FRIENDS_FAILURE,
        payload: "Could not fetch friends, please try again later"
      });
    })
    .finally(() => {
      dispatch({ type: IS_FETCHING_FRIENDS, payload: false });
    });
};

export const addFriend = userDetails => dispatch => {
  dispatch({
    type: ADDING_FRIEND,
    payload: true
  });

  axiosAuth()
    .post("http://localhost:5000/api/friends", userDetails)
    .then(res => {
      console.log(res)
      dispatch({ type: ADDING_FRIEND_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({
        type: ADDING_FRIEND_FAILURE,
        payload: "could not add friend, please try again later"
      });
    })
    .finally(() => {
      dispatch({ type: ADDING_FRIEND, payload: false });

    })
};
