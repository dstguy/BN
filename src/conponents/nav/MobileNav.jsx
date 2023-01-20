import React, { Fragment, useState } from 'react';
//navigation links
import NavLinks from './NavLinks';
// css
import classes from './Navbar.module.css';
//context
import MbContext from '../../contexst/context';
import { useContext } from "react";
export default function MobileNav() {
const{open,setOpen}=useContext(MbContext)
    
    const closeMenu=()=>setOpen(false);
  return (
   
    <nav className={ classes.mobileNav}>
    <div className={ classes.hamburger}  onClick={()=>setOpen(!open)}>
    <span className={ classes.bar}></span>
    <span className={ classes.bar}></span>
    <span className={ classes.bar}></span>
    {open && <NavLinks mobile={true} closeMenu={closeMenu}/>}
    </div>
    </nav >
  
    
 
  )
}
