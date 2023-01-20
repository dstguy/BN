import React,{useState,useContext,useEffect} from 'react';
import classes from "./kontaktai.module.css"
import MbContext from '../../contexst/context';
export default function Kontaktai() {
  const fool=(classes.kontaktaiContainer)
  const mob=(classes.kontaktaiMobContainer)
  const{open}=useContext(MbContext)
  const[clas,setClass]=useState(fool)

  useEffect(()=>{
    !open?setClass(fool):setClass(mob)
  },[open])
 const kontaktai=[{
  title:'Butai nuomai Vilniaus senamiestyje, MB',
  kodas:'305649508',
  vardas:'Linas Midveris, direktorius',
  adres:' Vytauto g. 29-3, LT-08119 Vilnius',
  tel:'+37067047345',
  email:'LMidveris@Yahoo.com',
 }]
  return (
    <div className={clas}>
     <h1 className={classes.h1}>Kontaktai</h1>
      {
        kontaktai.map((k,id)=>{
          return(
            <div className={classes.mapDiv} key={id}>
                <h3 className={classes.h3}>{k.title}</h3>
                <h4 className={classes.h4}>{k.vardas}</h4>
                <h5 className={classes.h5}>Įmonės kodas: <a href="https://rekvizitai.vz.lt/imone/butai_nuomai_vilniaus_senamiestyje/" target={'blank'}>{k.kodas}</a></h5>
                <h5 className={classes.h5}>Adresas: <a href="https://www.google.com/maps/place/Vytauto+g.+29,+08119+Vilnius/@54.6915023,25.2572496,17z/data=!3m1!4b1!4m5!3m4!1s0x46dd93f7aafa734b:0x37ce1f6881616ac5!8m2!3d54.6915023!4d25.2572496" target={'_blank'}>{k.adres}</a></h5>
                <h5 className={classes.h5}>Tel: <a href="tel:+37067047345" target={'blank'}>{k.tel}</a></h5>
                <h5 className={classes.h5}>Email: <a href = "mailto:LMidveris@Yahoo.com">{k.email}</a></h5>
               
            </div>
          )
        })
      }
    </div>
  )
}
