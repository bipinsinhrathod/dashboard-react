import React, { useState } from "react";
// import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeBtn, setActiveBtn] = useState("");

  const handleClick = (btn) => {
    setActiveBtn(btn);
  };

  return (
    <>
      <section className=" flex justify-between bg-[#001529] ">
        <div className="flex items-center  ">
          <input className="rounded-lg ml-10 text-white outline-none p-2 bg-[#334454]" type="text" />
        </div>

        <div className="flex mr-10 space-x-8 p-5">
          <button
            className={` text-gray-300 p-2 rounded-md hover:text-white duration-300 transition-all hover:scale-110 ${
              activeBtn === 'home' ? 'bg-[#1677FF]' : "bg-[#001529]"
            } `}
            onClick={() => handleClick('home')}
          >
            Home
          </button>
          <button
            className={` text-gray-300 p-2 rounded-md hover:text-white duration-300 transition-all hover:scale-110 ${
              activeBtn === 'about' ? 'bg-[#1677FF]' : "bg-[#001529]"
            } `}
            onClick={() => handleClick('about')}
          >
            About
          </button>
          <button
            className={` text-gray-300 p-2 rounded-md hover:text-white duration-300 transition-all hover:scale-110 ${
              activeBtn === 'contact' ? 'bg-[#1677FF]' : "bg-[#001529]"
            } `}
            onClick={() => handleClick('contact')}
          >
            Contact
          </button>
        </div>
      </section>
    </>
  );
};

export default Navbar;
