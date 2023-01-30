import React from 'react'
//icons
import skype from '../../media/img/skype.png'
import WhatsApp from '../../media/img/WhatsApp.png'
import viber from '../../media/img/viber.png'
//css
import classes from './footer.module.css'
//Router
import { NavLink } from 'react-router-dom';
//Framer
import {motion} from 'framer-motion'
 const BaseFooter=()=> {
//framer
 const animateF={opesity:0,y:-50} 
 const animateT={opesity:1,y: 0}
//Date
 const today=new Date();

  return (
    <footer className={classes.mainFooter}>
       <div className="container">
       <div className="row">
    
            <div className="iconList">
            <motion.div
              initial={animateF}
              animate={animateT}
              transition={{delay: 1}}  
              
            style={{width:'1rem'}}><a className={classes.a}  href='viber://chat?number=%2B37067047345' target={'_blank'}><li className={classes.li}><img className={classes.icon} src={viber} alt="viber-icon" /></li></a></motion.div>
            <motion.div
              initial={animateF}
              animate={animateT}
              transition={{delay: 1.1}}  
            style={{width:'1rem'}}><a className={classes.a}  href="https://api.whatsapp.com/send?phone=37067047345" target={'_blank'}><li className={classes.li}><img className={classes.icon} src={WhatsApp} alt="whatsapp-icon" /></li></a></motion.div>
            <motion.div
              initial={animateF}
              animate={animateT}
              transition={{delay: 1.2}}  
            style={{width:'1rem'}}><a className={classes.a} href="skype:+37067047345?call" target={'_blank'}><li className={classes.li}> <img className={classes.icon} src={skype} alt="skype-icon" /></li></a></motion.div>
            </div>
       </div>
       </div>
       <hr className={classes.hr}/>
       <div className="row">
          <p className="rights col-sm">
            &copy;{today.getFullYear()} | All rights reserved |
          </p>
       </div>
    </footer>
  )
}

export default BaseFooter;