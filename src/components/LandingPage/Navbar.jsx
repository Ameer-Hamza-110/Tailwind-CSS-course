import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className='bg-gray-800 px-6 py-4 flex flex-wrap justify-between items-center sticky top-0 z-50'>
        <h1 className='text-2xl text-blue-400 font-bold'>SaaSlify</h1>
        <ul className='hidden md:flex space-x-6'>
          <li><Link to="/" className='hover:text-blue-400 duration-300'>Home</Link></li>
          <li><Link to="" className='hover:text-blue-400 duration-300'>Features</Link></li>
          <li><Link to="" className='hover:text-blue-400 duration-300'>Pricing</Link></li>
          <li><Link to="" className='hover:text-blue-400 duration-300'>Contact</Link></li>
        </ul>

        <button onClick={() => setIsOpen(!isOpen)} className='md:hidden'>
          {isOpen ? <X className='text-2xl text-white' /> : <Menu className='text-2xl text-white' />}
        </button>

        {isOpen && (
          <ul className='w-full flex flex-col space-y-4 mt-4 md:hidden'>
            <li><Link to="/" onClick={() => setIsOpen(false)} className='hover:text-blue-400 duration-300'>Home</Link></li>
            <li><Link to="" onClick={() => setIsOpen(false)} className='hover:text-blue-400 duration-300'>Features</Link></li>
            <li><Link to="" onClick={() => setIsOpen(false)} className='hover:text-blue-400 duration-300'>Pricing</Link></li>
            <li><Link to="" onClick={() => setIsOpen(false)} className='hover:text-blue-400 duration-300'>Contact</Link></li>
          </ul>
        )}
      </nav>
    </>
  )
}

export default Navbar
