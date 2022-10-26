import React from "react";
import pumpkin from "../Images/pumpkin.mp4";
import { Link } from "react-scroll";

const Main = () => {
  return (
    <div name="home" className="w-full h-[90vh] top-[90px] overflow-hidden ">
      <video
        className="object-cover h-full w-full -z-10 absolute "
        src={pumpkin}
        autoPlay
        loop
        muted
      />
      <div className=" w-full h-[90%] text-center flex-col justify-center flex mt-24">
        <h1 className="text-white text-[50px] md:flex ml-8">
          <strong className="md:text-orange-800">Haunted </strong> Assylum
        </h1>
        <h2 className="text-white text-[30px] md:flex ml-16">
          Come join us if you dare!
        </h2>
        <div className="m-4 md:flex ml-24 pd-2 gap-4">
          <button className="border-2 border-black rounded-full mb-1 bg-gradient-to-r from-red-900 to-red-500 text-black font-bold p-4 w-[150px] hover:bg-black hover:text-white  ">
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
        </div>
      </div>
    </div>
  );
};

export default Main;
