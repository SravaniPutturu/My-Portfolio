
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'home',
      text: 'Home'
    },
    {
      id: 2,
      link: 'about',
      text: 'About'
    },
    {
      id: 3,
      link: 'projects',
      text: 'Projects'
    },
    {
      id: 4,
      link: 'skills',
      text: 'Skills'
    },
    {
      id: 5,
      link: 'contact',
      text: 'Contact'
    }
  ];

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center bg-black w-full h-20 text-white fixed px-4">
      <div>
        <h1 className="text-5xl font-signature ml-2">Sravani</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, text }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link
              activeClass="active"
              to={link}
              spy={true}
              smooth={true}
              duration={500}
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={toggleNav}
        className="cursor-pointer pr-4 z-20 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500 text-gray-500">
          {links.map(({ id, link, text }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                duration={500}
                onClick={toggleNav}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
