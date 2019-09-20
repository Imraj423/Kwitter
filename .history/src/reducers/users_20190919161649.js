import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILURE,
  GET_ALL_USERS,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL
} from "../actions";
import { domain } from "../actions/constants";
import defaultLogo from "../components/Logo1.png";
const initialState = {
  user: null,
  getUserLoading: false,
  uploadPictureLoading: false,
  uploadPictureError: null,
  pictureLocation: null,
  getUser: {},
  getUserError: null,
  getAllUsersLoading: false,
  getAllUsersError: null,

  updateUserLoading: false,
  updateUser: {},
  updateUserError: null

  // uploadPictureLoading: false,
  // uploadPictureError: null,
  // pictureLocation:null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        getUserLoading: true,
        getUserError: null
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
    case GET_ALL_USERS:
      return {
        ...state,
        getUserLoading: true,
        getUserError: null
      };

    case GET_ALL_USERS_SUCCESS:
      let userList = action.payload.users.map(user => {
        let { pictureLocation } = user;
        user.pictureLocation = pictureLocation
          ? domain + pictureLocation
          : defaultLogo;

        return user;
      });
      return {
        ...state,
        userList,
        getAllUsersLoading: false
      };

    case GET_ALL_USERS_FAILURE:
      return {
        ...state,
        getAllUserError: action.payload,
        getAllUserLoading: false
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
