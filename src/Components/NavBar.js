import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineXMark, HiBars3 } from "react-icons/hi2";
import PagesIcon from "./icons/PagesIcon/PagesIcon";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", title: "Start to search" },
    { path: "/my-job", title: "My Job" },
    { path: "/salary", title: "Profile" },
    { path: "/post-job", title: "Post A Job" },
  ];

  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4 relative">
      <nav className="flex justify-between items-center py-6">
        <a
          href="/"
          className="flex items-center gap-2 text-2xl text-black font-bold"
        >
          <PagesIcon />
          BotCV
        </a>
        {isMobile ? (
          <div className="md:hidden absolute top-0 right-0">
            <button onClick={handleMenuToggler} className="p-2">
              {isMenuOpen ? (
                <div className="p-2">
                  <HiOutlineXMark className="w-8 h-8 text-primary" />
                </div>
              ) : (
                <div className="p-2">
                  <HiBars3 className="w-8 h-8 text-primary" />
                </div>
              )}
            </button>
          </div>
        ) : (
          <ul className="md:flex gap-12 hidden">
            {navItems.map(({ path, title }) => (
              <li key={path} className="text-base text-primary">
                <NavLink
                  to={path}
                  className="hover:text-blue transition duration-300 ease-in-out"
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
        <div className="text-base text-primary font-medium space-x-5 hidden lg:block ">
          <Link
            to="/login"
            className="inline-block py-2 px-4 border border-primary rounded-md text-primary hover:bg-blue hover:text-white transition duration-300 ease-in-out"
          >
            Login
          </Link>
          <Link
            to="/sign-up"
            className="inline-block py-2 px-4 bg-blue rounded-md text-white hover:bg-opacity-75 transition duration-300 ease-in-out"
          >
            Sign up
          </Link>
        </div>
      </nav>
      {isMenuOpen && isMobile && (
        <div className="px-4 bg-primary py-5 rounded-md flex justify-end w-auto h-auto absolute top-full right-0 shadow-md border border-gray-300">
          <ul>
            {navItems.map(({ path, title }) => (
              <li key={path} className="text-base">
                <NavLink
                  to={path}
                  className="block py-2 px-4 hover:text-white text-blue transition duration-300 ease-in-out"
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
