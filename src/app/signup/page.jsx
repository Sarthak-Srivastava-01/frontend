'use client';
import Button from '@/components/Button'
import TextInput from '@/components/Input'
import axios from 'axios';
import { useFormik } from 'formik'
import React from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup'

const signupSchema = Yup.object().shape({
  name : Yup.string().required('Name is Required').min(3, 'Name must be at least 3 characters'),
  email : Yup.string().required('Email is required').email('Email is invalid'),
  password : Yup.string().required('Password is required')
    .min(5, 'Password must be at least 5 characters')
    .matches(/[A-Z]/,'Password must contain an uppercase letter')
    .matches(/[a-z]/,'Password must contain an lowercase letter')
    .matches(/[0-9]/,'Password must contain a number')
    .matches(/[\W]/,'Password must contain a special character'),
  confirmPassword : Yup.string().required('Confirm Password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const Signup = () => {

  const signupForm = useFormik({
    initialValues : {
      name : '',
      email : '',
      password : '',
      confirmPassword : ''
    },
    onSubmit: (values) => {
      console.log(values);
      // Send values to backend

      axios.post('http://localhost:5000/user/add', values)
      .then((result) => {
        console.log(result);
        toast.success('User Registered Successfully')
      }).catch((err) => {
        console.log(err);
        console.log(err?.response?.status);
        toast.error('Something Went Wrong')
      });
    },
    validationSchema : signupSchema
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
          {
            (signupForm.touched.name && signupForm.errors.name) && (
              <p className='text-red-500 mb-5 text-sm'>{signupForm.errors.name}</p>
            )
          }

          <label htmlFor="email">Email Address</label>
          <input type="email" id='email' onChange={signupForm.handleChange} value={signupForm.values.email}
            className='w-full p-2 border rounded-lg my-2 bg-gray-100'
          />
          {
            (signupForm.touched.email && signupForm.errors.email) && (
              <p className='text-red-500 mb-5 text-sm'>{signupForm.errors.email}</p>
            )
          }

          <label htmlFor="password">Password</label>
          <input type="password" id='password' onChange={signupForm.handleChange} value={signupForm.values.password}
            className='w-full p-2 border rounded-lg my-2 bg-gray-100'
          />
          {
            (signupForm.touched.password && signupForm.errors.password) && (
              <p className='text-red-500 mb-5 text-sm'>{signupForm.errors.password}</p>
            )
          }

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id='confirmPassword' onChange={signupForm.handleChange} value={signupForm.values.confirmPassword}
            className='w-full p-2 border rounded-lg my-2 bg-gray-100'
          />
          {
            (signupForm.touched.confirmPassword && signupForm.errors.confirmPassword) && (
              <p className='text-red-500 mb-5 text-sm'>{signupForm.errors.confirmPassword}</p>
            )
          }

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