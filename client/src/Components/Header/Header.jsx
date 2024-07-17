import React, { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';



const Header = () => {
    const [open, setMenuOpen] = useState(false)
    
    const handleMenu = (e) => {
        setMenuOpen(true)
    }
   
  return (
    <section>
    <nav className='navbar shadow-md py-4 flex justify-between w-full bg-slate-600 text-white px-24 min-h-[65px] items-center'>
        <a href='logo' className='logo text-4xl font-semibold capitalize cursor-pointer overflow-hidden'>navbar</a>
        <ul className=' gap-12 text-lg font-thin hidden sm:hidden'>
            <li>
                <a href='home'>Home</a>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <a href='blog'>Blog</a>
            </li>
            <li>
                <a href='testimonial'>Testimonial</a>
            </li>
            <li>
                <a href='contact'>Contact</a>
            </li>
            <div className='line'></div>
        </ul>
        
        <div className='md:hidden'>
            <FiMenu size={40} />
            <IoCloseOutline size={40}  style={{display: "none"}}/>
        </div>
        
        {
            open ? 
            <>
                <div className='mobile-menu'>
        <ul className='flex justify-between'>
            <li>
                <a href='home'>Home</a>
            </li>
            <li>
                <a href='about'>About</a>
            </li>
            <li>
                <a href='blog'>Blog</a>
            </li>
            <li>
                <a href='testimonial'>Testimonial</a>
            </li>
            <li>
                <a href='contact'>Contact</a>
            </li>
        </ul>
        </div>
            </> 
            : ""
        }
        
    </nav>
    <div className='menu_hover'></div>
    </section>
    
  )
}

export default Header
