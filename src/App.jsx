import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Homelayout from './Components/HomeLayout/Homelayout'
import AboutMe from './Components/AboutMe/AboutMe'
import Pricing from './Components/Pricing/Pricing'
// import Testimonials from './Components/Testimonials/Testimonials'
import NavSkills from "./Components/NavSkills/NavSkills"
import NavProjects from './Components/NavProjects/NavProjects'
import NavContact from './Components/NavContact/NavContact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homelayout/>}/>
        <Route path='/about' element={<AboutMe/>}/>
        <Route path='/Pricing' element={<Pricing/>}/>
        <Route path='/Skills' element={<NavSkills/>}/>
        <Route path='/Projects' element={<NavProjects/>}/>
        <Route path='/Contact' element={<NavContact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
