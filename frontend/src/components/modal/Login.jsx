import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Login() {
  
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button  onClick={handleShow}>
          <span className='login-btn'>Login</span>
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login Form</Modal.Title>
          </Modal.Header>
          
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                />
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose} >
              Cancel
            </Button>
            <Button variant="primary">
              Login
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default Login