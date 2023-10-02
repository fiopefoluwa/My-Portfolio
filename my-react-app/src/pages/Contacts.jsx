import React from 'react'
import { Link } from 'react-router-dom'
import "./contacts.css"

const Contacts = () => {
  return (
    <div>
        <p className='contact'>CONTACT INFO
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, asperiores. Eligendi, praesentium accusantium ducimus itaque facere earum laborum necessitatibus? Repellat accusantium inventore ullam totam blanditiis. Blanditiis dolor iusto modi corporis architecto, laborum nisi, minus recusandae, saepe animi quam! Quis, ut. Porro corrupti ex molestiae autem necessitatibus harum suscipit rerum saepe.</p>
        <p className='contacts'>EMAIL</p>
         <p className='subcontacts'>iamfope2006@gmail.com</p>
        <p className='contacts'>PHONE</p>
        <p className='subcontacts'>(+234)-8122544234</p>
        <p className='contacts'>ADDRESS  </p>
        <p className='subcontacts'>NITDA Ict Hub, LAGOS</p>
        <div className='p-6'>
            <fieldset className='bg-black p-2'>
                    <legend className='bg-black text-white p-6'>
                        <div className='socials'>
                            <p className='overline'>Feedback.</p>
                        </div>  
                    </legend>
                    <p className='text-white'>
                        <form action="">
                            <label htmlFor="name">Your Name : </label> <br />
                            <input type="text"  className='p-2 text-black'/> <br />
                            <label htmlFor="name" >Your Email : </label> <br />
                            <input type="email" className='p-2 text-black' /> <br />
                            <label htmlFor="name">Your Message : </label> <br />
                            <input type="text" className='p-6 text-black' /> 
                            <button className='button'>
                            <button type='btn' id='btn'>Send Message</button>
                            </button>
                        </form>
                    
                    </p>
                </fieldset>
         </div>
        <Link to='/'>meee</Link>

    </div>
  )
}

export default Contacts
