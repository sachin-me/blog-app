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
        } else {
          dispatch({
            type: "USER_SIGNUP_FAIL",
            error: data.error,
          });
        }
      });
  },
};

export default userAction;