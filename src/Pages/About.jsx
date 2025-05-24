import React, { useEffect } from 'react';
import Slider from '../Components/Slider';

function About() {

   useEffect(()=>{
    document.title = "About | RoomsTer"
   })
  
  return (
    <>
    <section className=" bg-indigo-100 dark:bg-gray-800 text-gray-800  py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-indigo-600 dark:text-purple-600 mb-6 ">About RoomsTer</h1>
        <p className="text-lg text-gray-600 mb-8 dark:text-white">
          Welcome to <span className="font-semibold text-indigo-600 dark:text-purple-600">RoomsTer</span> – your trusted roommate finder platform. 
          We connect people who are looking for safe, friendly, and budget-friendly shared living solutions.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 text-left mt-12">
          <div className="bg-indigo-200 dark:bg-gray-200  p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-indigo-700 mb-2 dark:text-purple-600">🌎 Our Mission</h3>
            <p>We aim to make it easier for people to find the right roommate and a perfect home to share.</p>
          </div>

          <div className="bg-indigo-200 dark:bg-gray-200  p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-indigo-700 mb-2 dark:text-purple-600">🔒 Safety First</h3>
            <p>We ensure secure profiles, verified listings, and safe communications through our platform.</p>
          </div>

          <div className="bg-indigo-200 dark:bg-gray-200 p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-indigo-700 mb-2 dark:text-purple-600">💬 Community</h3>
            <p>We are building a friendly and respectful community to help everyone live better together.</p>
          </div>
        </div>
      </div>
    </section>
    <Slider />
    </>
  );
}

export default About;
