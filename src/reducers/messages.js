import {
  GET_USER_MESSAGES,
  GET_USER_MESSAGES_SUCCESS,
  GET_USER_MESSAGES_FAIL,
  GET_MESSAGES,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_FAIL,
  UPDATE_MESSAGE_BY_ID,
  UPDATE_MESSAGE_BY_ID_SUCCESS,
  UPDATE_MESSAGE_BY_ID_FAIL,
  DELETE_MESSAGE,
  DELETE_MESSAGE_SUCCESS,
  DELETE_MESSAGE_FAIL,
  CREATE_MESSAGE,
  CREATE_MESSAGE_SUCCESS,
  CREATE_MESSAGE_FAIL
} from "../actions";

const initialState = {
  getUserMessagesLoading: false,
  getUserMessages: [],
  getUserMessagesError: null,
  getMessagesLoading: false,
  getMessages: [],
  getMessagesError: null,
  updateMessageById: [],
  updateMessageByIdError: null,
  deleteMessageLoading: false,
  deleteMessageError: null,
  createMessage: [],
  createMessageLoading: false,
  createMessageError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_MESSAGES:
      return {
        ...state,
        getUserMessagesLoading: true,
        getUserMessagesError: null
      };
    case GET_USER_MESSAGES_SUCCESS:
      return {
        ...state,
        getMessages: action.payload.messages,
        getMessagesLoading: false
      };
    case GET_USER_MESSAGES_FAIL:
      return {
        ...state,
        getUserMessagesError: action.payload,
        getUserMessagesLoading: false
      };
    case GET_MESSAGES:
      return {
        ...state,
        getMessagesLoading: true,
        getMessagesError: null
      };
    case GET_MESSAGES_SUCCESS:
      return {
        ...state,
        getMessages: action.payload.messages,
        getMessagesLoading: false
      };
    case GET_MESSAGES_FAIL:
      return {
        ...state,
        getMessagesError: action.payload,
        getMessagesLoading: false
      };
    case CREATE_MESSAGE:
      return {
        ...state,
        createMessageLoading: true,
        createMessageError: null
      };
    case CREATE_MESSAGE_SUCCESS:
      return {
        ...state,
        createMessageLoading: false,
        getUserMessages: [action.payload.message, ...state.getUserMessages],
        getMessages: [action.payload.message, ...state.getMessages]
      };
    case CREATE_MESSAGE_FAIL:
      return {
        ...state,
        createMessageLoading: false,
        createMessageError: action.payload
      };
    case DELETE_MESSAGE:
      return {
        ...state,
        deleteMessageLoading: false,
        deleteMessageError: null
      };
    case DELETE_MESSAGE_SUCCESS:
      const messageIdToDelete = action.payload.id;
      const callback = message => message.id !== messageIdToDelete;
      return {
        ...state,
        deleteMessageLoading: true,
        getMessages: state.getMessages.filter(callback),
        getUserMessages: state.getUserMessages.filter(callback)
      };
    case DELETE_MESSAGE_FAIL:
      return {
        ...state,
        deleteMessageLoading: false,
        deleteMessageError: action.payload
      };
    case UPDATE_MESSAGE_BY_ID:
      return {
        ...state,
        updateMessageByIdLoading: true,
        updateMessageByIdError: null
      };
    case UPDATE_MESSAGE_BY_ID_SUCCESS:
      const newMessages = state.messages.map(message =>
        message.id === action.payload.message.id
          ? action.payload.message
          : message
      );
      const newUserMessages = state.userMessages.map(message =>
        message.id === action.payload.message.id
          ? action.payload.message
          : message
      );
      return {
        ...state,
        updateMessageByIdLoading: false,
        messages: newMessages,
        userMessages: newUserMessages
      };
    case UPDATE_MESSAGE_BY_ID_FAIL:
      return {
        ...state,
        updateMessageByIdError: action.payload,
        updateMessageByIdLoading: false
      };
    /*case ADD_LIKE_SUCCESS:
        const addLikeCallback = message => {
          if (message.id === action.payload.like.messageId) {
            message.likes = [action.payload.like, ...message.likes];
          }
          return message;
        };
        
      case REMOVE_LIKE_SUCCESS:
        const removeLikeCallback = message => {
          message.likes = message.likes.filter(
            like => like.id !== action.payload.id
          );
          return message;
        };*/

    default:
      return state;
  }
};
