import React from 'react'
import { Routes, Route } from "react-router-dom";

import Navbar from './Navbar'
import Header from './Header'
import Homeairbine from './Homeairbine'
import The_Challenge from './The_Challenge'
import Talk from './Talk'



const Main = () => {
  return (
    <div>
      <Navbar/>
      <Header/>

      <Routes>
      {/* <Route path="/Homeairbine" element={<Homeairbine/>} /> */}
      {/* <Route path="/Challenge" element={<The_Challenge/>} /> */}
      </Routes>
      <Homeairbine/>
      <The_Challenge/>
      <Talk/>


    </div>
  )
}

export default Main
