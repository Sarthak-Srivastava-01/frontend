'use client';
import React from 'react'
// import classes from './login.module.css'
import Input from '@/components/Input';
import Button from '@/components/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';
import toast from 'react-hot-toast';

const loginSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Email is invalid'),
  password: Yup.string().required('Password is required').min(5, 'Password must be at least 5 characters')
})

const Login = () => {
  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      console.log(values);
      axios.post('http://localhost:5000/user/authenticate', values)
        .then((result) => {
          console.log(result.data);
          localStorage.setItem('token', result.data.token);
          toast.success('Login Successful')
        }).catch((err) => {
          console.log(err);
          console.log(err?.response?.status);          
          toast.error('Login Failed')
        });
    },
    validationSchema: loginSchema
  })

  return (
    <div className='flex items-center justify-center'>

      <div className="w-full md:w-1/2 lg:w-1/3 my-7 bg-white border border-gray-400 rounded-xl shadow-sm">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800">Sign in</h1>
            <p className="mt-2 text-sm text-gray-600">
              Don't have an account yet?
              <a
                className="ml-2 text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium"
                href="/signup"
              >
                Sign up here
              </a>
            </p>
          </div>
          <div className="mt-5">
            {/* Form */}
            <form onSubmit={loginForm.handleSubmit}>
              <div className="grid gap-y-4">
                {/* Form Group */}
                <div>
                  <label htmlFor="email" className="block text-sm mb-2">
                    Email address
                  </label>
                  <div className="relative">
                    <input type="email" id='email' onChange={loginForm.handleChange} value={loginForm.values.email}
                      className='w-full p-2 border rounded-lg my-2 bg-gray-100'
                    />
                    {
                      (loginForm.touched.email && loginForm.errors.email) && (
                        <p className='text-red-500 mb-5 text-sm'>{loginForm.errors.email}</p>
                      )
                    }
                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg
                        className="size-5 text-red-500"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  <p className="hidden text-xs text-red-600 mt-2" id="email-error">
                    Please include a valid email address so we can get back to you
                  </p>
                </div>
                {/* End Form Group */}
                {/* Form Group */}
                <div>
                  <div className="flex justify-between items-center">
                    <label htmlFor="password" className="block text-sm mb-2">
                      Password
                    </label>
                    <a
                      className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium"
                      href="/forgot-password"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <input type="password" id='password' onChange={loginForm.handleChange} value={loginForm.values.password}
                      className='w-full p-2 border rounded-lg my-2 bg-gray-100'
                    />
                    {
                      (loginForm.touched.password && loginForm.errors.password) && (
                        <p className='text-red-500 mb-5 text-sm'>{loginForm.errors.password}</p>
                      )
                    }
                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg
                        className="size-5 text-red-500"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  <p className="hidden text-xs text-red-600 mt-2" id="password-error">
                    8+ characters required
                  </p>
                </div>
                {/* End Form Group */}
                {/* Checkbox */}
                <div className="flex items-center">
                  <div className="flex">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500"
                    />
                  </div>
                  <div className="ms-3">
                    <label htmlFor="remember-me" className="text-sm">
                      Remember me
                    </label>
                  </div>
                </div>
                {/* End Checkbox */}
                <button
                  type='submit'
                  className='bg-black px-3 py-2 rounded text-white font-bold w-full'>Submit</button>
              </div>
            </form>
            {/* End Form */}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login;