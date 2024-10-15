import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="rel navbar relative list-none m-0 p-0 lg:w-[20vw] bg-black min-h-screen text-center font-extrabold overflow-hidden w-[100vw]">
        <div className="big-screen h-[100%]">
          <ul className="listes grid gap-14 translate-y-20">
            <li className="pages hover:text-lg text-[palegreen]">
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
            <li className="text:white hover:cursor-pointer hover:text-lg">
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
            <li className="text:white hover:cursor-pointer hover:text-lg">
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
            <li className="text:white hover:cursor-pointer hover:text-lg">
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
          </ul>
        </div>
      </div>
      <p className='text-center'>Email - iamfope2006@gmail.com</p>
    </div>
  );
};

export default Navbar;
