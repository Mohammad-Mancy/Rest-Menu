import React from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri'
import EditCategory from '../modal/EditCategory'

function CategoryCard({id,title,icon,onDelete,_id}) {
  return (
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td><img src={`http://localhost:3001/public/media/icon/${icon}`} alt="category Icon" className="icon-tbl-cat" /></td>
            <td>        
                <span >
                    <button className='category-delete-btn'
                    onClick={onDelete}
                    ><RiDeleteBin5Line/></button>
                    <EditCategory id={_id}/>
                </span>    
            </td>
        </tr>
  )
}

export default CategoryCard