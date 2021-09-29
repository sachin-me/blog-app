import React, { useState } from "react";
import { useDispatch } from "react-redux";
import userAction from "../../store/actions/userAction";
import SignupForm from "./SignupForm";

function Signup(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
      name,
      email,
      password,
    };
    dispatch(userAction.create(payload));
  };

  return (
    <div className="form-wrapper">
      <SignupForm
        setName={setName}
        setEmail={setEmail}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Signup;
