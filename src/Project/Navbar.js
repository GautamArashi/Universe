import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold">
            <a href="/" className="flex items-center">
              <span className="text-gray-800">utility</span>
              <span className="text-gray-800">.</span>
            </a>
          </div>
          <div className="hidden md:flex space-x-8 font-bold text-lg ">
            <a href="#" className="text-gray-800 hover:text-gray-500">Case Studies</a>
            <a href="#" className="text-gray-800 hover:text-gray-500">Team</a>
            <a href="#" className="text-gray-800 hover:text-gray-500">Approach</a>
            <a href="#" className="text-gray-800 hover:text-gray-500">Careers</a>
            <a href="#" className="text-gray-300 bg-black px-4 py-2  rounded-md">Let's Talk</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
