import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, SIGNUP, SIGNUP_SUCCESS, LOGOUT_SUCCESS, LOGIN_GOOGLE_SUCCESS, LOGIN_GOOGLE, LOGIN_GOOGLE_FAIL } from "../actions";
//import { SIGNUP_FAIL } from "../actions/signupAction";
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGIN_GOOGLE_SUCCESS,
  LOGIN_GOOGLE,
  LOGIN_GOOGLE_FAIL
} from "../actions";

const initialState = {
  loginLoading: false,
  login: null,
  loginError: null,
  signupUser: null,
  signupUserLoading: false,
  signupUserError: null
};

const getInitState = () => {
  return JSON.parse(localStorage.getItem("auth")) || initialState;
};

export default (state = getInitState(), action) => {
  switch (action.type) {
    case LOGIN:
    case LOGIN_GOOGLE:
      return {
        ...state,
        loginLoading: true,
        loginError: null
      };
    case LOGIN_SUCCESS:
<<<<<<< HEAD
      return { ...state, 
        login: action.payload, 
        loginLoading: false };
=======
    case LOGIN_GOOGLE_SUCCESS:
      return { ...state, login: action.payload, loginLoading: false };
>>>>>>> afd7af7dc2087d8739abe552e9f0ae0354e8cbbd
    case LOGIN_FAIL:
    case LOGIN_GOOGLE_FAIL:
      return { ...state, loginError: action.payload, loginLoading: false };
<<<<<<< HEAD

    case SIGNUP:
      return {
        ...state,
        signupUserLoading: true,
        signupUserError: false
      }

    case SIGNUP_SUCCESS:
        return {
          ...state,
          signupUser: action.payload,
          signupUserLoading: false
        } 
    // case SIGNUP_FAIL:
    //   return {
    //     ...state,
    //     signupUserError: action.payload,
    //     signupUserLoading: false
    //   }
=======
    case LOGOUT_SUCCESS:
      return { ...initialState };
>>>>>>> afd7af7dc2087d8739abe552e9f0ae0354e8cbbd
    default:
      return state;
  }
};
