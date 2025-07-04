import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo1.png";

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-300 px-4 md:px-8 py-1.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-lg">
          <Link to="/" className="flex items-center">
            <img src={logo} className="mr-2 h-15 w-15" alt="Logo" />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="bg-gradient-to-r from-orange-400 to-pink-400 hover:from-orange-500 hover:to-pink-500 text-white font-semibold rounded-xl text-sm px-5 py-2 shadow-md transition-all duration-300 ease-in-out"
            >
              Get Started
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="Home"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="About"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="github"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
