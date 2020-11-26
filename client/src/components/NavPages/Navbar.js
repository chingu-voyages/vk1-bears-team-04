import React from "react";

// import About from "../NavPages/About";
// import Contact from "../NavPages/Contact";
// import Features from "../NavPages/Features";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../images/logo.svg";

const Navbar = () => {
  return (
    <>
      <nav className="nav-bg">
        <div className="container mx-auto">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLineoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLineJoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-start sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center"></div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4 items-center">
                  <Logo className="w-6" />
                  <Link
                    to="/"
                    className="py-2 rounded-md  text-base font-medium text-white"
                  >
                    U RESCUE ME
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center"></div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <Link
                    to="/about-us"
                    className="px-3 py-2 rounded-md  text-base font-medium text-white"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/features"
                    className="px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-700"
                  >
                    Features
                  </Link>
                  <Link
                    to="/contact"
                    className="px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-700"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-end ">
              <div className="flex-shrink-0 flex items-center"></div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <Link
                    to="/sign-up"
                    className="px-3 py-2 rounded-md  text-base font-medium text-white"
                  >
                    Sign Up
                  </Link>
                  <Link
                    to="/login"
                    className="px-3 py-2 rounded-md text-base font-medium
                    text-white hover:text-white hover:bg-gray-700"
                  >
                    {" "}
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
