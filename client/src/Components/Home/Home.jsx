import React from "react";
import ImgPex from '../../images/pexel.jpg';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {motion} from 'framer-motion'


const Home = () => {
  return (
    <section className='section-container mx-auto home min-h-[70vh] py-24'>
      <div className='flex gap-12 items-center justify-between mdd:flex-col'>
        <div className='sm:text-center'>
          <motion.h1 
            initial={{ opacity: 0, translateX: '-200px' }}
            animate={{ opacity: 1, translateX: '0px' }}
            transition={{
              duration: 0.4,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="heading first-letter:text-2xl font-semibold text-lg py-4">This is about the nature</motion.h1>
          <motion.h4
            initial={{ opacity: 0, translateX: '-200px' }}
            animate={{ opacity: 1, translateX: '0px' }}
            transition={{
              duration: 0.8,
              delay: 0.7,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >Here you can see the visual representation of this project</motion.h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="btns flex py-12 gap-6 p-4 sm:flex-col sm:gap-3">
            <button className='btn shadow-md'>Read More</button>
            <button className="btn shadow-md">Check Now</button>
          </div>
          <div className="social-icons flex items-center justify-center gap-5 py-14">
            <FaFacebookF className='icon' size={20}/>
            <FaLinkedin className="icon"/>
            <FaGooglePlusG className="icon"/>
            <FaGithub className="icon"/>
          </div>
        </div>
         <div className='py-20'>
          <img src={ImgPex} alt="" className='w-[520px] h-[350px]'  />
        </div>
      </div>
    </section>
  );
};

export default Home;
