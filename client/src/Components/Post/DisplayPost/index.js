import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import Loader from "react-loader-spinner";
import postAction from "../../../store/actions/postAction";
import { Link } from "react-router-dom";

function DisplayPost(props) {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const { posts } = useSelector((state) => {
    return {
      posts: state.posts,
    };
  });

  useEffect(() => {
    dispatch(
      postAction.list((success) => {
        if (success) {
          setLoading(false);
        }
        setLoading(false);
      })
    );
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      </div>
    );
  }

  return (
    <Card className="center">
      {(posts.length !== 0 &&
        posts.map((post, index) => {
          return (
            <Card.Body className="card-info" key={index}>
              <Card.Title>
                <Link to={`/post/${post._id}`}>{post.title}</Link>
              </Card.Title>
              <Card.Text>
                {new Date(post.created_at).toLocaleString()}
              </Card.Text>
            </Card.Body>
          );
        })) || <Card.Body className="card-info">No Post found :)</Card.Body>}
    </Card>
  );
}

export default DisplayPost;
