import { Menu } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className='bg-gray-800 px-6 py-4 flex justify-between items-center sticky top-0 z-50'>
        <h1 className='text-2xl text-blue-400 font-bold'>SaaSlify</h1>
        <ul className='hidden md:flex space-x-6'>
          <li><Link to="/" className='hover:text-blue-400 duration-300'>Home</Link></li>
          <li><Link to="" className='hover:text-blue-400 duration-300'>Features</Link></li>
          <li><Link to="" className='hover:text-blue-400 duration-300'>Pricing</Link></li>
          <li><Link to="" className='hover:text-blue-400 duration-300'>Contact</Link></li>
        </ul>

        <Menu className='text-2xl text-white md:hidden' />
      </nav>
      
    </>
  )
}

export default Navbar
