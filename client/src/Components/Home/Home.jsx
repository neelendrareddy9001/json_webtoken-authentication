import React from "react";
import ImgPex from '../../images/pexel.jpg';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Home = () => {
  return (
    <section className='section-container min-h-[80vh]'>
      <div className='flex gap-12 items-center justify-between md:flex-col md:py-8'>
        <div>
          <h1  className="heading first-letter:text-2xl font-semibold text-lg py-4">This is about the nature</h1>
          <h4>Here you can see the visual representation of this project</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="btns flex gap-6 p-4">
            <button className='btn'>Read More</button>
            <button className="btn">Check Now</button>
          </div>
          <div className="social-icons flex items-center justify-center gap-5 py-14">
            <FaFacebookF className="icon" size={20}/>
            <FaLinkedin className="icon"/>
            <FaGooglePlusG className="icon"/>
            <FaGithub className="icon"/>
          </div>
        </div>
        <div className='mt-20'>
          <img src={ImgPex} alt="" className='w-[520px] h-[350px]'  />
        </div>
      </div>
    </section>
  );
};

export default Home;
