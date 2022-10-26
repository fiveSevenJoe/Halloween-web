import React, { useState } from "react";
import { FaSkull, FaBars, FaAngleUp } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-black w-full h-[90px] fixed ">
      <div className="flex flex-row  justify-between items-center max-w-[1240px] mx-auto px-4 h-full">
        <div>
          <h2 className="text-red-800 font-bold text-[43px] cursor-pointer animate-pulse">
            <Link
              to="home"
              smooth={true}
              offset={50}
              duration={500}
              delay={100}
            >
              <FaSkull />
            </Link>
          </h2>
        </div>
        <div className=" hidden md:flex">
          <ul className=" flex flex-row items-center text-red-700 align-center gap-4 font-bold ">
            <li to="home" className="cursor-pointer">
              <Link
                to="home"
                smooth={true}
                offset={50}
                duration={500}
                delay={100}
              >
                HOME
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to="about"
                smooth={true}
                offset={50}
                duration={500}
                delay={100}
              >
                ABOUT
              </Link>
            </li>

            <button className="border-2 border-black rounded-full mb-1 bg-gradient-to-r from-red-900 to-red-500 text-black p-2 animate-pulse hover:text-white   ">
              <Link
                to="purchase"
                smooth={true}
                offset={50}
                duration={500}
                delay={100}
              >
                Buy Tickets
              </Link>
            </button>
          </ul>
        </div>
        <div
          onClick={handleNav}
          className=" block md:hidden flex-row align-center justify-center text-red-700 text-[24px] cursor-pointer"
        >
          {nav ? <FaAngleUp /> : <FaBars />}
        </div>

        {/* mobile menu */}
        <div
          className={
            nav
              ? "w-full h-full bg-black text-red-700 fixed top-[90px] left-0  text-center p-3 cursor-pointer transition ease-in-out delay-100"
              : "absolute left-[-100%]"
          }
        >
          <ul className="  text-red-700 align-center gap-4 font-bold  ">
            <li className="p-3 text-2xl cursor-pointer">
              <Link
                onClick={handleNav}
                to="home"
                smooth={true}
                offset={50}
                duration={500}
                delay={100}
              >
                HOME
              </Link>
            </li>
            <li className="p-3 cursor-pointer">
              <Link
                onClick={handleNav}
                to="about"
                smooth={true}
                offset={50}
                duration={500}
                delay={100}
              >
                ABOUT
              </Link>
            </li>

            <button className="m-4 border-2 border-black rounded-full mb-1 bg-gradient-to-r from-red-900 to-red-500 text-black p-2   ">
              {" "}
              <Link
                onClick={handleNav}
                to="purchase"
                smooth={true}
                offset={50}
                duration={500}
                delay={100}
              >
                Buy Tickets
              </Link>
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
