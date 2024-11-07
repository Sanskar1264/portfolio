import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/sanskar.jpg'


const About = () => {
  return (
    <div id="about" className="about">
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              "I am a motivated and versatile individual, eager to embrace new
              challenges and learn continuously. With a commitment to
              high-quality results and a positive, growth-oriented mindset, I am
              dedicated to making a meaningful impact in everything I pursue."
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Next JS</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1.5+</h1>
          <p>YEARS OF LEARNING EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5-6</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          {/* <h1>15+</h1> */}
          {/* <p>HAPPY CLIENTS</p> */}
        </div>
      </div>
    </div>
  );
}

export default About
