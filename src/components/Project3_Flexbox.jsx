import React from 'react'

const Project2 = () => {
    return (
        <main className='flex flex-wrap bg-gray-100  gap-6 p-6 justify-center items-center min-h-screen'>
            <div className='bg-white shadow-md p-8 flex flex-col  rounded-lg w-64'>
                <h1 className='mb-2 text-xl text-center font-bold text-red-500'>Card1</h1>
                <p className='text-center text-gray-600 text-[15px]'>This is card 1 text: Lorem, ipsum dolor.</p>
            </div>
            <div className='bg-white shadow-md p-8 flex flex-col  rounded-lg w-64'>
                <h1 className='mb-2 text-xl text-center font-bold text-emerald-500'>Card2</h1>
                <p className='text-center text-gray-600 text-[15px]'>This is card 2 text: Lorem, ipsum dolor.</p>
            </div>
            <div className='bg-white shadow-md p-8 flex flex-col  rounded-lg w-64'>
                <h1 className='mb-2 text-xl text-center font-bold text-blue-500'>Card3</h1>
                <p className='text-center text-gray-600 text-[15px]'>This is card 3 text: Lorem, ipsum dolor.</p>
            </div>
        </main>
    )
}

export default Project2
