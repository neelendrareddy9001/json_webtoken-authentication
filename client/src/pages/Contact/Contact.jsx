import React from 'react'
import { motion } from 'framer-motion'

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
      <div className='section-background'></div>
    </section>
  )
}

export default Blog
