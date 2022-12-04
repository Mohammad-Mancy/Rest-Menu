import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { useState,useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {reactLocalStorage} from 'reactjs-localstorage'
import Select from 'react-select';

function EditItem({id,catId}) {

    
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name,setName] = useState()
    const [currentImage,setCurrentImage] = useState()
    const [description,setDescription] = useState()
    const [price,setPrice] = useState()
    const [title,setTitle] = useState()
    const [image,setImage] = useState()

    const [categoryId,setCategoryId] = useState()
    const [currentCategoryId,setCurrentCategoryId] = useState()

    const [options,setOptions] = useState([]);

    const token_key = reactLocalStorage.get('token')

    let handleCallCurrentCategory = async (e) => {
        try{
            let res = await fetch(`http://127.0.0.1:3001/api/category/get/${catId}`,{
            method:'GET',
            headers:{'Content-Type' : 'application/json'}
            })
            const data = await res.json();
            if (res.status === 200 ){
            setTitle(data.title)
            setCurrentCategoryId(data._id)
            }
        }catch(error){
            console.error(error)
        }
        }

    let handleCallCurrentItem = async (e) => {
        try {
            let res = await fetch(`http://127.0.0.1:3001/api/category/item/get/${id}`,{
                method:'GET',
                headers:{'Content-Type' : 'application/json'}
            })
            const data = await res.json();
            if (res.status === 200 ){
            setName(data.name)
            setCurrentImage(data.image)
            setDescription(data.description)
            setPrice(data.price)
            }
        } catch (error) {
            console.error(error);
        }
    }

    let handleGetAllCategory = async (e) => {
        try {
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
        } catch (error) {
            console.error(error);
        }
    }

    let handleSubmit = async (e) => {
        try {

          let formData = new FormData()

          formData.append('name',name )
          formData.append('description',description )
          formData.append('price',price )
          formData.append('id', id)

          if (image) {//check if the user change the image
            formData.append('image',image.data )
          }
          if (categoryId) {//check if the user change the category if yes then send the new|old category ID
            formData.append('categoryId',categoryId )
            formData.append('currentCategoryId',currentCategoryId )
          }

          let res = await fetch('http://127.0.0.1:3001/api/category/item/edit',{
            method : 'PUT',
            headers : {
                'authorization': `${token_key}`
            },
            body : formData
          })
          if (res.status === 204) {
            handleClose()
            window.location.reload()
          }
        } catch (error) {
          console.log(error)
        }
      }

useEffect(() => {
    handleCallCurrentItem();
    handleCallCurrentCategory();
    handleGetAllCategory();
    }, [])
  return (
    <>
    <button className='category-edit-btn'
        ><FaEdit onClick={handleShow}/>
    </button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Item</Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" >
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder={name}
              onChange={e => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" >
          <Form.Label>Change Image :</Form.Label>
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
          <Form.Label>Current Category : {title}</Form.Label>

          </Form.Group>
          <Form.Group className="mb-3" >
          <Form.Label>Change Category : </Form.Label>
            <Select 
                options={options} 
                onChange={(e) => setCategoryId(e.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" >
          <Form.Label>description : </Form.Label>
            <Form.Control
                type="text"
                placeholder={description}
                onChange={e => setDescription(e.target.value)}
                />
          </Form.Group>
          <Form.Group className="mb-3" >
          <Form.Label>price : </Form.Label>
            <Form.Control
                type="number"
                placeholder={price}
                onChange={e => setPrice(e.target.value)}
                />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Current Image</Form.Label>
            <br />
                <img src={`http://localhost:3001/public/media/images/${currentImage}`} alt="old icon" width={'400px'} height={'400px'}/>
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

export default EditItem