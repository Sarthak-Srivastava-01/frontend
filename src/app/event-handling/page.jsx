'use client'; // Use 'use client' for funtions which can be performed only on client side / browser like event funtions
import React from 'react'

const EventHandling = () => {

    const previewImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (output) => {
            const img = new Image();
            img.src = output.target.result;
            document.body.appendChild(img);
        }
        reader.readAsDataURL(file);
    }

  return (
    <div className='max-w-2xl mx-auto mb-10 text-center' onMouseMove={ (e) => { console.log(e.clientX, e.clientY, e.movementX, e.movementY); } }>
        <h1 className='text-3xl font-bold mt-5'>EventHandling</h1>

        <button className='bg-black text-white p-3 rounded mt-4' 
            onClick={ () => { alert('Button was Clicked') } }>
                Click Me
        </button>

        <input type="text" 
            className='w-full border py-1 px-3 roundeed mt-4' 
            onChange={(e) => {console.log(e.target.value)}
            }
        />

        <input type="color" className='mt-5'
            onChange={(e) => { document.body.style.backgroundColor = e.target.value }}
        />

        <input type="file" className='block mt-5' multiple
            onChange={(e) => { console.log(e.target.files) }}
        />

        <input type="file" className='block mt-5'
            onChange={previewImage}
        />

        <input type="text"
            className='py-1 px-3 rounded mt-5 bg-gray-200'
            onKeyDown={(e) => {
                console.log(e.code);
            }}
        />

    </div>
  )
}

export default EventHandling