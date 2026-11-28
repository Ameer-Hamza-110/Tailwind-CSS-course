import React from 'react'

const HeroSection = () => {
  return (
    <section className='bg-gray-900 container mx-auto py-12 px-6 flex flex-col md:flex-row items-center justify-center gap-8'>

      <div className='md:w-1/2 space-y-4 text-center md:text-left'>
        <h2 className='text-white font-bold text-4xl'>Build your SaaS website faster</h2>
        <p className='text-gray-400 text-sm'>Tailwind CSS lets you build modern, responsive designs without writing custom CSS.</p>
        <button className='bg-blue-400 py-2 px-6 text-white rounded-md'>Get Started</button>
      </div>

      <div className='md:w-1/2'>
        <img src="https://images.unsplash.com/photo-1671016233693-53162078ca1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" className='rounded-lg shadow-md '  alt="" />
      </div>
    </section>
  )
}

export default HeroSection
