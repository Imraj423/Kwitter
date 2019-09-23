import { domain, handleJsonResponse, jsonHeaders } from "./constants";
import { GetLoggedInUserMessages } from ".";
import { getUserMessages } from "./messages";

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
  //getLoggedInUserProfileInfo... /////if your going to copy it verbatim dont change the names and make it confusing..js..
  return dispatch(getLoggedInUser()).then(() =>
    dispatch(GetLoggedInUserMessages())
  );
};

export const getUserProfileInfo = username => dispatch => {
  return dispatch(getUser(username)).then(() =>
    dispatch(getUserMessages(username))
  );
};

export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAIL = "UPDATE_USER_FAIL";

export const updateUser = updateUserData => (dispatch, getState) => {
  dispatch({
    type: UPDATE_USER
  });

  const { username } = getState().auth.login;

  const newUpdateUserData = {};
  if (updateUserData.password !== "") {
    newUpdateUserData.password = updateUserData.password;
  }
  if (updateUserData.displayName !== "") {
    newUpdateUserData.displayName = updateUserData.displayName;
  }

  if (updateUserData.about !== "") {
    newUpdateUserData.about = updateUserData.about;
  }

  return fetch(url + "/" + username, {
    method: "PATCH",
    headers: {
      ...jsonHeaders,
      Authorization: `Bearer ${getState().auth.login.token}`,
      body: JSON.stringify(newUpdateUserData)
    }
      .then(handleJsonResponse)
      .then(result => {
        return dispatch({
          type: UPDATE_USER_SUCCESS,
          payload: result
        });
      })
      .catch(err => {
        return Promise.reject(
          dispatch({
            type: UPDATE_USER_FAIL,
            payload: err
          })
        );
      })
  });
};

export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_ALL_USERS_SUCCESS = "GET_ALL_USERS_SUCCESS";
export const GET_ALL_USERS_FAILURE = "GET_ALL_USERS_FAILURE";

export const getAllUsers = () => dispatch => {
  dispatch({
    type: GET_ALL_USERS
  });

  return fetch(url, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({ type: GET_ALL_USERS_SUCCESS, payload: result });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: GET_ALL_USERS_FAILURE, payload: err })
      );
    });
};

export const UPLOAD_PICTURE = "UPLOAD_PICTURE";
export const UPLOAD_PICTURE_SUCCESS = "UPLOAD_PICTURE_SUCCESS";
export const UPLOAD_PICTURE_FAIL = "UPLOAD_PICTURE_FAIL";

export const uploadPicture = formData => (dispatch, getState) => {
  dispatch({
    type: UPLOAD_PICTURE
  });

  const username = getState().auth.login.username;

  return fetch(url + "/" + username + "/picture", {
    method: "PUT",
    headers: {
      ...jsonHeaders,
      Authorization: `Bearer ${getState().auth.login.token}`,
      body: formData
    }
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
      })
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

  const { username } = getState().auth.login;

  return fetch(url + "/" + username, {
    method: "DELETE",
    headers: {
      ...jsonHeaders,
      Authorization: `Bearer ${getState().auth.login.token}`
    }
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
      })
  });
};
