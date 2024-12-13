import { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/hero'
import './App.css'

function App() {


  return (
    <>
      <div className="page">
        <div className="side">
          <Navbar></Navbar>
        </div>
        <div className="main">
          <Hero></Hero>
        </div>
      </div>

    </>
  )
}

export default App
