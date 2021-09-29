const initState = {
  user: {},
  message: "",
  error: "",
};

function userReducer(state = initState, action) {
  switch (action) {
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

    default:
      return state;
  }
}

export default userReducer;
