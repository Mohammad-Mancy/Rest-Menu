import React from 'react'
import NavbarComponent from '../main/NavbarComponent'
import CMSNavbar from './CMSNavbar'

function Items() {
  return (
    <div>
        <NavbarComponent />
        <CMSNavbar activeLink={'items'} />
    </div>
  )
}

export default Items