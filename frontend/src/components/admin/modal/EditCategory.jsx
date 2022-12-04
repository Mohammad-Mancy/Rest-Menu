import React from 'react'
import { useState,useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FaEdit } from 'react-icons/fa'
import {reactLocalStorage} from 'reactjs-localstorage'

function EditCategory({id}) {

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title,setTitle] = useState()
    const [icon,setIcon] = useState()
    const [currentIcon,setCurrentIcon] = useState()
    const token_key = reactLocalStorage.get('token')

    let handleSubmit = async (e) => {
        try {
          let formData = new FormData()
          if (icon) {
            formData.append('image', icon.data)
          }
          formData.append('title', title)
          formData.append('id', id)

          let res = await fetch('http://127.0.0.1:3001/api/category/edit',{
            method : 'PUT',
            headers : {
                'authorization': `${token_key}`
            },
            body : formData
          })
          if (res.status === 200) {
            handleClose()
            window.location.reload()
          }
        } catch (error) {
          console.log(error)
        }
      }

    let handleCallCurrentCategory = async (e) => {
    try{
        let res = await fetch(`http://127.0.0.1:3001/api/category/get/${id}`,{
        method:'GET',
        headers:{'Content-Type' : 'application/json'}
        })
        const data = await res.json();
        if (res.status === 200 ){
        setTitle(data.title)
        setCurrentIcon(data.icon)
        }
    }catch(error){
        console.error(error)
    }
    }

  useEffect(() => {
    handleCallCurrentCategory();
  }, [])

  return (
    <>
    <button className='category-edit-btn'
        ><FaEdit onClick={handleShow}/>
    </button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit {title} Category</Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" >
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder={title}
              onChange={e => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" >
          <Form.Label>Change icon</Form.Label>
          <br />
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
          <Form.Group className="mb-3" >
            <Form.Label>Current Icon</Form.Label>
            <br />
                <img src={`http://localhost:3001/public/media/icon/${currentIcon}`} alt="old icon" width={'200px'} height={'200px'}/>
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose} >
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default EditCategory