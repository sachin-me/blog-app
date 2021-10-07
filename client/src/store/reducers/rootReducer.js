const initState = {
  user: {},
  message: "",
  error: "",
  posts: [],
  post: {},
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

    case "POST_LIST_SUCCESS": {
      return {
        ...state,
        posts: action.payload,
      };
    }

    case "POST_LIST_FAIL": {
      return {
        ...state,
        error: action.error,
      };
    }

    case "POST_DETAILS_SUCCESS": {
      return {
        ...state,
        post: action.payload,
      };
    }

    case "POST_DETAILS_FAIL": {
      return {
        ...state,
        error: action.error,
      };
    }

    case "POST_DELETE_FAIL": {
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
