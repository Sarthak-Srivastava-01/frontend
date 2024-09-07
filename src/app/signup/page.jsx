import Button from '@/components/Button'
import Input from '@/components/Input'
import React from 'react'

const SignUp = () => {
  return (
    <div>
        <h1 className='text-3xl text-center mt-5'>Sign Up</h1>

        <label htmlFor="full_name">Full Name</label>
        <Input type='text' placeholder='John Doe'/><br />
        
        <label htmlFor="email">Email</label>
        <Input type='email' placeholder='john@doe.com'/><br />
        
        <label htmlFor="contact">Contact</label>
        <Input type='number' placeholder='1234567890'/><br />
        
        <Button>Submit</Button>
        
        <Button>Don't</Button>
    </div>
  )
}

export default SignUp