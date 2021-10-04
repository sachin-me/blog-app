const uri = "/api";

const userAction = {
  create: (data, cb) => (dispatch) => {
    fetch(`${uri}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          dispatch({
            type: "USER_SIGNUP_SUCCESS",
            payload: data.data,
            message: data.message,
          });
          cb(true);
        } else {
          dispatch({
            type: "USER_SIGNUP_FAIL",
            error: data.error,
          });
          cb(false);
        }
      });
  },
  login: (data, cb) => (dispatch) => {
    fetch(`${uri}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.token);
          dispatch({
            type: "USER_LOGIN_SUCCESS",
            payload: data.user,
            message: data.message,
          });
          cb(true);
        } else {
          dispatch({
            type: "USER_LOGIN_FAIL",
            error: data.error,
          });
          cb(false);
        }
      });
  },
  logout: (cb) => (dispatch) => {
    fetch(`${uri}/logout`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin", // send cookies
    })
      .then((res) => res.json())
      .then((user) => {
        if (user.message) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          dispatch({
            type: "LOGOUT_USER",
            message: user.message,
          });
          cb(true);
        }
      });
  },
};

export default userAction;
