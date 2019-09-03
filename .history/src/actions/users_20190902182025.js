import { domain, handleJsonResponse } from "./constants";
import { GetLoggedInUserMessages } from ".";

export const GET_USER = "GET_USER";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAIL = "GET_USER_FAIL";

const url = domain + "/users";

export const getUser = username => dispatch => {
  dispatch({
    type: GET_USER
  });

  return fetch(url + "/" + username)
    .then(handleJsonResponse)
    .then(result => {
      dispatch({
        type: GET_USER_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({
          type: GET_USER_FAIL,
          payload: err
        })
      );
    });
};
export const getLoggedInUser = () => (dispatch, getState) => {
  const username = getState().auth.login.username;
  return dispatch(getUser(username));
};

export const getUserProfile = () => dispatch => {
  return dispatch(getLoggedInUser()).then(() =>
    dispatch(GetLoggedInUserMessages())
  );
};

export const UPLOAD_PICTURE = "UPLOAD_PICTURE";
export const UPLOAD_PICTURE_SUCCESS = "UPLOAD_PICTURE_SUCCESS";
export const UPLOAD_PICTURE_FAIL = "UPLOAD_PICTURE_FAIL";

export const uploadPicture = formData => (dispatch, getState) => {
  dispatch({
    type: UPLOAD_PICTURE
  });

  const username = getState().auth.login.username;
  const token = getState().auth.login.token;

  return fetch(url + "/" + username + "/picture", {
    method: "PUT",
    headers: { Authorization: `Bearer ${token}` },
    body: formData
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: UPLOAD_PICTURE_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({
          type: UPLOAD_PICTURE_FAIL,
          payload: err
        })
      );
    });
};

export const uploadPictureThenGetLoggedInUser = formData => dispatch => {
  dispatch(uploadPicture(formData)).then(() => dispatch(getLoggedInUser()));
};


export const DELETE_USER = "DELETE_USER";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAIL = "DELETE_USER_FAIL";

export const deleteUser = () => (dispatch, getState) => {
  dispatch({
    type: DELETE_USER
  });

  const { username, token } = getState().auth.login;

  return fetch(url + "/" + username, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token }
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: DELETE_USER_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({
          type: DELETE_USER_FAIL,
          payload: err
        })
      );
    });
};
