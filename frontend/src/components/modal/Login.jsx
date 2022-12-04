import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {reactLocalStorage} from'reactjs-localstorage';
import { useNavigate } from 'react-router-dom';

function Login() {
  
    const navigation = useNavigate()  
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    let handleSubmit = async (e) => {
      try {
        let res = await fetch('http://127.0.0.1:3001/api/user/auth/login',{
          method : 'POST',
          headers : {'Content-Type' : 'application/json'},
          body : JSON.stringify({
            email:email,
            password:password
          })
        })
        const data = await res.json()
        if (res.status === 200) {
          reactLocalStorage.set('token',data.token)
          handleClose()
          navigation('/dashboard')
        }
      } catch (error) {
          console.log(error)
          alert("somthing went worng")
      }
    }

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
                  onChange={e => setEmail(e.target.value)}/>

              </Form.Group>
              <Form.Group className="mb-3" >

                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  onChange={e => setPassword(e.target.value)} />

              </Form.Group>
            </Form>

          </Modal.Body>

          <Modal.Footer>

            <Button variant="secondary" onClick={handleClose} >
              Cancel
            </Button>
            
            <Button variant="primary" onClick={handleSubmit}>
              Login
            </Button>

          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default Login