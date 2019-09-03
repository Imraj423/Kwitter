import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { push } from "connected-react-router";

// action types
export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const LOGOUT = "LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAIL = "LOGOUT_FAIL";
export const LOGIN_GOOGLE = "LOGIN_GOOGLE";
export const LOGIN_GOOGLE_SUCCESS = "LOGIN_GOOGLE_SUCCESS";
export const LOGIN_GOOGLE_FAIL = "LOGIN_GOOGLE_FAIL";

const url = domain + "/auth";

// action creators
const login = loginData => dispatch => {
  dispatch({
    type: LOGIN
  });

  return fetch(url + "/login", {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(loginData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: LOGIN_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: LOGIN_FAIL, payload: err.message})
      );
    });
};

export const loginThenGoToUserProfile = loginData => dispatch => {
  return dispatch(login(loginData)).then(() => dispatch(push("/profile")));
};

 // const token = getState().auth.login.token;

  // return fetch(url + "/logout", {
  //   method: "GET",
  //   headers: { ...jsonHeaders, Authorization: `Bearer ${token}` }
  // })
export const logout = () => (dispatch, getState) => {
  dispatch({
    type: LOGOUT
  });
 const token = getState().auth.login.token

  return fetch(url + "/logout", {
    method: "GET",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders},})
 
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: LOGOUT_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: LOGOUT_FAIL, payload: err.message })
      );
    });
};
//User flow. Using an entire chain flow
export const logoutThenGoToHomePage = () => dispatch => {
    return dispatch(logout()).then(() => dispatch(push("http://localhost:3000/signin")));
}



//========================
// action types
export const SIGNUP = "SIGNUP";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

const urlnew = domain + "/users";

// action creators
export const signup = signupData => dispatch => {
  dispatch({
    type: SIGNUP
  });

  return fetch(urlnew, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(signupData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: SIGNUP_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: SIGNUP_FAIL, payload: err.message })
      );
    });
};

export const signupThenGoToSignPage = signupData => dispatch => {
  return dispatch(signup(signupData)).then(() => dispatch(push("/")));
};

export const logoutThenGoToHomepage = () => dispatch => {
  return dispatch(logout()).then(() => dispatch(push("/")));
};