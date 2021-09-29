import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

function Login(props) {
  return (
    <div className="form-wrapper">
      <LoginForm />
      <div className="center mt-2">
        <Link to="/signup">Create an account</Link>
      </div>
    </div>
  );
}

export default Login;
