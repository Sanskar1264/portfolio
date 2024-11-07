import React from 'react'
import './Hero.css'
import profile_img from '../../assets/sanskar.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Resume from "../../assets/resume.pdf";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" className="profile-img" />
      <h1>
        <span>I'm Sanskar Singh,</span> Frontend Developer from Delhi.
      </h1>
      <p>
        I am a Frontend Developer from Delhi, India with 1.5 years of experience
        and also a second year B.tech undergrad.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a href={Resume} download="sanskar-Resume">
            My resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero
