import React, { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { BsSunFill } from 'react-icons/bs';
import image from '../assets/images.jpg'
const Navbar = ({functions}) => {
  const [ open, setOpen ] = functions;

  function darkTema() {
   
  }
  function changeTheme() {
    if (functions[0]) {
      setOpen(false);
  }
  console.log(functions[0])
  
  }
  return <nav>
    <div className="logo">logo</div>
    <div className="panel" >
      
      <span className="moun" onClick={changeTheme}><BsSunFill /></span>
      <div className="userImage" ><img src={image} alt="" /></div>
    </div>
  </nav>
}
export default Navbar
