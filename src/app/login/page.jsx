import React from 'react'
import classes from './login.module.css'

const Login = () => {
  return (
    <div className='text-center'>

        <h1 className='text-3xl text-center mt-5'>Login</h1>
        
        <button className='btn mt-3'>Submit</button>

        <button className={classes.loginBtn}>Login Button</button>
    </div>
  )
}

export default Login;