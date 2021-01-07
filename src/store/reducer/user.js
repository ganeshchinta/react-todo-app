import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../Utility";

const initialState = {
  user: {},
  autheticated: false,
};
const signInUser = (state, action) => {
  return updateObject(state, {
    user: { EmailId: action.user },
    autheticated: true,
  });
};
const signOutUser = (state, action) => {
  console.log("Signout", state);
  return updateObject(state, { user: null, autheticated: false });
};
const signUpUser = (state, action) => {
  return updateObject(state, { user: action.user, autheticated: false });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNIN_USER:
      return signInUser(state, action);
    case actionTypes.SIGNOUT_USER:
      return signOutUser(state, action);
    case actionTypes.SIGNUP_USER:
      return signUpUser(state, action);

    default:
      return state;
  }
};
export default reducer;
