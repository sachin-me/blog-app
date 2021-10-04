import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";

function Header(params) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const user = JSON.parse(localStorage.getItem("user"));

      setUser(user);
      setLoading(false);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      </div>
    );
  }

  return (
    <div className="header">
      <Link to="/">Blog</Link>
      {user.id && (
        <div className="nav-link">
          <Link to="/create-post">Create Post</Link>
          <div>Logout</div>
        </div>
      )}
    </div>
  );
}

export default Header;
