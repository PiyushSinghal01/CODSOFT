import React, { useState } from 'react'
import './Navbar.css'
import underline from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import theme_pattern from "../../assets/theme_pattern.svg"


const Navbar = () => {
  const [menu, setMenu] = useState("home")
  const [navToggle, setNavToggle] = useState("");


  return (
    <div id='home' className='navbar'>
      <div className="nav-title">
        <h1>Ronaldo</h1>
        <img src={theme_pattern} alt="" />
      </div>
      {/* <img src={logo} alt="logo" /> */}
      <img src={menu_open} onClick={() => setNavToggle("active")} alt="" className='nav-mob-open' />
      <ul className={`nav-menu ${navToggle}`}>
      <img src={menu_close} onClick={() => setNavToggle("")} alt="" className="nav-mob-close" />
        <li><p onClick={() => setMenu("home")}>Home</p>{menu==="home"?<img src={underline} alt="" />:""}</li>
        <li><p onClick={() => setMenu("About")}>About Me</p>{menu==="About"?<img src={underline} alt="" />:""}</li>
        <li><p onClick={() => setMenu("Services")}>Services</p>{menu==="Services"?<img src={underline} alt="" />:""}</li>
        <li><p onClick={() => setMenu("Portfolio")}>Work</p>{menu==="Portfolio"?<img src={underline} alt="" />:""}</li>
        <li><p onClick={() => setMenu("Contact")}>Contact</p>{menu==="Contact"?<img src={underline} alt="" />:""}</li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar