import React from 'react'
import { motion } from 'framer-motion'
import Contact_Bg from '../../images/contact-bg.jpg'

const Blog = () => {
  return (
    <section className='section-container'>
      <motion.h2
        initial={{ opacity: 0, translateY: '-100px' }}
        animate={{ opacity: 1, translateY: '0px' }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className=" text-center my-4 font-mono tracking-wide font-semibold text-2xl"
      >
        Contact
      </motion.h2>
      <div className='section-background flex justify-around gap-12 grid-md-cols-2'>
        <div className='bg-red-400'>
          <h1>Login</h1>
        </div>
        <div className='form p-8'>
          <h2>Sneat</h2>
          <p>Please sign-in to your account and start asking questions</p>
          <form action=''>
            <div className='input_container'>
              <label htmlFor='name'>Name</label>
              <input type='text' placeholder='Enter your name' id='name' value='' className='input_box' />
            </div>
            <div className='input_container'>
              <label htmlFor='email'>Email</label>
              <input type='email' placeholder='Enter your email' id='eamil' value='' className='input_box' />
            </div>
            <div className='input_container'>
              <label htmlFor='message'>Message</label>
              <textarea></textarea>
            </div>
            <button className='px-24 py-2 my-4 font-semibold tracking-widest rounded-xl shadow-md hover:bg-transparent bg-gradient-to-tr from-sky-400 to-green-400'>Sign In</button>
            <p>New on our platform <span><a href='/#'>Create an account</a></span></p>
            <p>Or</p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Blog
