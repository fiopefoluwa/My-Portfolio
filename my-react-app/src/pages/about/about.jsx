import React from 'react'
import "./about.css"
import signature from '../../images/signature.png';

const About = () => {
  return (
    <div id='about'>
        <div>
            <div className='about'>
              
            </div>
            <div className='flex'>
                <div className='little'>
                </div>
                <div className='info w-[90%]'>
                    <p className='signature'>K♥n♥o♥w M♥o♥r♥e♥</p>
                    <div className='tixt'>
                        <p>Hi, my name is Orekoya Fiopefoluwa. I am a Frontend Developer.</p>
                        <p>
                            Well, I got a passion for technology when I saw my uncle working from home and the way he interacted with 
                            the codes and his colleagues and also the opportunities and lets not forget the money...So, I decided to also give it a try 
                            and I got to find out that I really loved the sound of being a web developer and a FrontEnd Developer at large. So, that is why this young,pretty,focused Nigerian,yoruba girl 
                            is going to solve problems with technology and make my field extremely proud. 
                        </p>
                        <img src={signature} alt="" className='tt' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
