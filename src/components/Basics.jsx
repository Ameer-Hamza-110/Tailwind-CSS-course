import React from 'react'

const Basics = () => {
    return (
        <main className='m-5 p-4'>
            <h1 className='bg-emerald-400 m-5 p-3'>Hello World</h1>
            <h1 className='bg-yellow-400 m-5 p-3'>Hi World</h1>

            <h1 className='bg-white m-5 p-1 text-indigo-600 text-xl font-bold font-serif'>This is a H1 Text</h1>


            <p className='bg-blue-500 text-yellow-300 p-4 m-4 tracking-tighter'>Lorem ipsum dolor sit amet.</p>


            <p className='bg-white text-violet-800 p-4 m-4 leading-loose rounded shadow-2xl border-2 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quas sint rerum et, consectetur non dicta quia est! Atque tempora ut vitae beatae tempore quaerat aut dolorem at fugit reprehenderit?</p>


            <p className='bg-white text-purple-800 p-4 m-4 leading-loose rounded shadow-2xl border-2 border-red-800 text-center uppercase font-bold font-mono'>Lorem, ipsum dolor.</p>


            <h1 className='bg-blue-800 p-4 text-white sm:p-5 md:p-6 lg:p-7 sm:bg-red-600 md:bg-emerald-600 lg:bg-violet-700 md:hidden  '>This is responsive text</h1>


            {/* Responsive grid system with parent-child grid control or 12 column grid */}
            <div class="grid grid-cols-12 gap-4">
                <div class="lg:col-span-3 md:col-span-6 col-span-12   p-4 m-4 bg-blue-300">Column 1</div>
                <div class="lg:col-span-3 md:col-span-6 col-span-12   p-4 m-4 bg-blue-500">Column 2</div>
                <div class="lg:col-span-3 md:col-span-6 col-span-12   p-4 m-4 bg-yellow-500">Column 3</div>
                <div class="lg:col-span-3 md:col-span-6 col-span-12   p-4 m-4 bg-red-500">Column 4</div>
            </div>
        </main>
    )
}

export default Basics
