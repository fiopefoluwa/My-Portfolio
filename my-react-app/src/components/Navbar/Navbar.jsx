import React from 'react'
import { Link } from 'react-scroll';
import "./Navbar.css";


const Navbar = () => {       
    
  return (
            <div>
                <div className='navbar'>
                    <div className='big-screen'>
                        <div>
                            <div>
                            </div>
                            <p className='owner'>
                                <img src="./src/images/initials.jpg" alt="" />
                            </p>
                        
                            {/* <hr /> */}
                            <fieldset className='bg-pink-400 p-2'>
                                <legend className='bg-black text-white p-6'>
                                    <div className='socials'>
                                        <p className='overline'>Twi.</p>
                                        <p className='overline'>Face.</p>
                                        <p className='overline'>Insta.</p>
                                    </div>  
                                </legend>
                            </fieldset>
                        </div>
                            <ul className='grid gap-12'>
                                <li className='pages'>
                                    <Link to='home' spy={true} smooth={true} offset={50} duration={800}>Home</Link>
                                </li>
                                <li className='page'>
                                    <Link to='services' spy={true} smooth={true} offset={50} duration={1000}>Services</Link>
                                </li>
                                <li className='page'>
                                    <Link to='about'spy={true} smooth={true} offset={50} duration={1000}>About</Link>
                                </li>
                                <li className='page'>
                                    <Link to='portfolio'spy={true} smooth={true} offset={50} duration={1000}>My Work</Link>
                                </li>
                                <li className='page'>
                                    <Link to='skills'spy={true} smooth={true} offset={50} duration={1000}>Skills</Link>
                                </li>
                                <li className='page'>
                                    <Link to='contacts'spy={true} smooth={true} offset={50} duration={800}>Contact</Link>
                                </li>
                            </ul>
                        <div className='p-20 my-96 '>
                        <Link to='home' spy={false} smooth={true} offset={50} duration={1500}> <img src="../src/images/icons8-scroll-up-100.png" alt="" /></Link>
                        </div>
                        <div className='p-20 my-96 '>
                        <Link to='home' spy={false} smooth={true} offset={50} duration={1500}> <img src="../src/images/icons8-scroll-up-100.png" alt="" /></Link>
                        </div>
                        <div className='p-20 my-96 '>
                        <Link to='home' spy={false} smooth={true} offset={50} duration={1500}> <img src="../src/images/icons8-scroll-up-100.png" alt="" /></Link>
                        </div>
                        <div className='p-20 my-96 '>
                        <Link to='home' spy={false} smooth={true} offset={50} duration={1500}> <img src="../src/images/icons8-scroll-up-100.png" alt="" /></Link>
                        </div>
                </div>
                </div>
            </div>
  )
}

export default Navbar
