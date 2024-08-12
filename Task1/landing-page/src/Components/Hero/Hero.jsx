import React from 'react'
import './Hero.css'
// import profile_img from "../../assets/profile_img.svg"
import my_pic2 from "../../assets/my_pic2.jpg"

const Hero = () => {
  return (
    <div className='hero'>
      <img src={my_pic2} alt="" />
      <h1><span>I'm Piyush Singhal,</span> Full Stack developer based in INDIA.</h1>
      <p>I am a full stack developer from Dholpur, INDIA with knowladge of MERN.</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
