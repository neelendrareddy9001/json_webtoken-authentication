import React from 'react'
import { motion } from 'framer-motion'

const Testimoial = () => {
  return (
    <section className='section-container'>
      <motion.h2
        initial={{ opacity: 0, translateX: '200px' }}
        animate={{ opacity: 1, translateX: '0px' }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className=" text-center my-4 font-mono tracking-wide font-semibold text-2xl"
      >
        Testimonial
      </motion.h2>
      <div className='testimonial-container flex justify-center gap-32 my-10 flex-wrap md:'>
        <div className='item'>1</div>
        <div className='item'>2</div>
        <div className='item'>3</div>
        <div className='item'>4</div>
        <div className='item'>3</div>
        <div className='item'>4</div>
      </div>
    </section>
  )
}

export default Testimoial