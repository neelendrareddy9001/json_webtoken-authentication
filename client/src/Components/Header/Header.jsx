import React from 'react'

const Header = () => {
  return (
    <div className='navbar flex justify-between'>
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
            <li>
                <a href='login&sinin'>Login | Register</a>
            </li>
        </ul>

    </div>
  )
}

export default Header
