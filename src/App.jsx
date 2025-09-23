import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Homelayout from './Components/HomeLayout/Homelayout'
import AboutMe from './Components/AboutMe/AboutMe'
// import Testimonials from './Components/Testimonials/Testimonials'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homelayout/>}/>
        <Route path='/about' element={<AboutMe/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
