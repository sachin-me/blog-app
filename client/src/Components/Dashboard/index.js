import React from "react";
import { Link } from "react-router-dom";
import Login from "../Login";
import Signup from "../Signup";

function Dashboard(params) {
  return (
    <div className="dashboard">
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
    </div>
  );
}

export default Dashboard;
