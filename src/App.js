import React from 'react';
import starsVideo from './videos/stars.mp4';
import responsive from './images/responsive2.png';
import dynamic from './images/dyna.png';
import functional from './images/innovacion.png';
import oop from './images/oop.png';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {



  return (
    <div className="container-fluid">
      {/* welcome view */}
      <div className="main-menu-background">
        <div className="overlay-video-background" >
          <div className="main-text">
            <h1 className="greeting">Hi! I'm <b className="name-in-title">Juan Gonzalez</b>.</h1>
            <h2 className="greeting sub-title">I'm a Full-Stack web developer</h2>
            <div className="main-text-button">Check my work</div>
          </div>
        </div>
      </div>
      
      {/* navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      {/*About Section*/}
      
      <div className="about-section">
        <div className="about-title-box"><h1 className="about-title">About</h1></div>
        <div className="box-of-boxes">
          <div className="about-info">
            <div className="about-box"><img className="about-logo" src={responsive} /></div>
            <div className="about-text"><h2>Responsive</h2><p>Mobile first approach, apps that will work smoothly in mobile devices and computers.</p></div>
          </div>
          <div className="about-info">
            <div className="about-box"><img className="about-logo" src={dynamic} /></div>
            <div className="about-text"><h2>Dynamic</h2><p>Websites don't have to be static, I love making pages come to life.</p></div>
          </div>
          <div className="about-info">
            <div className="about-box"><img className="about-logo" src={functional} /></div>
            <div className="about-text"><h2>Functional</h2><p>Everything on my websites has a purpose and function.</p></div>
          </div>
          <div className="about-info">
            <div className="about-box"><img className="about-logo" src={oop} /></div>
            <div className="about-text"><h2>OOP</h2><p>Working with the most extended programming paradigm.</p></div>
          </div>
                   
        </div> 
        <div className="info-about-and-skills">
          <div className="info-about">
            <h1 className="about-title">Who am I?</h1>
            <div className="info-about-body">
              <div className="photo-about" />
              <p className="info-text">
                As you read before, I am a full-stack developer passionate about frontend design and backend functionalities. I studied computer science in France
                and complemented this studies in a bootcamp in Madrid.
              </p>
            </div>
          </div>
          <div className="info-about">
            <h1 className="about-title">Skills</h1>
            <p className="skills">
              <span className="skill-box">HTML</span>
              <span className="skill-box">CSS</span>
              <span className="skill-box">Bootstrap</span>
              <span className="skill-box">Javascript</span>
              <span className="skill-box">React.js</span>
              <span className="skill-box">Flux/Redux</span>
              <span className="skill-box">Python</span>
              <span className="skill-box">Django/Flask</span>
              <span className="skill-box">SQL/MySQL</span>
              <span className="skill-box">SQLAlchemy</span>
              <span className="skill-box">Git</span>
              <span className="skill-box">Scrum</span>
            </p>
          </div>
        </div> 
      </div>
      

      
    </div>
  );
}

export default App;
