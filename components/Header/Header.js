"use client";
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  return (
    <nav className="bg-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/">
                <Image src="/doxu_logo.png" alt="Doxu logo" width={200} height={200} />
              </a>
            </div>
          </div>

          <div className="hidden md:flex ml-4 items-center space-x-4">
            <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
              Home
            </a>
            <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
              Perso
            </a>
            <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
              Gameplay
            </a>
            <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
              Contact
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleNavbar}
            >
              {isClick ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* MENU MOBILE avec transition */}
        <div
          className={`md:hidden bg-black transition-all duration-600 ease-in-out overflow-hidden ${
            isClick ? "max-h-[1000px]" : "max-h-0"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
              Home
            </a>
            <a href="/" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
              Perso
            </a>
            <a href="/" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
              Gameplay
            </a>
            <a href="/" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
