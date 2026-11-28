import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='p-6 mt-12 bg-gray-900 text-white'>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div>
          <h3 className="font-bold text-xl mb-2">SaaSly</h3>
          <p className="text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Links</h4>
          <ul className="space-y-1 text-gray-300">
            <li><Link to="/project5">Home</Link></li>
            <li><Link to="/project5">Pricing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <ul className="flex justify-center  space-x-4">
            <li><Link to="/project5">🐦</Link></li>
            <li><Link to="/project5">📘</Link></li>
            <li><Link to="/project5">📸</Link></li>
          </ul>
        </div>

      </div>
    </footer>
  )
}

export default Footer
