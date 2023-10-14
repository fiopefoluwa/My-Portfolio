import React, { useState } from 'react'
import "./home.css"
// import {motion} from "framer-motion"
// import {TypeAnimation} from 'react-type-animation';



const Home = () => {

  return (
    <>
      <div id="home">
        <div className="img-respon">
          <img className="respon" src="../src/images/harmburger.jpg" alt="" />
          <img className="respon" src="../src/images/initials.jpg" alt="" />
        </div>
        <div className=" flex">
          <div className="">
            <img src="./src/images/universe.jpg" alt="" className="girl" />
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
