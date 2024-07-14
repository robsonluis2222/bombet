import { useState } from 'react'
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar';
import "bootstrap-icons/font/bootstrap-icons.css";

import './App.css'

function App() {

  return (
    <>
      <div className='mobile-frame'>
        <Navbar />
        <Outlet />
      </div>
    </>
  )
}

export default App
