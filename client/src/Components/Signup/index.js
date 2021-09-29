import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import userAction from "../../store/actions/userAction";
import helperFunctions from "../../Utility";
import Message from "../Common/Message";
import SignupForm from "./SignupForm";
let { validateEmail, validatePassword } = helperFunctions;

function Signup(props) {
  const [name, setName] = useState("");
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
      name,
      email,
      password,
    };
    dispatch(userAction.create(payload));
  };

  const validateEmailPassword = () => {
    setValidEmail(validateEmail(email));
    setValidPassword(validatePassword(password));
  };

  useEffect(() => {
    if (email || password) {
      if (email && !validEmail) {
        return dispatch({
          type: "USER_SIGNUP_FAIL",
          error: "*Enter valid email address (e.g. abc@gmail.com)",
        });
      }
      if (password && !validPassword) {
        return dispatch({
          type: "USER_SIGNUP_FAIL",
          error:
            "*Password must contain 4-8 characters and at least One Uppercase letter and one numeric value.",
        });
      } else {
        return dispatch({
          type: "USER_SIGNUP_FAIL",
          error: "",
        });
      }
    }
  }, [email, password]);

  return (
    <div className="form-wrapper">
      <SignupForm
        setName={setName}
        setEmail={setEmail}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        validateEmailPassword={validateEmailPassword}
      />
      <Message message={message} error={error} />
    </div>
  );
}

export default Signup;
