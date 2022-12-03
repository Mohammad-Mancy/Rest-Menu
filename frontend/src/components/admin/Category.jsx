import React, { useState } from 'react'
import NavbarComponent from '../main/NavbarComponent'
import CMSNavbar from './CMSNavbar'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import CategoryCard from './card/CategoryCard'
import { useEffect } from 'react';

function Category() {

    const [category,setCategory] = useState([]);

    const getCategories = async (e) => {
        try {
          let res = await fetch('http://127.0.0.1:3001/api/category/get',{
            method: 'GET',
            headers:{
              'Content-Type' : 'application/json'
            }
          })
          const data = await res.json();
          if (res.status === 200 ) {
            setCategory(data)
          }
    
        } catch (error) {
          console.error(error);
        }
      }
    
    useEffect ( () => {
        getCategories()
      },[]);
      
  return (
    <div>
        <NavbarComponent admin={true} />
        <CMSNavbar activeLink={'category'} />

        <div className="add-cat-div">
            <Button variant="primary">Add Category</Button>
        </div>

        <Table bordered hover className='table-category'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Icon</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {category.map(({_id,title,icon},index) => (
                    <CategoryCard
                    key={_id}
                    id={index+1}
                    title={title}
                    icon={icon}
                    onDelete={() => {
                        //delete method
                        window.location.reload()
                    }}
                    onEdit= { () => {
                        // edit method
                     }}
                    />
                    ))}
            </tbody>
        </Table>
    </div>
  )
}

export default Category