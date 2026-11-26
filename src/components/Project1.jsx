import React from 'react'

const Project1 = () => {
    return (
        <div className=' rounded-xl shadow-lg p-8 bg-white max-w-sm text-center border border-gray-200'>
            <h2 className='text-2xl text-gray-800 font-bold tracking-wide mb-2'>Pro plan</h2>

            <p className=' text-gray-500 leading-relaxed mb-4'>Ideal fpr developers and startuos who want power and perfomance</p>

            <div className='text-4xl font-bold text-blue-600  mb-6'>
              $5<span className='text-sm text-gray-500'>/mo</span>
            </div>

            <ul className='text-left text-gray-700 space-y-2 mb-6'>
                <li>✅ Unlimited projects</li>
                <li>✅ 100 GB Storage</li>
                <li>✅ Priority support</li>
            </ul>

            <button className='bg-blue-600 text-white py-2 px-6 rounded-lg transition duration-300 hover:bg-blue-700 cursor-pointer'>Get Started</button>
        </div>
    )
}

export default Project1
