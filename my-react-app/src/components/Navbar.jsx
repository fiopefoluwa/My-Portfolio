import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css";

const Navbar = () => {
  return (
        <div className='navbar'>
        <div>
            <p className='owner'>OREKOYA 
            Fiopefoluwa
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
        <ul>
            <li className='pages'>
                <Link to='/'>Home</Link>
            </li>
            <li className='page'>
                <Link to='/services'>Services</Link>
            </li>
            <li className='page'>
                <Link to='/about'>About</Link>
            </li>
            {/* <li className='page'>
                <Link to='/'>Portfolio</Link>
            </li> */}
            <li className='page'>
                <Link to='/blog'>Blog</Link>
            </li>
            <li className='page'>
                <Link to='/skills'>Skills</Link>
            </li>
            <li className='page'>
                <Link to='/contacts'>Contact</Link>
            </li>
        </ul>
        
        </div>
    
  )
}

export default Navbar
