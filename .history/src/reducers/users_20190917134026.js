import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  UPLOAD_PICTURE,
  UPLOAD_PICTURE_SUCCESS,
  UPLOAD_PICTURE_FAIL,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL
} from "../actions";

const initialState = {
  
  user: null,
  getUserLoading: false,
  uploadPictureLoading: false,
  uploadPictureError: null,
  pictureLocation: null,
  getUser: {},
  getUserError: null,

  updateUserLoading: false,
  updateUser: {},
  updateUserError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        getUserLoading: true,
        getUserError: null,
        pictureLocation: action.payload.pictureLocation
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        getUser: action.payload.user,
        getUserLoading: false
      };
    case GET_USER_FAIL:
      return {
        ...state,
        getUserError: action.payload,
        getUserLoading: false
      };
    case UPLOAD_PICTURE:
      return {
        ...state,
        uploadPictureLoading: true,
        uploadPictureError: null
      };
    case UPLOAD_PICTURE_SUCCESS:
      return {
        ...state,
        uploadPictureLoading: false
      };
    case UPLOAD_PICTURE_FAIL:
      return {
        ...state,
        uploadPictureError: action.payload,
        uploadPictureLoading: false
      };
    case UPDATE_USER:
      return {
        ...state,
        updateUserLoading: true,
        updateUserError: null
      };

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        getUser: action.payload.user,
        updateUserError: false
      };

    case UPDATE_USER_FAIL:
      return {
        ...state,
        updateUserError: action.payload,
        updateUserLoading: false
      };

    default:
      return state;
  }
};
