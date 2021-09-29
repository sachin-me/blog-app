import React from "react";
import { Form, Button } from "react-bootstrap";

function SignupForm({ setName, setEmail, setPassword, handleSubmit }) {
  return (
    <Form onSubmit={(event) => handleSubmit(event)}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          onChange={(event) => setName(event.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Signup
      </Button>
    </Form>
  );
}

export default SignupForm;
