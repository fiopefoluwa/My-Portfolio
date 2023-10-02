import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from "./components/Navbar"
import Portfolio from "./pages/portfolio"
import Services from "./pages/services"
import Skills from "./pages/skills"
import Contacts from "./pages/Contacts"

function App() {

  return (
    <div className="entire">
    <Navbar/>
    <Routes>
      <Route path='/' element={<Portfolio/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='contacts' element={<Contacts/>}/>
    </Routes>
   </div>
  );
}

export default App
