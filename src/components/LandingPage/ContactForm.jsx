import React from 'react'

const ContactForm = () => {
    return (
        <section className='py-12 px-6 bg-gray-800'>
            <h2 className='text-center text-3xl font-bold text-white mb-6'>Contact Form</h2>
            <form className='bg-gray-900 p-6 shadow max-w-2xl mx-auto rounded space-y-4'>


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
        </section>
    )
}

export default ContactForm
