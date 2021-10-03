import React from "react";
import { Form, Button } from "react-bootstrap";

function CreatePostForm({ setTitle, setText, handleSubmit }) {
  return (
    <Form onSubmit={(event) => handleSubmit(event)}>
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          onChange={(event) => setTitle(event.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Text</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter text"
          onChange={(event) => setText(event.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Create
      </Button>
    </Form>
  );
}

export default CreatePostForm;
