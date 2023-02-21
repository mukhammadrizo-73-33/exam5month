import React, { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { BsSun } from 'react-icons/bs';
import image from '../assets/images.jpg';
import logoImage from '../assets/logo.png';
import userImage from "../assets/user.png";
import { getAccessToken } from "../utilits/localStorage";
import { Link } from 'react-router-dom';
const Navbar = ({functions,...res}) => {
  const [ open, setOpen ] = functions;
  console.log(res.token,'ressssssssssss');
  const [istoken,setistoken]=useState(false);
  const [token,settoken]=useState('');
  let b=localStorage.getItem("accessToken");
  console.log('navbar',b);
  useEffect(()=>{
if(b){
  setistoken(true);
}
  },[res.token,b])

  function darkTema() {
    
  }
  function changeTheme() {
    if (functions[0]) {
      setOpen(false);
  }
  console.log(functions[0])
  
  }
  return <nav>
    <div className="logo" ><img src={logoImage} alt="" /></div>
    <div className="panel" >
     
      <span className="moun" onClick={changeTheme}><BsSun /></span>
      <div className="userImage" ><img src={(istoken)?image:userImage} alt="" /></div>
      
    </div>
  </nav>
}
export default Navbar
