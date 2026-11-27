import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Basics from './components/Basics'
import Project1 from './components/Project1_Pricing_Card'
import Navbar from './components/Project2_Navbar'
import Project2 from './components/Project3_Flexbox'
import Project3 from './components/Project4_Grid_Image_Gallery'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Basics />} path='/basics' />
        <Route element={<Project1 />} path='/project1' />
        <Route element={<Project2 />} path='/project2' />
        <Route element={<Project3 />} path='/project3' />
      </Routes>
    </>
  )
}

export default App
