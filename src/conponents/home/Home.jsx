import React,{useState,useContext,useEffect} from 'react'
import classes from './home.module.css'
import MbContext from '../../contexst/context'
export default function Home() {
  const fool=(classes.homeContainer)
  const mob=(classes.homeMobContainer)
  const{open}=useContext(MbContext)
  const[clas,setClass]=useState(fool)

  useEffect(()=>{
    !open?setClass(fool):setClass(mob)
  },[open])
  return (
    <div className={clas}>
        <h1 className={classes.h1}>Butai nuomai Vilniaus senamiestyje, MB</h1>
          <p className={classes.p}>
          
          Būsto nuomos įmonė.
           Nuomojanti nekilnojamąjį turtą Vilniaus senamiestyje  ir už jo ribų,
           patogiai, greitai ir saugiai susiraskite savo svajonių būstą. „Butai 
           nuomai Vilniaus senamiestyje, MB“ rasite platų nekilnojamojo turto asortimentą,
           nuo studijų ir butų iki individualių namų, įrengtų ar neįrengtų,
           skirtų tiek laikinam, tiek ilgalaikiam gyvenimui. Mūsų paslaugos pasižymi,
           profesionalumu ir nepriekaištingos kokybės standartais.
          </p>
    </div>
  )
}
