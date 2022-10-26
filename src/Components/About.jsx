import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="h-screen w-full bg-black text-orange-600 flex flex-col p-4 justify-center  sm: text-center "
    >
      <h2 className="items-center text-[45px] border-b-white">About</h2>
      <h3 className="text-[31px] text-orange-400">
        The most haunted location in Philadelphia!
      </h3>
      <p className="text-[20px] text-orange-300 p-2 leading-8">
        Come and check out the Asylum. A top attracttion in all of Northeasten
        Pennsylvania. We have something for evey horror fan. Walkthrough haunted
        house, hayrides, and for a limited time overnight investigations!
      </p>
    </div>
  );
};

export default About;
