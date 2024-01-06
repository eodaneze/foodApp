import React from 'react'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Contact from './pages/Contact'
import Menu from './pages/Menu'
import Service from './pages/Service'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <div>
       <BrowserRouter>
         <Routes>
            <Route path='/' element={<Homepage />}/>
            <Route path='/menu' element={<Menu />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/service' element={<Service />}/>
            <Route path='/contact' element={<Contact />}/>
         </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App