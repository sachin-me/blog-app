import React from "react";
import { Link } from "react-router-dom";
import Signup from "../Signup";

function Dashboard(params) {
  return (
    <div className="dashboard">
      <div className="link-card">
        <Signup />
      </div>
      <div className="link-card">
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Dashboard;
