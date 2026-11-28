import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Basics from './components/Basics'
import Project1 from './components/Project1_Pricing_Card'
import Navbar from './components/Project2_Navbar'
import Project2 from './components/Project3_Flexbox'
import Project3 from './components/Project4_Grid_Image_Gallery'
import Project4 from './components/Project5_Form'
import Project5 from './components/Project6_LandingPage'
import { MainLayout } from './layout/Layout'

const App = () => {
  return (
    <>

      <Routes>

        <Route element={<MainLayout />}>
          <Route path='/' element={<Basics />} />
          <Route path='/project1' element={<Project1 />} />
          <Route path='/project2' element={<Project2 />} />
          <Route path='/project3' element={<Project3 />} />
          <Route path='/project4' element={<Project4 />} />
        </Route>

        <Route path='/project5' element={<Project5 />} />
      </Routes>
    </>
  )
}

export default App
