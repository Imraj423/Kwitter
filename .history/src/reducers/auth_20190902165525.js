import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, SIGNUP, SIGNUP_FAIL, SIGNUP_SUCCESS, LOGOUT_SUCCESS, LOGIN_GOOGLE_SUCCESS, LOGIN_GOOGLE_FAIL } from "../actions";


const initialState = {
  loginLoading: false,
  login: null,
  loginError: "fuck",
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
      return {
        ...state,
        loginLoading: true,
        loginError: null
      };
    case LOGIN_SUCCESS:
      return { ...state, 
        login: action.payload, 
        loginLoading: false };
    case LOGIN_GOOGLE_SUCCESS:
      return { ...state, login: action.payload, loginLoading: false };
    case LOGIN_FAIL:
    case LOGIN_GOOGLE_FAIL:
      return { ...state, loginError: action.payload, loginLoading: false };

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
    case SIGNUP_FAIL:
      return {
        ...state,
        signupUserError: action.payload,
        signupUserLoading: false
      }
    case LOGOUT_SUCCESS:
      return { ...initialState };
    default:
      return state;
  }
};
