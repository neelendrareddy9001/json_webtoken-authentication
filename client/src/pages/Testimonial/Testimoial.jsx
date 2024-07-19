import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {useDispatch, useSelector} from 'react-redux';
import { FaFacebookF, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { fetchTodo } from "../../redux/reducers/todoSlice";

const Testimoial = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.todo)
  useEffect(() => {
    dispatch(fetchTodo())
  },[])
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
      <div className="testimonial-container text-white text-wrap flex justify-center gap-32 py-32 flex-wrap md:">
        {data.map((todo) => {
          return <p key={todo.id}>{todo.title}</p>
        })}
        <div className="item px-20 pt-4">
          <div className="item-img my-8">
            <img src="https://www.google.pl/url?sa=i&url=https%3A%2F%2Fwww.aarp.org%2Fpolitics-society%2Fhistory%2Finfo-2023%2Fbill-gates-next-generation.html&psig=AOvVaw2bP2tS5u_4NCdNSoYhX71n&ust=1719480172224000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCIDT-vf4-IYDFQAAAAAdAAAAABAK" alt="" />
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
        <div className="item px-20 pt-4">
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
        <div className="item px-20 pt-4">
          <div className="item-img my-8">
            <img src="" alt="" />
          </div>
          <h1>Kim John</h1>
          <p>React Developer</p>
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
