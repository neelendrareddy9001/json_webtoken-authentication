import React from "react";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <section className="container w-full md:px-8">
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
      <div>
        <h1 className="heading first-letter:text-2xl font-semibold text-lg py-4">
          This is about the nature
        </h1>
        <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 place-items-center">
          {/* image section */}
          <div>
            
          </div>
          {/* content section */}
          <div className=" grid grid-cols-1 sm:grid-cols-1">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
