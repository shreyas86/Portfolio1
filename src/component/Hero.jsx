import React from "react";
// Link to the CSS file
import "../CSS/Hero.css"
import profile from '/public/mee.jpg'
import resume from '/public/.SHREYAS-RESUME.pdf'
const Hero = () => {
  return (
    <section className="hero-container" id="home">
      {/* Left: Profile Image */}
      <div className="hero-i-container">

      <div className="hero-image">
        <img
          src={profile}
          alt="Shaikh Sajed"
          className="profile-pic border-3 border-red-800"
          />
      </div>

      {/* Right: Content */}
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm Shreyas Hegde</h1>
        <h2 className="hero-subtitle">A Fullstack Web Developer</h2>

        <div className="hero-contact">
          <a href={resume} download className="resume-link">
            Download Resume
          </a>
          <span className="divider">|</span>
          <span>shreyasin153@gmail.com</span>
          <span className="divider">|</span>
          <span>9663582948</span>
        </div>

          </div>
        {/* About Section */}
      </div>
        <div className="hero-about">
          <h3>About</h3>
          <p>
           I’m a passionate <b>Full-Stack Web Developer</b> with hands-on experience in the <b>MERN stack</b>. I love building dynamic, responsive, and user-friendly web applications that solve real-world problems. With a strong foundation in both front-end and back-end technologies, I enjoy turning ideas into clean, functional code. I'm always eager to learn, grow, and contribute to innovative projects that make a difference.</p>
        </div>
    </section>
  );
};

export default Hero;
