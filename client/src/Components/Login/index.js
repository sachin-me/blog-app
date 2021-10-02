import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import userAction from "../../store/actions/userAction";
import LoginForm from "./LoginForm";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      email,
      password,
    };
    dispatch(
      userAction.login(payload, (success) => {
        if (success) {
          props.history.push("/posts");
        }
      })
    );
  };

  return (
    <div className="form-wrapper">
      <LoginForm
        setEmail={setEmail}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
      <div className="center mt-2">
        <Link to="/signup">Create an account</Link>
      </div>
    </div>
  );
}

export default Login;
