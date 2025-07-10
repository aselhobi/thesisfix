import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white py-4 shadow-md border-b border-gray-300">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Link to="/" className="text-2xl font-bold">SHOPPE</Link>
        </div>
        <div className="flex items-center space-x-6">
          <Link to="/" className=" text-gray-900 hover:text-gray-600 font-semibold ">Home</Link>
          <Link to="/about" className="text-gray-900 hover:text-gray-600 font-semibold ">About</Link>
          <Link to="/contactus" className="text-gray-900 hover:text-gray-600 font-semibold ">Contact Us</Link>
          {/* Icon placeholders - use appropriate icons */}
         
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
