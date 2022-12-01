import React from 'react'
import NavbarComponent from '../main/NavbarComponent'
import CMSNavbar from './CMSNavbar'
import Card from 'react-bootstrap/Card';

function Dashboard() {
  return (
    <div>
        <NavbarComponent />
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
                    2 Users
                </Card.Text>
            </Card.Body>
            </Card>

            {/* category card */}
            <Card
            bg='success'
            key='Success'
            text='white'
            className="mb-2 dashboard-card"
            >
            <Card.Body className='dashboard-card-body'>
                <Card.Text style={{fontSize:'1.5rem'}}>
                    10 Categories
                </Card.Text>
            </Card.Body>
            </Card>

            {/* Items card */}
            <Card
            bg='success'
            key='Success'
            text='white'
            className="mb-2 dashboard-card"
            >
            <Card.Body className='dashboard-card-body'>
                <Card.Text style={{fontSize:'1.5rem'}}>
                30 Items
                </Card.Text>
            </Card.Body>
            </Card>

        </div>

    </div>
  )
}

export default Dashboard