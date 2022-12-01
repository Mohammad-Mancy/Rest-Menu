import React from 'react'
import Nav from 'react-bootstrap/Nav';

function CMSNavbar(props) {
  return (
    <Nav fill variant="tabs" defaultActiveKey={props.activeLink}>
      <Nav.Item>
        <Nav.Link href="dashboard" className='nav-link-admin'>Dashboard</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="category" className='nav-link-admin'>Category</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="items" className='nav-link-admin'>Items</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default CMSNavbar