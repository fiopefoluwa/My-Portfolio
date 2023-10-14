import React from 'react'
import { Link } from 'react-router-dom'
import "./contacts.css"
import { useState } from 'react'

const Contacts = () => {
  return (
    <div id='contacts'>
        <div className='text-center p-10'>
            <p className='contact'>CONTACT INFO</p>
            <div className='check'>
                <p className='contacts'>EMAIL</p>
                <p className='subcontacts'>superstar@gmail.com</p>
                <p className='contacts'>PHONE</p>
                <p className='subcontacts'>(+234)-8012345678</p>
                <p className='contacts'>ADDRESS  </p>
                <p className='subcontacts'> Hub, LAGOS</p>
            </div>
            <div className='p-10'>
                <fieldset className='bg-black'>
                    <legend className='bg-black text-white p-6'>
                        <div className='socials'>
                            <p className='overline'>Feedback.</p>
                        </div>  
                    </legend>
                    <p className='text-white'>
                        <form action="submit">
                            <div className='grid text-left'>
                                <label htmlFor="name">Your Name : </label> <br />
                                <input type="text"  className='name p-1 text-black '/> <br />
                                <label htmlFor="name" >Your Email : </label> <br />
                                <input type="email" className='name p-1 text-black' /> <br />
                                <label htmlFor="name">Your Message : </label> <br />
                                <input type="text" className='w-[50%] p-4 text-black'/>
                                <button className='button name'>
                                <button type='btn' id='btn'>Send Message</button>
                                </button>
                            </div>
                        </form>
                    
                    </p>
                  
                </fieldset>
            </div>
        </div>
    </div>
  )
}

export default Contacts
