import Card from '@/components/Card'
import Navbar from '@/components/Navbar'
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

      <section className="py-16">
            <div className="text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                </div>
            </div>
      </section>

    </div>

  )
}

export default Home