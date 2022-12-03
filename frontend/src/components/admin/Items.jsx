import React,{ useEffect, useState} from 'react'
import NavbarComponent from '../main/NavbarComponent'
import CMSNavbar from './CMSNavbar'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ItemCard from './card/ItemCard';

function Items() {

    const [categories,setCategories] = useState([]);

    const getCategories = async (e) => {
        try {
          let res = await fetch('http://127.0.0.1:3001/api/category/getCategoriesWithItems',{
            method: 'GET',
            headers:{
              'Content-Type' : 'application/json'
            }
          })
          const data = await res.json();
          if (res.status === 200 ) {
            setCategories(data)
          }
    
        } catch (error) {
          console.error(error);
        }
      }
    
    useEffect ( () => {
        getCategories()
      },[]);
console.log(categories)
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
                {categories.map((category,i)=>{
                    return(
                        category.items.map(({_id,name,price},index) => (
                            <ItemCard
                            key={_id}
                            id={_id}
                            name={name}
                            price={price}
                            cat={category.title}
                            onDelete={() => {
                                //delete method
                                window.location.reload()
                            }}
                            onEdit= { () => {
                                // edit method
                                }}
                            />
                            ))
                    )
                })}
            </tbody>
        </Table>
    </div>
  )
}

export default Items