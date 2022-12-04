import React from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri'
import EditItem from '../modal/EditItem'

function ItemCard({id,name,price,cat,onDelete,catId}) {
  return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{price} L.L</td>
            <td>{cat}</td>
            <td>        
                <span >
                    <button className='items-delete-btn'
                    onClick={onDelete}
                    ><RiDeleteBin5Line/></button>
                    <EditItem id={id} catId={catId}/>
                </span>    
            </td>
        </tr>
  )
}

export default ItemCard