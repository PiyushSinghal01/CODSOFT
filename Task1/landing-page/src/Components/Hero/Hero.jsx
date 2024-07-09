import React from 'react'
import './Hero.css'
import profile_img from "../../assets/profile_img.svg"
// import my_pic2 from "../../assets/my_pic2.jpg"

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Ronaldo,</span> Full Stack developer based in UK.</h1>
      <p>I am a full stack developer from London, UK with knowladge of MERN.</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
