import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import userAction from "../../store/actions/userAction";
import helperFunctions from "../../Utility";
import Message from "../Common/Message";
import LoginForm from "./LoginForm";
let { validateEmail, validatePassword } = helperFunctions;

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);

  const dispatch = useDispatch();
  const { message, error } = useSelector((state) => {
    return {
      message: state.message,
      error: state.error,
    };
  });

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

  const validateEmailPassword = () => {
    setValidEmail(validateEmail(email));
    setValidPassword(validatePassword(password));
  };

  useEffect(() => {
    if (email || password) {
      if (email && !validEmail) {
        return dispatch({
          type: "USER_LOGIN_FAIL",
          error: "*Enter valid email address (e.g. abc@gmail.com)",
        });
      }
      if (password && !validPassword) {
        return dispatch({
          type: "USER_LOGIN_FAIL",
          error:
            "*Password must contain 4-8 characters and at least One Uppercase letter and one numeric value.",
        });
      } else {
        return dispatch({
          type: "USER_LOGIN_FAIL",
          error: "",
        });
      }
    }
  }, [email, password]);

  return (
    <div className="form-wrapper">
      <LoginForm
        setEmail={setEmail}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        validateEmailPassword={validateEmailPassword}
      />
      <Message message={message} error={error} />
      <div className="center mt-2">
        <Link to="/signup">Create an account</Link>
      </div>
    </div>
  );
}

export default Login;
