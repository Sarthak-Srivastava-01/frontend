'use client';
import Button from '@/components/Button'
import TextInput from '@/components/Input'
import { useFormik } from 'formik'
import React from 'react'

const Signup = () => {

  const signupForm = useFormik({
    initialValues : {
      name : '',
      email : '',
      password : ''
    },
    onSubmit: (values) => {
      console.log(values);
      // Send values to backend
    }
  })

  return (
    <div>
      <h1 className='text-2xl font-bold uppercase my-10 text-center'>Signup Page</h1>
      <div className='max-w-lg mx-auto rounded-lg shadow-lg mt-10 p-10'>
        <form onSubmit={signupForm.handleSubmit}>

          <label htmlFor="name">Name</label>
          <input type="text" id='name' onChange={signupForm.handleChange} value={signupForm.values.name}
            className='w-full p-2 border rounded-lg my-2 bg-gray-100'
          />

          <label htmlFor="email">Email Address</label>
          <input type="email" id='email' onChange={signupForm.handleChange} value={signupForm.values.email}
            className='w-full p-2 border rounded-lg my-2 bg-gray-100'
          />
          <label htmlFor="password">Password</label>
          <input type="password" id='password' onChange={signupForm.handleChange} value={signupForm.values.password}
            className='w-full p-2 border rounded-lg my-2 bg-gray-100'
          />

          <button
            type='submit'
            className='bg-black mt-6 px-3 py-2 rounded text-white font-bold w-full'>Submit</button>

        </form>
      </div>

      {/* <Button>My Button</Button>
      <Button>Submit</Button>
      <Button>Know More</Button>

      <TextInput id='name' label='Name' type='text' placeholder='Enter your name' />
      <TextInput id='email' label='Email' type='email' placeholder='Enter your email' />
      <TextInput id='password' label='Password' type='password' placeholder='Enter your password' /> */}
    </div>
  )
}

export default Signup