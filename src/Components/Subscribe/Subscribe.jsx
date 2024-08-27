import React from 'react'

const Subscribe = () => {
  return (
    <div className='mb-20 bg-slate-600 dark:bg-slate-800 text-white' data-aos='zoom-in'>
      <div className='container backdrop-blur-sm py-10'>
        <div className='space-y-6 max-w-xl mx-auto'>
            <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-semibold'>Get Notified About New Products</h1>
            <input type="email" data-aos='fade-up' placeholder='Enter your Email' className='w-full p-3 text-black'/>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
