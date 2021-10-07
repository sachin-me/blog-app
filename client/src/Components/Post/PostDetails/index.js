import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import Loader from "react-loader-spinner";
import postAction from "../../../store/actions/postAction";
import Message from "../../Common/Message";

function PostDetails(props) {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const { post, error } = useSelector((state) => {
    return {
      post: state.post,
      error: state.error,
    };
  });

  useEffect(() => {
    const { id } = props.match.params;
    dispatch(
      postAction.postDetails(id, (success) => {
        if (success) {
          setLoading(false);
        }
        setLoading(false);
      })
    );
  }, []);

  const handleDelete = (id) => {
    dispatch(
      postAction.deletePost(id, (success) => {
        if (success) {
          setLoading(false);
          props.history.push("/posts");
        } else {
          setLoading(false);
        }
      })
    );
  };

  if (loading) {
    return (
      <div className="loader">
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      </div>
    );
  }
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Card className="center">
      {(Object.keys(post).length !== 0 && (
        <Card.Body className="card-info">
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.text}</Card.Text>
          <Card.Text>{new Date(post.created_at).toLocaleString()}</Card.Text>
          {post.user.includes(user.id) && (
            <>
              <Button
                variant="primary"
                type="submit"
                onClick={() => handleDelete(post._id)}
              >
                Delete
              </Button>
              <Message message={null} error={error} />
            </>
          )}
        </Card.Body>
      )) || <Card.Body className="card-info">No Post found :)</Card.Body>}
    </Card>
  );
}

export default PostDetails;
