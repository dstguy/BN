import React from 'react'
// navigation
import NavLinks from './NavLinks'
//css
import classes from './Navbar.module.css'
export default function Nav() {
  return (
    <nav className={classes.nav}> 
      <NavLinks/>
    </nav>
  )
}
