// import logo from './logo.svg';
import NavBar from "./conponents/nav/NavBar";
import React,{useState} from 'react';
import bg from './media/Vilnius.mp4';
import classes from "./App.module.css";
import'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import Footer from "./conponents/footers/Footer"
import Home from "./conponents/home/Home";
import Sutartys from "./conponents/sutartys/Sutartys.jsx";
import Kontaktai from "./conponents/kontaktai/Kontaktai.jsx";
import MbContext from "./contexst/context";

export default function App() {
  const [open,setOpen ]=useState(false);
  return (
    <MbContext.Provider value={{open,setOpen}}>
    <div className={classes.container}>
    <div className={classes.containerWrap}>
    <video className={classes.bg} src={bg} 
      autoPlay={true} loop={true} muted={true}>
    </video> 
    
    <Routes>
      <Route path='/' element={<NavBar/>}>
      <Route index element={<Home/>}></Route>
      <Route path='/sutartys' element={<Sutartys/>}/>
      <Route path='/kontaktai' element={<Kontaktai/>}/>
      </Route>
    </Routes>
    </div>
    <Footer/>
  </div>
    
    </MbContext.Provider>
   
  )
}
