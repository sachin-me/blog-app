import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";

function Dashboard(props) {
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
    <div className="dashboard">
      {(!user.id && (
        <>
          <div className="link-card">
            <h3>Create an account</h3>
            <div>
              <Link to="/signup">Signup</Link>
            </div>
          </div>
          <div className="link-card">
            <h3>Login here</h3>
            <div>
              <Link to="/login">Login</Link>
            </div>
          </div>
        </>
      )) || (
        <div className="link-card">
          <div>Hello, {user.name} 👋 .</div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
