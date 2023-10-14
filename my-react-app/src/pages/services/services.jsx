import React from 'react'
import "./services.css"
import { Link}  from 'react-scroll'


const Services = () => {

  return (
    <div id="services">
      <div className="all relative">
        <div className="head ">
          <h1 className="text  text-pink-400 border-pink-400">Services</h1>
        </div>
        <div className="context">
          <div className="head">
            <p>
              As a FrontEnd Developer, I went to get equipped so I could <br />
              satisfy you and make your dream website come to a reality.
            </p>
          </div>
          <div className="explan">
            <p>
              Generally, a Frontend Developer is the mind behind the first thing
              you see when <br />
              you interact with a website. <br />
              Professionally, A front-end web developer is responsible for
              implementing visual elements that <br />
              users see and interact with in a web application. <br />
              With HTML, JavaScript and CSS, we bring concepts to life.
              Developing and maintaining <br /> the user interface. Implementing
              design on mobile websites. <br />
              Creating tools that improve site interaction regardless of the
              browser.
            </p>
          </div>
        </div>
        <div className="box flex text-center justify-between underline cursor-pointer text-pink-400 border-pink-400">
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            My Portfolio
          </Link>
          <p>Download My CV</p>
        </div>
      </div>
    </div>
  );
}

export default  Services
