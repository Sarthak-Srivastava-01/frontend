import React from 'react'

const NotFound = () => {
  return (
    <div className='flex items-center justify-center'>
        <div className='text-center'>
            <img className='block w-9/12 mx-auto' src="/not-found-page.png" alt="" />
            <div className='mb-8'>
                <a href="/" className='rounded-full bg-black text-white p-4'>Find Home Here</a>
            </div>
        </div>
    </div>
  )
}

export default NotFound