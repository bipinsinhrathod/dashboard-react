import React, { useState } from "react";
import {
  ArrowDropDownOutlined,
  ArrowDropUpOutlined,
} from "@mui/icons-material/";

const Sidebar = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  return (
    <>
      <div className="flex">
        <div className="w-64">
          <div className="p-6 space-y-3">
            <h2 className="text-2xl font-semibold ml-1 mb-2">Menu</h2>
            <nav>
              <button
                onClick={() => setIsOpen1(!isOpen1)}
                className="group w-full flex items-center justify-between  px-2 py-2 text-base leading-6 font-medium rounded-md bg-gray-900 text-white focus:outline-none transition ease-in-out duration-150"
              >
                Drop 1
                {isOpen1 ? <ArrowDropUpOutlined /> : <ArrowDropDownOutlined />}
              </button>
              {isOpen1 && (
                <div className="mt-1">
                  <a
                    href="#"
                    className="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-white bg-gray-700 hover:text-white hover:bg-gray-600 focus:outline-none focus:text-white focus:bg-gray-600 transition ease-in-out duration-150"
                  >
                    Option 1
                  </a>
                  <a
                    href="#"
                    className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-white bg-gray-700 hover:text-white hover:bg-gray-600 focus:outline-none focus:text-white focus:bg-gray-600 transition ease-in-out duration-150"
                  >
                    Option 2
                  </a>
                  <a
                    href="#"
                    className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-white bg-gray-700 hover:text-white hover:bg-gray-600 focus:outline-none focus:text-white focus:bg-gray-600 transition ease-in-out duration-150"
                  >
                    Option 3
                  </a>
                </div>
              )}
            </nav>

            <nav>
              <button
                onClick={() => setIsOpen2(!isOpen2)}
                className="group w-full flex items-center justify-between px-2 py-2 text-base leading-6 font-medium rounded-md text-white bg-gray-900 focus:outline-none transition ease-in-out duration-150"
              >
                Drop 2
                {isOpen2 ? <ArrowDropUpOutlined /> : <ArrowDropDownOutlined />}
              </button>
              {isOpen2 && (
                <div className="mt-1">
                  <a
                    href="#"
                    className="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-white bg-gray-700 hover:text-white hover:bg-gray-600 focus:outline-none focus:text-white focus:bg-gray-600 transition ease-in-out duration-150"
                  >
                    Option 1
                  </a>
                  <a
                    href="#"
                    className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-white bg-gray-700 hover:text-white hover:bg-gray-600 focus:outline-none focus:text-white focus:bg-gray-600 transition ease-in-out duration-150"
                  >
                    Option 2
                  </a>
                  <a
                    href="#"
                    className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-white bg-gray-700 hover:text-white hover:bg-gray-600 focus:outline-none focus:text-white focus:bg-gray-600 transition ease-in-out duration-150"
                  >
                    Option 3
                  </a>
                </div>
              )}
            </nav>

            <nav>
              <button
                onClick={() => setIsOpen3(!isOpen3)}
                className="group w-full flex items-center justify-between px-2 py-2 text-base leading-6 font-medium rounded-md text-white bg-gray-900 focus:outline-none transition ease-in-out duration-150"
              >
                Drop 3
                {isOpen3 ? <ArrowDropUpOutlined /> : <ArrowDropDownOutlined />}
              </button>
              {isOpen3 && (
                <div className="mt-1">
                  <a
                    href="#"
                    className="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-white bg-gray-700 hover:text-white hover:bg-gray-600 focus:outline-none focus:text-white focus:bg-gray-600 transition ease-in-out duration-150"
                  >
                    Option 1
                  </a>
                  <a
                    href="#"
                    className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-white bg-gray-700 hover:text-white hover:bg-gray-600 focus:outline-none focus:text-white focus:bg-gray-600 transition ease-in-out duration-150"
                  >
                    Option 2
                  </a>
                  <a
                    href="#"
                    className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-white bg-gray-700 hover:text-white hover:bg-gray-600 focus:outline-none focus:text-white focus:bg-gray-600 transition ease-in-out duration-150"
                  >
                    Option 3
                  </a>
                </div>
              )}
            </nav>
          </div>
        </div>

        <div className="bg-gray-200 w-full p-8">
          <div className="mb-5 -mt-3 ">
            <a className="text-gray-500" href="">
              Home{" "}
            </a>
            <a className="text-gray-500" href="">
              / List{" "}
            </a>
            <a href="">/ App</a>
          </div>
          <div className="w-full h-[74.7vh] p-6 bg-white">
            <p>Content</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
