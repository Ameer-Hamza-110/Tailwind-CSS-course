import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from "lucide-react"

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setIsOpen(false)
    }, [])
    return (
        <nav className='bg-gray-100 px-6 py-4 shadow-md'>
            <div className='max-w-7xl mx-auto flex justify-between items-center '>
                {/* Desktop Menu */}
                <div className='text-2xl font-bold text-emerald-500'>Brand</div>


                <ul className='hidden md:flex gap-6 text-gray-600 font-bold'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/basics'>Basics</Link></li>
                    <li><Link to='/project1'>Project1</Link></li>
                    <li><Link to='/project2'>Project2</Link></li>
                    <li><Link to='/project3'>Project3</Link></li>
                    <li><Link to='/project4'>Project4</Link></li>
                </ul>

                <Menu className='text-emerald-500 cursor-pointer md:hidden' onClick={() => setIsOpen(!isOpen)} />
            </div>

            <ul className={`${isOpen ? "flex" : "hidden"} md:hidden flex-col gap-6 justify-around text-blue-500 font-medium`}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/basics'>Basics</Link></li>
                <li><Link to='/project1'>Project1</Link></li>
                <li><Link to='/project2'>Project2</Link></li>
                <li><Link to='/project3'>Project3</Link></li>
                <li><Link to='/project4'>Project4</Link></li>
            </ul>



        </nav>
    )
}

export default Navbar
