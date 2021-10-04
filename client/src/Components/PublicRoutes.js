import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";

function PublicRoutes({ component: Component, restricted, ...rest }) {
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
    <Route
      {...rest}
      render={(props) =>
        user.id ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
}

export default PublicRoutes;