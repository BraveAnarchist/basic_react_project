import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from "./components/Nav"
import Hero from './components/Hero'
import Contact from './components/Contact'
import Testimony from './components/Testimony'
import Footer from './components/Footer'

function App(){

  return (
    <>
      <Nav/>
      <Hero></Hero>
      <Contact/>
      <Testimony/>
      <Footer/>
    </>
  )
}
export default  App;