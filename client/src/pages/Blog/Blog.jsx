import React from "react";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <section className="section-container w-full">
      <motion.h2
        initial={{ opacity: 0, translateX: '-200px' }}
        animate={{ opacity: 1, translateX: '0px' }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className=" text-center my-4 font-mono tracking-wide font-semibold text-2xl"
      >
        Blog
      </motion.h2>
      <div className="">
        <div className='flex justify-around'>
          {/* image section */}
          <div className=' bg-sky-500 w-1/2'>
            <h2>Catelog</h2>
          </div>
          {/* content section */}
          <div className='grid grid-cols-2'>
            <div className='bg-red-500 item'>React</div>
            <div className='bg-blue-400 item'>Javascript</div>
            <div className='bg-green-500 item'>Bootstrap</div>
            <div className='bg-yellow-400 item'>Html & Css</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
