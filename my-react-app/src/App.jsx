import React, { useState } from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from "./pages/home/home"
import Navbar from "./components/Navbar/Navbar"
import Services from "./pages/services/services"
import Skills from "./pages/skills/skills"
import Portfolio from "./pages/portfolio/portfolio"
import github from './images/icons8-github-64.png'
import PreLoader from "./components/PreLoader/PreLoader"


function App() {
  return (
    <>
    <PreLoader/>
      <div className="entire">
          <Navbar/>
        <div>
            <Home/>
            <Services/>
            <Skills/>
            <Portfolio/>  
            <p className="text-center border-t w-100%">♥Everything is possible through Christ♥</p>
            <div className="flex justify-center">
            <a href="https://github.com/fiopefoluwa">
                    <img className="bg-[palegreen] w-8" src={github} alt="" />
                  </a>
            <p className="text-center border-t w-100%">@{new Date().getFullYear()}CodeInn.All right reserved.</p>
            </div>

        </div>
      </div>
    </>
  );
}

export default App
