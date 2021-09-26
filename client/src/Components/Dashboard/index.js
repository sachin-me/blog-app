import React from "react";
import Login from "../Login";
import Signup from "../Signup";

function Dashboard(params) {
  return (
    <div className="dashboard">
      <div className="link-card">
        <h3>Create an account</h3>
        <Signup />
      </div>
      <div className="link-card login-card">
        <h3>Login here</h3>
        <Login />
      </div>
    </div>
  );
}

export default Dashboard;
