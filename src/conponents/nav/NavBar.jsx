import React, { Fragment, useState } from 'react'
//navigation
import Nav from './Nav'
// mobile navigation
import MobileNav from './MobileNav'
//css
import classes from './Navbar.module.css'
//framer
import {motion} from 'framer-motion'
//Router
import {NavLink,Outlet} from 'react-router-dom'
export default function NavBar() {

  return (
        <Fragment>
        <nav className={classes.navbar}>
          <motion.div animate={{x:10,scale:1}} initial={{scale:0}}>
              <NavLink to={'/'}><div className={classes.navLogo}>Butai nuomai Vilniaus senamiestyje</div></NavLink>
          </motion.div>
                <Nav/>
                <MobileNav/>
        </nav>
        <Outlet/>
        </Fragment>
  )
}