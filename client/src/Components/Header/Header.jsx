import React from 'react'

const Header = () => {
  return (
    <>
    <nav className='navbar flex justify-between'>
        <a href='logo' className='logo'>navbar</a>
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
                <a href='contact'>Contact</a>
            </li>
            <div className='btns-container'>
                <li>
                    <a href='login'>Login</a>
                </li>
                <li>
                    <a href='register'>Register</a>
                </li>
            </div>
        </ul>

    </nav>
    <div className='menu_hover'></div>
    </>
    
  )
}

export default Header
