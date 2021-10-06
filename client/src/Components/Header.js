import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Loader from "react-loader-spinner";
import userAction from "../store/actions/userAction";

function Header(params) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const user = JSON.parse(localStorage.getItem("user"));

      setUser(user);
      setLoading(false);
    }
    setLoading(false);
  }, []);

  const handleLogout = () => {
    dispatch(
      userAction.logout((success) => {
        if (success) {
          window.location.href = "/login";
        }
      })
    );
  };

  const navigateToHome = () => {
    window.location.href = "/";
  };

  if (loading) {
    return (
      <div className="loader">
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      </div>
    );
  }

  return (
    <div className="header">
      <div className="home" onClick={navigateToHome}>
        Blog
      </div>
      {user.id && (
        <div className="nav-link">
          <Link to="/create-post">Create Post</Link>
          <Link to="/posts">Posts</Link>
          <div onClick={handleLogout}>Logout</div>
        </div>
      )}
    </div>
  );
}

export default Header;
