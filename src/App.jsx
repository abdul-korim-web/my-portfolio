import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Hero from './Components/Hero Section/Hero'
import About from "./Components/About Section/About"
import Skills from "./Components/Skills/Skills"
import Projects from "./Components/Projects/Projects"

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
    </BrowserRouter>
  )
}

export default App
