import React from 'react'

const Project4 = () => {
  return (
    <main className='bg-gray-100 flex items-center justify-center min-h-screen px-4'>
      <form className='bg-white p-8 shadow-md w-full max-w-lg rounded-lg space-y-6'>

        <h2 className='text-2xl text-center font-bold text-gray-800'>Contact Form</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <input type="text" placeholder='First name' className='border focus:outline-none focus:ring-1 focus:ring-blue-400 border-gray-400 rounded-md px-4 p-2' />
          <input type="text" placeholder='Last name' className='border focus:outline-none focus:ring-1 focus:ring-blue-400 border-gray-400 rounded-md px-4 p-2' />
        </div>

        <input type="email" placeholder='Your email' className='w-full border  focus:outline-none focus:ring-1 focus:ring-blue-400 border-gray-400 rounded-md px-4 p-2' />

        <textarea rows={5} placeholder='Enter your message' className='w-full border focus:outline-none focus:ring-1 focus:ring-blue-400 border-gray-400 rounded-md px-4 p-2'></textarea>

        <label className='inline-flex items-center space-x-2'>
          <input type="checkbox" className='form-checkbox text-blue-500 w-5 h-5' />
          <span className='text-gray-700 text-sm'>I agree terms & conditions</span>
        </label>

        <button type='submit' className='bg-blue-600 text-white w-full py-2 px-4 rounded-md '>Submit</button>

      </form>
    </main>
  )
}

export default Project4
