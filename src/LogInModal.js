import React from "react";
import { Link } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";

function LogInModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header center closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h1 className="logInHeader"> Welcome back </h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Login</h4>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LogInModal;
