import React, { useEffect } from 'react';
import { Link } from 'react-router';

function Error() {
   useEffect(()=>{
      document.title = "Error | RoomsTer"
     })
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white px-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-indigo-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
        <p className="text-gray-500 mb-6">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-indigo-600 text-white px-6 py-2 rounded font-semibold hover:bg-indigo-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </section>
  );
}

export default Error;
