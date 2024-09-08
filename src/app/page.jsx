import Card from '@/components/Card'
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1 className='text-3xl text-center mt-5'>My Home Page</h1>

      <p style={{color: 'blue', fontSize: 30, textAlign: 'center'}}>Welcome To Home</p>

      <label htmlFor="">Some Label</label>

      <input type="text" /> {/* Unpaired tags should have  / in the end */}
      <hr />
      <br />

      <button className='btn'>Submit</button>
      <button className='loginBtn'>Login Button</button>

      <Card></Card>

    </div>

  )
}

export default Home