import React, { useContext, useEffect, useState} from 'react';
import classes from "./sutartys.module.css";
import MbContext from '../../contexst/context';
export default function Sutartys() {
  const fool=(classes.sutartysContainer)
  const mob=(classes.sutartysMobContainer)
  const{open}=useContext(MbContext)
  const[clas,setClass]=useState(fool)

  useEffect(()=>{
    !open?setClass(fool):setClass(mob)
  },[open])
  

  const sutartys=[{
    title:'"NEKILNOJAMOJO TURTO NUOMOS SUTARTIS"',
    src:'https://m.en.aruodas.lt/static/misc/sutartys/Nuomojamo%20buto%20ar%20kito%20NT%20sutartis%20ir%20aktas.doc',
    img:'Agreement-Lt'
  },
  {
    title:'"REAL ESTATE TENANCY AGREEMENT"',
    src:'https://m.en.aruodas.lt/static/misc/sutartys/Nuomojamo_buto_ar_kito_NT_sutartis_ir_aktas_EN.doc',
    img:'Agreement-En'
  },
  {
    title:'"ДОГОВОР АРЕНДЫ НЕДВИЖИМОСТИ"',
    src:'https://m.en.aruodas.lt/static/misc/sutartys/Nuomojamo_buto_ar_kito_NT_sutartis_ir_aktas_RU.doc',
    img:'Agreement-Ru'
  },
  {
    title:'"ДОГОВІР ОРЕНДИ НЕРУХОМОГО МАЙНА"',
    src:'https://m.en.aruodas.lt/static/misc/sutartys/Nuomojamo_buto_ar_kito_NT_sutartis_ir_aktas_LT_UKR.doc',
    img:'Agreement-Ukr'
  }
]
  return (
    <div className={clas}>
        <h1 className={classes.h1}>Sutartys</h1>
        {
          sutartys.map((s,id)=>{
            return(
              <div className={classes.mapDiv} key={id}>
                <h3 className={classes.h3}>{s.title}</h3>
                <a href={`${s.src}`} ><img className={classes.img} src={require('../../media/docs/' +
        s.img +'.png')} alt='pic'/></a>
              </div>
            )
          })
        }
        
    </div>
  )
}
