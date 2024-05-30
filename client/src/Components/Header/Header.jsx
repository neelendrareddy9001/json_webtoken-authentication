import React, { useState } from 'react';
import {FiMenu} from 'react-icons/fi'
import { IoClose } from "react-icons/io5";


const Header = () => {
    const [open, setMenuOpen] = useState(false)
    
    const handleMenu = (e) => {
        setMenuOpen(true)
    }
   
  return (
    <>
    <nav className='navbar flex justify-around'>
        <a href='logo' className='logo mr-80'>navbar</a>
        <ul className='flex justify-between menu'>
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
        
        <div className='menu-icon'>
            <FiMenu size={32} onClick={handleMenu}/>
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
