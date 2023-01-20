import React, { Component } from 'react';
//css
import classes from './Navbar.module.css';
//framer
import {motion} from 'framer-motion';
//Router
import {Link } from 'react-router-dom';
export default function NavLinks({mobile,closeMenu}) {
    const animateF={opesity:0,y:-50}
    const animateT={opesity:1,y: 0}
  return (
    <ul className={classes.navMenu}>
                   
                <motion.li  
                    initial={animateF}
                    animate={animateT}
                    transition={{delay: 0.1}}
                    className={classes.navItem}>
                    <Link to={'/'} onClick={()=>mobile && closeMenu()}><div className={classes.navLink}>Apie Mus</div></Link>
                </motion.li>
                <motion.li 
                    initial={animateF}
                    animate={animateT}
                    transition={{delay: 0.2}}
                    className={classes.navItem}>
                    <Link to={'/Sutartys'} onClick={()=>mobile && closeMenu()}><div className={classes.navLink}>Sutartys</div></Link>
                </motion.li>

                <motion.li    
                    initial={animateF}
                    animate={animateT}
                    transition={{delay: 0.3}}
                    className={classes.navItem}>
                    <Link to={'/Kontaktai'} onClick={()=>mobile && closeMenu()}><div className={classes.navLink}>Kontaktai</div></Link>
                </motion.li>
            
            </ul>
  )
}
