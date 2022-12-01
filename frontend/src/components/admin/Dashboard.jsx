import React from 'react'
import NavbarComponent from '../main/NavbarComponent'
import CMSNavbar from './CMSNavbar'

function Dashboard() {
  return (
    <div>
        <NavbarComponent />
        <CMSNavbar activeLink={'dashboard'} />
    </div>
  )
}

export default Dashboard