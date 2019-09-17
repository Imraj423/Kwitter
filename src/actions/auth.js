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
    return dispatch(logout()).then(() => dispatch(push("/")));
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

//=================

export const GET_USER = "GET_USER";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAIL = "GET_USER_FAIL";

export const getUser = username => dispatch => {
  dispatch({
    type: GET_USER
  });

  return fetch( domain + "/users/" + username, {
    method: "GET",
    headers: jsonHeaders,
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GET_USER_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: GET_USER_FAIL, payload: err.message })
      );
    });
};

export const getLoggedInUser = () => (dispatch, getState) => {
  const username = getState().auth.login.username;
  return dispatch(getUser(username))
};

//=================

export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAIL = "UPDATE_USER_FAIL";

export const updateUser = updateUserData => (dispatch, getState) => {
  dispatch({
    type: UPDATE_USER
  });

  const { username, token } = getState().auth.login;

  const newUpdateUserData = {}
  if( updateUserData.password !== ""){
    newUpdateUserData.password = updateUserData.password
  }

  if ( updateUserData.displayName !== "") {
    newUpdateUserData.displayName = updateUserData.displayName
  }

  newUpdateUserData.about = updateUserData.about
  
  return fetch( domain + "/users/" + username, {
    method: "PATCH",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders},
    body: JSON.stringify(newUpdateUserData)
  }) 
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: UPDATE_USER_FAIL, payload: err.message })
      );
    });
};

//=================

export const UPLOAD_USER_PICTURE = "UPLOAD_USER_PICTURE";
export const UPLOAD_USER_PICTURE_SUCCESS = "UPLOAD_USER_PICTURE_SUCCESS";
export const UPLOAD_USER_PICTURE_FAIL = "UPLOAD_USER_PICTURE_FAIL";


export const uploadPicture = formData => (dispatch, getState) => {
  dispatch({
    type: UPLOAD_USER_PICTURE
  });

  const { username, token } = getState().auth.login;

  return fetch( domain + "/users/" + username + "/picture", {
    method: "PUT",
    headers: { Authorization: "Bearer " + token },
    body: formData
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: UPLOAD_USER_PICTURE_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: UPLOAD_USER_PICTURE_FAIL, payload: err.message })
      );
    });
};
