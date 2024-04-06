import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-64 min-h-screen bg-gray-800 text-white">
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">Menu</h2>
        <nav>
          <button onClick={() => setIsOpen(!isOpen)} className="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-white bg-gray-900 focus:outline-none transition ease-in-out duration-150">
            Dropdown
            <svg className="ml-auto h-5 w-5 transform group-hover:rotate-90 transition duration-150 ease-in-out" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M10 14a4 4 0 100-8 4 4 0 000 8zm0 1a5 5 0 100-10 5 5 0 000 10z" clipRule="evenodd" />
            </svg>
          </button>
          {isOpen && (
            <div className="mt-1">
              <a href="#" className="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-white bg-gray-700 hover:text-white hover:bg-gray-600 focus:outline-none focus:text-white focus:bg-gray-600 transition ease-in-out duration-150">
                Option 1
              </a>
              <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-white bg-gray-700 hover:text-white hover:bg-gray-600 focus:outline-none focus:text-white focus:bg-gray-600 transition ease-in-out duration-150">
                Option 2
              </a>
              <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-white bg-gray-700 hover:text-white hover:bg-gray-600 focus:outline-none focus:text-white focus:bg-gray-600 transition ease-in-out duration-150">
                Option 3
              </a>
              <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-white bg-gray-700 hover:text-white hover:bg-gray-600 focus:outline-none focus:text-white focus:bg-gray-600 transition ease-in-out duration-150">
                Option 4
              </a>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
