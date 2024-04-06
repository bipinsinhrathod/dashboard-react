import React from 'react';

const NavigationBar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Header</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z"/></svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            nav 1
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            nav 2
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            nav 3
          </a>
        </div>
        <div>
          <div className="relative mt-4 lg:inline-block text-left">
            <div>
              <button className="bg-white py-2 px-4 pr-8 rounded text-sm font-medium text-left shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-500 focus:ring-white" id="options-menu" aria-haspopup="true" aria-expanded="true">
                Home List App
                <svg className="fill-current w-4 h-4 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </button>
            </div>
            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <div className="py-1" role="none">
                <a href="#" className="block px-4 py-2 text-sm text-teal-700 hover:bg-teal-100 hover:text-teal-900" role="menuitem">Content</a>
                <a href="#" className="block px-4 py-2 text-sm text-teal-700 hover:bg-teal-100 hover:text-teal-900" role="menuitem">option1</a>
                <a href="#" className="block px-4 py-2 text-sm text-teal-700 hover:bg-teal-100 hover:text-teal-900" role="menuitem">option2</a>
                <a href="#" className="block px-4 py-2 text-sm text-teal-700 hover:bg-teal-100 hover:text-teal-900" role="menuitem">option3</a>
                <a href="#" className="block px-4 py-2 text-sm text-teal-700 hover:bg-teal-100 hover:text-teal-900" role="menuitem">option4</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;