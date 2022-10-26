import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Purchase = () => {
  return (
    <div
      name="purchase"
      className="h-screen w-full bg-black text-orange-600 p-20"
    >
      <div className="items-center flex-col justify-center text-center p-12">
        <div>
          <h2 className="text-[40px] border-b-[1px] border-white">Tickets!</h2>
        </div>
        <div>
          <ul className="mt-4 leading-[60px] ">
            <li className="text-orange-300">Hayride - $30</li>
            <li className="text-orange-300">Haunted Walkthrough - $35</li>
            <li className="text-orange-300">Overnight Investigation - $90</li>
            <li className="text-orange-300">All inclusive - $140</li>
          </ul>
        </div>
        <div className="w-full">
          <ul className="flex mt-20 gap-5 justify-center ">
            <li className="cursor-pointer ">
              <FaFacebook />
            </li>
            <li className="cursor-pointer ">
              <FaInstagram />
            </li>
            <li className="cursor-pointer ">
              <FaTwitter />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
