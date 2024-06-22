import React, { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";



const Header = () => {
    const [open, setMenuOpen] = useState(false)
    
    const handleMenu = (e) => {
        setMenuOpen(true)
    }
   
  return (
    <>
    <nav className='navbar shadow-md py-4 flex justify-between w-full bg-slate-600 text-white px-24 min-h-[65px] items-center'>
        <a href='logo' className='logo text-4xl font-semibold capitalize cursor-pointer hover:scale-50 transition-all duration-500'>navbar</a>
        <ul className=' gap-12 text-lg font-thin hidden md:inline-flex '>
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
        <div className='md:hidden'>
            <FiMenu size={40} />
            <IoCloseOutline size={40} />
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
    </>
    
  )
}

export default Header
