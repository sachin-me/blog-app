const initState = {
  user: {},
  message: "",
  error: "",
};

function rootReducer(state = initState, action) {
  switch (action.type) {
    case "USER_SIGNUP_SUCCESS": {
      return {
        ...state,
        message: action.message,
        user: action.payload,
      };
    }

    case "USER_SIGNUP_FAIL": {
      return {
        ...state,
        error: action.error,
      };
    }

    case "USER_LOGIN_SUCCESS": {
      return {
        ...state,
        message: action.message,
        user: action.payload,
      };
    }

    case "USER_LOGIN_FAIL": {
      return {
        ...state,
        error: action.error,
      };
    }

    case "POST_CREATE_SUCCESS": {
      return {
        ...state,
        message: action.message,
      };
    }

    case "POST_CREATE_FAIL": {
      return {
        ...state,
        error: action.error,
      };
    }

    default:
      return state;
  }
}

export default rootReducer;
