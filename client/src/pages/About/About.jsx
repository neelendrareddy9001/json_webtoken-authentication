import React from "react";
import { motion } from "framer-motion";
import AboutI from "../../images/pexels.jpeg";

const About = () => {
  return (
    <section className="section-container bg-slate-400">
      <motion.h2
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className=" text-center my-4 font-mono tracking-wide font-semibold text-2xl"
      >
        About Us
      </motion.h2>
      <div className="section-background">
        <div className="container min-h-[550px]">
          {/* text content */}
          <div className="flex flex-wrap min-w-[350px] sm:text-center">
            <div className='px-8'>
              <h1 className="text-2xl font-serif first-letter:text-3xl first-letter:text-green-400">
                Whom you know very well about{" "}
                <span className="text-gray-900">belive</span>in him
              </h1>
              <h4 className="text-xl font-normal">
                Enjoy peacefull life forever
              </h4>
              <p className="font-thin">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown
              </p>
            </div>
            <div className="my-4 flex gap-4">
              <button className="btn">Get Started</button>
              <button className="btn">View More</button>
            </div>
          </div>
          {/* image section */}
          <div>
            <img src={AboutI} alt="about" className="about-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
