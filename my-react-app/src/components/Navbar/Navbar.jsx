import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import initialss from '../../images/initials.jpg';
import scrollUp from '../../images/icons8-scroll-up-100.png';

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="rel navbar">
        <div className="big-screen">
          <div>
            <p className="owner flex justify-center">
              <img className="w-[200px] h-[200px]" src={initialss} alt="" />
            </p>

            <fieldset className="bg-pink-400 p-2">
              <legend className="bg-black text-white p-6">
                <div className="socials">
                  <p className="overline">Twi.</p>
                  <p className="overline">Face.</p>
                  <p className="overline">Insta.</p>
                </div>
              </legend>
            </fieldset>
          </div>
          <ul className="grid gap-12">
            <li className="pages">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={800}
              >
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
            </li>
          </ul>
          <div className="scroll p-20">
            <Link
              to="home"
              spy={false}
              smooth={true}
              offset={50}
              duration={1500}
              className="flex justify-center"
            >
              <img src={scrollUp} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
