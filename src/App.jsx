import React from 'react'
import Navbar from './components/Navbar.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/Register" element={<Register/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
    </Routes>
      
    </>
  )
}
