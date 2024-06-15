import React from "react";
import ImgPex from '../../images/pexel.jpg';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Home = () => {
  return (
    <section className="section-container px-24">
      <div className='container-body flex justify-between items-center pt-28 md:flex-col'>
        <div className="home-left relative">
          <h1  className="heading first-letter:text-2xl font-semibold text-lg py-4">This is about the nature</h1>
          <h4>Here you can see the visual representation of this project</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="btns flex gap-6 p-4">
            <button className='btn'>Read More</button>
            <button className="btn">Check Now</button>
          </div>
          <div className="social-icons flex py-14 absolute left-36">
            <FaFacebookF className="icon"/>
            <FaLinkedin className="icon"/>
            <FaGooglePlusG className="icon"/>
            <FaGithub className="icon"/>
          </div>
        </div>
        <div className="img-container">
          <img src={ImgPex} alt="" className='rounded-xl hover:scale-50 duration-500 transition-all hover:grayscale saturate-100' />
        </div>
      </div>
    </section>
  );
};

export default Home;
