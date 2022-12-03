import React from 'react'
import NavbarComponent from '../main/NavbarComponent'
import CMSNavbar from './CMSNavbar'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { RiDeleteBin5Line } from 'react-icons/ri'
import { FaEdit } from 'react-icons/fa'

function Items() {
  return (
    <div>
        <NavbarComponent admin={true} />
        <CMSNavbar activeLink={'items'} />

        <div className="add-item-div">
            <Button variant="primary">Add Item</Button>
        </div>

        <Table bordered hover className='table-items'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Chicken Platte</td>
                    <td>160000 <strong>L.L</strong></td>
                    <td>Platters</td>
                    <td>        
                        <span >
                            <button className='items-delete-btn'
                            ><RiDeleteBin5Line/></button>
                            <button className='items-edit-btn'
                            ><FaEdit/></button>
                        </span>    
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Chicken Platte 2</td>
                    <td>160000 <strong>L.L</strong></td>
                    <td>Platters</td>
                    <td>        
                        <span >
                            <button className='items-delete-btn'
                            ><RiDeleteBin5Line/></button>
                            <button className='items-edit-btn'
                            ><FaEdit/></button>
                        </span>    
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Chicken Platte 3</td>
                    <td>160000 <strong>L.L</strong></td>
                    <td>Platters</td>
                    <td>        
                        <span >
                            <button className='items-delete-btn'
                            ><RiDeleteBin5Line/></button>
                            <button className='items-edit-btn'
                            ><FaEdit/></button>
                        </span>    
                    </td>
                </tr>
            </tbody>
        </Table>
    </div>
  )
}

export default Items