import { handleJsonResponse, jsonHeaders, domain } from "./constants";

const url = domain + "/messages";

export const GET_MESSAGES = "GET_MESSAGES";
export const GET_MESSAGES_SUCCESS = "GET_MESSAGES_SUCCESS";
export const GET_MESSAGES_FAIL = "GET_MESSAGES_FAIL";
export const GET_USER_MESSAGES = "GET_USER_MESSAGES";
export const GET_USER_MESSAGES_SUCCESS = "GET_USER_MESSAGES_SUCCESS";
export const GET_USER_MESSAGES_FAIL = "GET_USER_MESSAGES_FAIL";
export const UPDATE_MESSAGE_BY_ID = "UPDATE_MESSAGE_BY_ID";
export const UPDATE_MESSAGE_BY_ID_SUCCESS = "UPDATE_MESSAGE_BY_ID_SUCCESS";
export const UPDATE_MESSAGE_BY_ID_FAIL = "UPDATE_MESSAGE_BY_ID_FAIL";
export const CREATE_MESSAGE = "CREATE_MESSAGE";
export const CREATE_MESSAGE_SUCCESS = "CREATE_MESSAGE_SUCCESS";
export const CREATE_MESSAGE_FAIL = "CREATE_MESSAGE_FAIL";
export const DELETE_MESSAGE = "DELETE_MESSAGE";
export const DELETE_MESSAGE_SUCCESS = "DELETE_MESSAGE_SUCCESS";
export const DELETE_MESSAGE_FAIL = "DELETE_MESSAGE_FAIL";


export const getMessages = username => dispatch => {
  dispatch({ type: GET_MESSAGES });

  return fetch(
    url +
      `?limit=${100}&offset=${0}` +
      (username ? `&username=${username}` : "")
  )
    .then(handleJsonResponse)
    .then(result => {
      dispatch({
        type: username ? GET_MESSAGES_SUCCESS : GET_MESSAGES_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({
          type: username ? GET_MESSAGES_FAIL : GET_MESSAGES_FAIL,
          payload: err
        })
      );
    });
};



export const getUserMessages = username => dispatch => {
  dispatch({
    type: GET_USER_MESSAGES
  });

  return fetch(url + "/" + username)
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GET_USER_MESSAGES_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({
          type: GET_USER_MESSAGES_FAIL,
          payload: err
        })
      );
    });
};

export const GetLoggedInUserMessages = () => (dispatch, getState) => {
  const username = getState().auth.login.username;
  dispatch(getMessages(username));
};


export const updateMessageById = messageId => dispatch => {
  dispatch({ type: UPDATE_MESSAGE_BY_ID });

  return fetch(url + `/${messageId}`)
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: UPDATE_MESSAGE_BY_ID_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: UPDATE_MESSAGE_BY_ID_FAIL, payload: err })
      );
    });
};


export const createMessage = messageData => (dispatch, getState) => {
  dispatch({
    type: CREATE_MESSAGE
  });
  const { token } = getState().auth.login;

  return fetch(url, {
    method: "POST",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify(messageData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: CREATE_MESSAGE_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({
          type: CREATE_MESSAGE_FAIL,
          payload: err
        })
      );
    })
  }


export const deleteMessage = messageId => (dispatch, getState) => {
  dispatch({
    type: DELETE_MESSAGE
  });
  const { token } = getState().auth.login;

  return fetch(url + "/" + messageId, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders }
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: DELETE_MESSAGE_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({
          type: DELETE_MESSAGE_FAIL,
          payload: err
        })
      );
    });
};