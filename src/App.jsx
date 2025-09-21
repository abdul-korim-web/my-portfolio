import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Hero from './Components/Hero Section/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar/>
      <Hero/>
    </BrowserRouter>
  )
}

export default App
