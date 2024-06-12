import React from "react";
import ImgPex from '../../images/pexel.jpg';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <section className="section-container">
      <div className='container-body p-3'>
        <div className="home-left">
          <h1 className="heading">This is about the nature</h1>
          <h4>Here you can see the visual representation of this project</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="btns">
            <button className='btn'>Read More</button>
            <button className="btn">Check Now</button>
          </div>
          <div className="social-icons">
            <FaFacebookF className="icon"/>
            <FaLinkedin className="icon"/>
            <FaGooglePlusG className="icon"/>
            <FaGithub className="icon"/>
          </div>
        </div>
        <div className="img-container">
          <img src={ImgPex} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
