import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import RouteOne from './pages/RouteOne'
import RouteTwo from './pages/RouteTwo'

function App() {
  return (
    <div className="">
      <Nav />
      <Routes >
        <Route path='/' element={<RouteOne />} />
        <Route path='/routeTwo' element={<RouteTwo />} />
      </Routes>
    </div>
  )
}

export default App
