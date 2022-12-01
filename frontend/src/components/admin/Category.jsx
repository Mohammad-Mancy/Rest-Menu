import React from 'react'
import NavbarComponent from '../main/NavbarComponent'
import CMSNavbar from './CMSNavbar'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { RiDeleteBin5Line } from 'react-icons/ri'
import { FaEdit } from 'react-icons/fa'

function Category() {
  return (
    <div>
        <NavbarComponent />
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
                <tr>
                    <td>1</td>
                    <td>Platters</td>
                    <td><img src="https://via.placeholder.com/150" alt="" /></td>
                    <td>        
                        <span >
                            <button className='category-delete-btn'
                            ><RiDeleteBin5Line/></button>
                            <button className='category-edit-btn'
                            ><FaEdit/></button>
                        </span>    
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Beverages</td>
                    <td><img src="https://via.placeholder.com/150" alt="" /></td>
                    <td>        
                        <span >
                            <button className='category-delete-btn'
                            ><RiDeleteBin5Line/></button>
                            <button className='category-edit-btn'
                            ><FaEdit/></button>
                        </span>    
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Salad</td>
                    <td><img src="https://via.placeholder.com/150" alt="" /></td>
                    <td>        
                        <span >
                            <button className='category-delete-btn'
                            ><RiDeleteBin5Line/></button>
                            <button className='category-edit-btn'
                            ><FaEdit/></button>
                        </span>    
                    </td>
                </tr>
            </tbody>
        </Table>
    </div>
  )
}

export default Category