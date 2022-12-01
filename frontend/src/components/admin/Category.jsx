import React from 'react'
import NavbarComponent from '../main/NavbarComponent'
import CMSNavbar from './CMSNavbar'

function Category() {
  return (
    <div>
        <NavbarComponent />
        <CMSNavbar activeLink={'category'} />
    </div>
  )
}

export default Category