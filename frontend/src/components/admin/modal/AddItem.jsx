import React from 'react'
import { useState,useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { reactLocalStorage } from 'reactjs-localstorage';
import Select from 'react-select';

function AddItem() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name,setName] = useState()
  const [image,setImage] = useState()
  const [description,setDescription] = useState()
  const [price,setPrice] = useState()
  const [categoryId,setCategoryId] = useState()

  const [options,setOptions] = useState([]);//category options

  const token_key = reactLocalStorage.get('token')

  let handleSubmit = async (e) => {
      try {
        let formData = new FormData()

        formData.append('name',name )
        formData.append('description',description )
        formData.append('price',price )
        formData.append('image',image.data )
        formData.append('categoryId',categoryId )

        let res = await fetch('http://127.0.0.1:3001/api/category/item/add',{
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

let handleCallCategories = async (e) => {
    try{
        let res = await fetch('http://127.0.0.1:3001/api/category/get',{
        method:'GET',
        headers:{'Content-Type' : 'application/json'}
        })
        const data = await res.json();
        if (res.status === 200 ){
        data.map(({_id,title})=>{
            setOptions((options) => [...options,{'value':_id,'label':title}])
        })
        }
    }catch(error){
        console.error(error)
    }
}

useEffect(() => {
    handleCallCategories();
}, [])

  return (
    <>
    <div className="add-item-div">
        <Button variant="primary" onClick={handleShow}>Add Item</Button>
    </div>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Item</Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" >
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Chicken burger..."
              onChange={e => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" >
          <Form.Label>Image :</Form.Label>
          <br />
            <input
              type="file"
              name="image"
              onChange={e => {
                const img = {
                    preview: URL.createObjectURL(e.target.files[0]),
                    data: e.target.files[0],
                  }
                  setImage(img)
            }}/>
          </Form.Group>
          <Form.Group className="mb-3" >
          <Form.Label>Category : </Form.Label>
            <Select 
                options={options} 
                onChange={(e) => setCategoryId(e.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Control
                type="text"
                placeholder="Description..."
                onChange={e => setDescription(e.target.value)}
                />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Control
                type="number"
                placeholder="Price..."
                onChange={e => setPrice(e.target.value)}
                />
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

export default AddItem