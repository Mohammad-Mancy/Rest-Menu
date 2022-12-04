import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { reactLocalStorage } from 'reactjs-localstorage';

function AddCategory() {

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title,setTitle] = useState()
    const [icon,setIcon] = useState()

    const token_key = reactLocalStorage.get('token')
    let handleSubmit = async (e) => {
        try {
          let formData = new FormData()
          formData.append('image', icon.data)
          formData.append('title', title)

          let res = await fetch('http://127.0.0.1:3001/api/category/add',{
            method : 'POST',
            headers : {
                'authorization': `${token_key}`
            },
            body : formData
          })
          const data = await res.json()
          if (res.status === 200) {
            handleClose()
            window.location.reload()
          }
        } catch (error) {
          console.log(error)
        }
      }
  return (
    <>
    
    <div className="add-cat-div">
        <Button variant="primary" onClick={handleShow}>AddCategory</Button>
    </div>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Category</Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" >
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Platters..."
              onChange={e => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" >
            <input
              type="file"
              name="image"
              onChange={e => {
                const img = {
                    preview: URL.createObjectURL(e.target.files[0]),
                    data: e.target.files[0],
                  }
                  setIcon(img)
            }}/>
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose} >
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default AddCategory