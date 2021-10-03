import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import postAction from "../../../store/actions/postAction";
import Message from "../../Common/Message";
import CreatePostForm from "./CreatePostForm";

function CreatePost(props) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const { message, error } = useSelector((state) => {
    return {
      message: state.message,
      error: state.error,
    };
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      title,
      text,
    };
    dispatch(
      postAction.create(payload, (success) => {
        if (success) {
          props.history.push("/posts");
        }
      })
    );
  };

  return (
    <div className="form-wrapper">
      <CreatePostForm
        setTitle={setTitle}
        setText={setText}
        handleSubmit={handleSubmit}
      />
      <Message message={message} error={error} />
    </div>
  );
}

export default CreatePost;
