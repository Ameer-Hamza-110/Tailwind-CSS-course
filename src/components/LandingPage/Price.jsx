import React from 'react'

const Price = () => {
  return (
    <section className='py-12 px-6 bg-gray-900'>
      <h2 className='text-center text-3xl font-semibold text-white mb-10'>Pricing Plans</h2>
      <div className='grid md:grid-cols-3 gap-6'>

        <div className='bg-gray-800 p-6 rounded-lg shadow-md text-center'>
          <h3 className='text-xl font-bold mb-2 text-white'>Basic</h3>
          <h1 className='text-2xl font-semibold mb-4 text-blue-400'>$19/mo</h1>
          <ul className='text-sm text-gray-300 space-y-2 mb-4'>
            <li>✅ 1 Project</li>
            <li>✅ Basic Support</li>
          </ul>
          <button className='bg-blue-600 py-2 px-4 rounded text-white'>Choose Plan</button>
        </div>

        <div className='bg-gray-800 p-6 rounded-lg shadow-md text-center'>
          <h3 className='text-xl font-bold mb-2 text-white'>Pro</h3>
          <h1 className='text-2xl font-semibold mb-4 text-blue-400'>$49/mo</h1>
          <ul className='text-sm text-gray-300 space-y-2 mb-4'>
            <li>✅ 10 Project</li>
            <li>✅ Priority Support</li>
          </ul>
          <button className='bg-blue-600 py-2 px-4 rounded text-white'>Choose Plan</button>
        </div>

        <div className='bg-gray-800 p-6 rounded-lg shadow-md text-center'>
          <h3 className='text-xl font-bold mb-2 text-white'>Enterprise</h3>
          <h1 className='text-2xl font-semibold mb-4 text-blue-400'>$99/mo</h1>
          <ul className='text-sm text-gray-300 space-y-2 mb-4'>
            <li>✅ unlimited Project</li>
            <li>✅ 24/7 Support</li>
          </ul>
          <button className='bg-blue-600 py-2 px-4 rounded text-white'>Choose Plan</button>
        </div>

      </div>

    </section>
  )
}

export default Price
