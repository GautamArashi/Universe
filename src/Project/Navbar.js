import React from 'react';

const Navbar = () => {
  return (
<div className="z-10 bg-red-500 bg-cover bg-center ">
    <nav className="relative  z-10">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center py-4">
        <div className="text-2xl font-bold">
          <a href="/" className="flex items-center text-4xl">
            <span className="text-white">utility</span>
            <span className="text-white">.</span>
          </a>
        </div>
        <div className="hidden md:flex space-x-8 text-2xl">
          <a href="#" className="text-white hover:text-black">
            Case Studies
          </a>
          <a href="#" className="text-white hover:text-black">
            Team
          </a>
          <a href="#" className="text-white hover:text-black">
            Approach
          </a>
          <a href="#" className="text-white hover:text-black">
            Careers
          </a>
          <a href="#" className="text-black bg-white px-4 py-2 rounded-md">
            Let's Talk
          </a>
        </div>
      </div>
    </div>
  </nav>
  </div>
  );
};

export default Navbar;
