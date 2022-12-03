import React from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { FaEdit } from 'react-icons/fa'

function ItemCard({id,name,price,cat}) {
  return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{price} L.L</td>
            <td>{cat}</td>
            <td>        
                <span >
                    <button className='items-delete-btn'
                    ><RiDeleteBin5Line/></button>
                    <button className='items-edit-btn'
                    ><FaEdit/></button>
                </span>    
            </td>
        </tr>
  )
}

export default ItemCard