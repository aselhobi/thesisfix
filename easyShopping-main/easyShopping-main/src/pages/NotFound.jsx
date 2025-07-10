import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-6xl mb-8">404 ERROR</h1>
      <p className="text-lg mb-8 text-center" >
        This page not found;
        <br />
        back to home and start again
      </p>
      <Link to="/" className="px-6 py-2 text-sm font-semibold text-white bg-blue-500 rounded hover:bg-blue-600">
        HOMEPAGE
      </Link>
    </div>
  );
}

export default NotFound;
