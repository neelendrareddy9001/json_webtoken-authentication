import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(!open);
  };
  const closeMenu = () => {
    setMenuOpen(!open);
  };

  return (
    <section>
      <nav className="navbar shadow-md py-4 flex justify-between w-full bg-slate-600 text-white px-8 h-[70px] items-center">
        <a
          href="logo"
          className="logo text-4xl font-semibold capitalize cursor-pointer overflow-hidden"
        >
          navbar
        </a>
        <ul className=" gap-12 font-thin hidden md:inline-flex ml-[40%]">
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a href="blog">Blog</a>
          </li>
          <li>
            <a href="testimonial">Testimonial</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
          <div className="line"></div>
        </ul>

        <div className="flex md:hidden">
          {open ? (
            <IoCloseOutline size={40} onClick={closeMenu} />
          ) : (
            <FiMenu size={40} onClick={openMenu} />
          )}
        </div>

        {open ? (
          <>
            <div className="mobile-menu rounded-3xl">
              <ul className='flex flex-col gap-8 items-center justify-center py-4 hover:active:no-underline'>
                <li>
                  <a href="home">Home</a>
                </li>
                <li>
                  <a href="about">About</a>
                </li>
                <li>
                  <a href="blog">Blog</a>
                </li>
                <li>
                  <a href="testimonial">Testimonial</a>
                </li>
                <li>
                  <a href="contact">Contact</a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          ""
        )}
      </nav>
      <div className="menu_hover"></div>
    </section>
  );
};

export default Header;
