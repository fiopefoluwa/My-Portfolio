import React, { useState } from 'react'
import { Link } from 'react-scroll';
import "./home.css"
import universe from '../../images/universe.jpg';


const Home = () => {

  return (
    <>
      <div id="home">
        <div className="img-respon text-black">
          {/* <img className="respon" src="../src/images/harmburger.jpg" alt="" />
          <img className="respon" src="../src/images/initials.jpg" alt="" /> */}
          {/* <li className="pages">
            <Link to="home" spy={true} smooth={true} offset={50} duration={800}>
              Home
            </Link>
          </li>
          <li className="page">
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
            >
              Services
            </Link>
          </li>
          <li className="page">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
            >
              About
            </Link>
          </li>
          <li className="page">
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
            >
              My Work
            </Link>
          </li>
          <li className="page">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
            >
              Skills
            </Link>
          </li>
          <li className="page">
            <Link
              to="contacts"
              spy={true}
              smooth={true}
              offset={50}
              duration={800}
            >
              Contact
            </Link>
          </li> */}
        </div>
        <div className=" flex">
          <div className="universe">
            <img src={universe} alt="" className="girl" />
          </div>
          <div className="img-container">
            <div className="inner-container ">
              <p className="text-5xl text-pink-400">I'm,</p>
              <p className="surname"> OREKOYA </p>
              <p className="firstname">FIOPEFOLUWA</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default Home
