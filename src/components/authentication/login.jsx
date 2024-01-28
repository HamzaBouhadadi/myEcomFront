import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function LoginForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Log in
      </Button>

      {/* Sign Up Button */}
      <Link to="/signup" style={{ marginLeft: '10px' }}>
        <Button variant="success">Sign Up</Button>
      </Link>

      {/* Home Button */}
      <Link to="/" style={{ marginLeft: '10px' }}>
        <Button variant="secondary">Home</Button>
      </Link>
    </Form>
  );
}

export default LoginForm;
