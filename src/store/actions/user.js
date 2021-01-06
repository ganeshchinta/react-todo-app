import { v4 } from "uuid";
import * as actionTypes from "./actionTypes";
import axios from "../../axios-api";

export const signInUser = (user) => {
  return {
    type: actionTypes.SIGNIN_USER,
    user: user,
  };
};

export const signOutUser = () => {
  return {
    type: actionTypes.SIGNOUT_USER,
  };
};

export const signUpUser = (user) => {
  return (dispatch) => {
    axios
      .post("/api/v1/user", user)
      .then((response) => {
        dispatch(signUpUserSuccess(response.data));
      })
      .catch((error) => {
        const userData = { userId: v4(), ...user };
        dispatch(signUpUserSuccess(userData));
      });
  };
};
export const signUpUserSuccess = (userData) => {
  return {
    type: actionTypes.SIGNUP_USER,
    user: userData,
  };
};
