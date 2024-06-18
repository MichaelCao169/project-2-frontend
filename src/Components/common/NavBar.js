import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PagesIcon from "../icons/PagesIcon/PagesIcon";

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

  const navItems = [{ path: "/", title: "Start to search" }];

  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4 relative">
      <nav className="flex justify-between items-center py-6">
        <div className="flex items-center gap-[100px]">
          <a
            href="/"
            className="flex items-center gap-2 text-2xl text-black font-bold"
          >
            <PagesIcon />
            BotCV
          </a>
          
        </div>
        
          <div className="flex items-center space-x-5">
            <Link
              to="/login"
              className="inline-block py-2 px-4 border border-primary rounded-md text-primary hover:bg-blue hover:text-white transition duration-300 ease-in-out"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="inline-block py-2 px-4 bg-blue rounded-md text-white hover:bg-opacity-75 transition duration-300 ease-in-out"
            >
              Sign up
            </Link>
          </div>
       </nav>
    </header>
  );
};

export default NavBar;
