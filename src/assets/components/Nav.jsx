import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../utils/data";

import Logo from "../images/logo_pamper_parlour.svg";
import LogoMenu from "../images/logo-menu-hamburguer.svg";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoMdPin } from "react-icons/io";
import styled from "styled-components";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Wrapper className="fixed top-0 left-0 w-[100vw] bg-white md:m-auto z-[999] ">
      <div className="md:max-w-[1000px] md:m-auto md:px-8 md:h-auto md:flex md:justify-between">
        <div className="flex justify-between p-4">
          {/* Logo */}
          <NavLink
            to="/"
            className=" pl-[1em] cursor-pointer hover:opacity-[0.5] md:pl-[0]"
          >
            <img className="max-w-xs w-44" src={Logo} alt="Pamper Parlour" />
          </NavLink>
          {/* Hamburguer Icon for Mobile (Hidden on large screens) */}
          <div
            className="mr-[1em] flex items-center md:hidden"
            onClick={handleClick}
          >
            <HiMenuAlt1 className="text-3xl" />
          </div>
        </div>
        {/* Mobile and Desktop Nav combined */}
        <nav
          className={`fixed top-0 left-0 w-screen h-screen flex flex-col justify-around items-center z-[999] bg-light-pink transform transition-transform ease-in-out delay-100 ${showMenu ? "translate-x-0" : "translate-x-full"} md:flex-row md:basis-full md:relative md:translate-x-0 md:bg-transparent md:h-auto md:w-auto `}
        >
          {/* Close Icon for Mobile (Hidden for larger screens) */}
          <div
            className="absolute top-9 right-4 md:hidden"
            onClick={handleClick}
          >
            <IoClose className="text-3xl" />
          </div>
          {/* Logo P for mobile (Hidden for larger screens) */}
          <img
            className="w-16 mt-8 md:hidden"
            src={LogoMenu}
            alt="Pamper Parlour"
          />
          {/* Nav Links */}
          <ul className="md:flex md:justify-around md:w-11/12 md:ml-auto md:self-end md:mb-5">
            {navLinks.map((link) => {
              return (
                <li
                  key={link.id}
                  className="m-12 text-center font-light md:m-0"
                >
                  <NavLink
                    to={`#${link.scrollTo}`}
                    className="cursor-pointer hover:text-pink"
                    onClick={handleClick}
                  >
                    {link.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          {/* Phone, Email and Location for mobile (Hidden for larger screens) */}
          <div className="flex w-3/5 mb-8 justify-between h-auto md:hidden">
            <a href="tel:+3532371305" className="hover:opacity-[0.8]">
              <FaPhone className="text-5xl p-3 bg-white text-pink" />
            </a>
            <a
              href="mailto:kidspamperparlour989@gmail.com"
              className="hover:opacity-[0.8]"
            >
              <IoIosMail className="text-5xl p-3 bg-white text-pink" />
            </a>
            <a
              href="https://maps.app.goo.gl/sq9TXGsi949A7exb7"
              target="_blank"
              className="hover:opacity-[0.8]"
            >
              <IoMdPin className="text-5xl p-3 bg-white text-pink" />
            </a>
          </div>
        </nav>
      </div>
    </Wrapper>
  );
};
export default Nav;

const Wrapper = styled.section`
  -webkit-box-shadow: 10px 10px 39px -1px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: 10px 10px 39px -1px rgba(0, 0, 0, 0.09);
  box-shadow: 10px 10px 39px -1px rgba(0, 0, 0, 0.09);

  nav {
    transition: transform 0.5s ease-in-out;
  }

  li .nav-link {
    color: black;
  }

  li .nav-link.active {
    color: red;
  }
`;
