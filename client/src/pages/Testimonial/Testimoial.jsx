import React, { useEffect } from "react";
import { motion } from "framer-motion";

import { FaFacebookF, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Testimoial = () => {
  return (
    <section className="section-container">
      <motion.h2
        initial={{ opacity: 0, translateX: "200px" }}
        animate={{ opacity: 1, translateX: "0px" }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className=" text-center mt-8 font-mono tracking-wide font-semibold text-2xl"
      >
        Testimonial
      </motion.h2>
      <div className="testimonial-container text-white section-grid py-4">
        <div className="section-card">
          <div className="item-img my-8">
            <img
              src="https://www.google.pl/url?sa=i&url=https%3A%2F%2Fwww.aarp.org%2Fpolitics-society%2Fhistory%2Finfo-2023%2Fbill-gates-next-generation.html&psig=AOvVaw2bP2tS5u_4NCdNSoYhX71n&ust=1719480172224000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCIDT-vf4-IYDFQAAAAAdAAAAABAK"
              alt=""
            />
          </div>
          <div>
            <h1>John Mathew</h1>
            <p>Software Developer</p>
            <span></span>
            <div className="item-icons">
              <FaFacebookF />
              <FaGithub />
              <FaLinkedin />
              <FaTwitter />
            </div>
          </div>
        </div>
        <div className="section-card">
          <div className="item-img my-8">
            <img
              src="https://www.google.pl/url?sa=i&url=https%3A%2F%2Fwww.aarp.org%2Fpolitics-society%2Fhistory%2Finfo-2023%2Fbill-gates-next-generation.html&psig=AOvVaw2bP2tS5u_4NCdNSoYhX71n&ust=1719480172224000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCIDT-vf4-IYDFQAAAAAdAAAAABAK"
              alt=""
            />
          </div>
          <h1>John Mathew</h1>
          <p>Software Developer</p>
          <span></span>
          <div className="item-icons">
            <FaFacebookF />
            <FaGithub />
            <FaLinkedin />
            <FaTwitter />
          </div>
        </div>
        <div className="section-card">
          <div className="item-img my-8">
            <img src="" alt="" />
          </div>
          <h1>Steve Hamburg</h1>
          <p>Web Developer</p>
          <span></span>
          <div className="item-icons">
            <FaFacebookF />
            <FaGithub />
            <FaLinkedin />
            <FaTwitter />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimoial;
