import React from 'react'
import NavbarComponent from '../main/NavbarComponent'
import CMSNavbar from './CMSNavbar'
import Card from 'react-bootstrap/Card';
import { useState,useEffect } from 'react';

function Dashboard() {

    const [users,setUsers] = useState()
    const [categories,setCategories] = useState()
    const [items,setItems] = useState()

    const handleGetStatistics = async () => {
        try {
          let res = await fetch('http://127.0.0.1:3001/api/category/statistics',{
            method : 'GET',
            headers : {
              'Content-Type' : 'application/json',
            }
          })
          const data = await res.json()
          if (res.status === 200) {
            setUsers(data.users)
            setCategories(data.categories)
            setItems(data.items)
          }
        } catch (error) {
            console.error(error);
        }
      }

    useEffect ( () => {
        handleGetStatistics()
    },[]);

  return (
    <div>
        <NavbarComponent admin={true} />
        <CMSNavbar activeLink={'dashboard'} />

        <div className="dashboard-wrapper">

            {/* Users card */}
            <Card
            bg='success'
            key='Success'
            text='white'
            className="mb-2 dashboard-card"
            >
            <Card.Body className='dashboard-card-body'>
                <Card.Text style={{fontSize:'1.5rem'}}>
                    {users} Users
                </Card.Text>
            </Card.Body>
            </Card>

            {/* category card */}
            <Card
            bg='success'
            key='Success'
            text='white'
            className="mb-2 dashboard-card">

                <Card.Body className='dashboard-card-body'>
                    <Card.Text style={{fontSize:'1.5rem'}}>
                        {categories} Categories
                    </Card.Text>
                </Card.Body>
            
            </Card>

            {/* Items card */}
            <Card
            bg='success'
            key='Success'
            text='white'
            className="mb-2 dashboard-card">

                <Card.Body className='dashboard-card-body'>
                    <Card.Text style={{fontSize:'1.5rem'}}>
                    {items} Items
                    </Card.Text>
                </Card.Body>

            </Card>

        </div>

    </div>
  )
}

export default Dashboard