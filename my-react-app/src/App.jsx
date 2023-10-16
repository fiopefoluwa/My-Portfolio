import React, { useState } from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from "./pages/home/home"
import Navbar from "./components/Navbar/Navbar"
import Services from "./pages/services/services"
import Skills from "./pages/skills/skills"
import Contacts from "./pages/contacts/Contacts"
import About from "./pages/about/about"
import Portfolio from "./pages/portfolio/portfolio"
import Footer from "./components/Footer/footer"
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
            <About/>
            <Skills/>
            <Contacts/>
            <Portfolio/>
            <Footer/>
        </div>
      </div>
    </>
  );
}

export default App
