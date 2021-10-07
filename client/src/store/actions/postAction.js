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
  list: (cb) => (dispatch) => {
    fetch(`${uri}/posts`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          dispatch({
            type: "POST_LIST_SUCCESS",
            payload: data.posts,
          });
          cb(true);
        } else {
          dispatch({
            type: "POST_LIST_FAIL",
            error: data.error,
          });
          cb(false);
        }
      })
      .catch((err) => console.log(err));
  },
  postDetails: (id, cb) => (dispatch) => {
    fetch(`${uri}/post/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          dispatch({
            type: "POST_DETAILS_SUCCESS",
            payload: data.post,
          });
          cb(true);
        } else {
          dispatch({
            type: "POST_DETAILS_FAIL",
            error: data.error,
          });
          cb(false);
        }
      });
  },
  deletePost: (id, cb) => (dispatch) => {
    fetch(`${uri}/post/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          cb(true);
        } else {
          dispatch({
            type: "POST_DELETE_FAIL",
            error: data.error,
          });
          cb(false);
        }
      });
  },
};

export default postAction;
