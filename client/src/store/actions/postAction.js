const uri = "/api";

const postAction = {
  create: (data, cb) => (dispatch) => {
    fetch(`${uri}/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin", // send cookies
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          dispatch({
            type: "POST_CREATE_SUCCESS",
            message: data.message,
          });
          cb(true);
        } else {
          dispatch({
            type: "POST_CREATE_FAIL",
            error: data.error,
          });
          cb(false);
        }
      });
  },
};

export default postAction;
