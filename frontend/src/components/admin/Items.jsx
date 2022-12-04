import React,{ useEffect, useState} from 'react'
import NavbarComponent from '../main/NavbarComponent'
import CMSNavbar from './CMSNavbar'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ItemCard from './card/ItemCard';
import AddItem from './modal/AddItem';
import { reactLocalStorage } from 'reactjs-localstorage';

function Items() {

    const [categories,setCategories] = useState([]);

    const token_key = reactLocalStorage.get('token');

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

      const handleDeleteItem = async (_id,cat_id) => {
        try {
          let res = await fetch('http://127.0.0.1:3001/api/category/item/delete',{
            method : 'DELETE',
            headers : {
              'Content-Type' : 'application/json',
              'authorization' : `${token_key}`
            },
            body : JSON.stringify({
              cat_id:cat_id,
              id:_id
            })
          })
          if (res.status === 204) {
            console.log('Deleted')
          }
        } catch (error) {
            console.error(error);
        }
      }
      
  return (
    <div>
        <NavbarComponent admin={true} />
        <CMSNavbar activeLink={'items'} />

        <AddItem/>
        
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
                                handleDeleteItem(_id,category._id)
                                window.location.reload()
                            }}
                            catId={category._id}
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