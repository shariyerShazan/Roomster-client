import React from 'react';
import { Link } from 'react-router';
// import { Typewriter } from 'react-simple-typewriter';

function HeroSection() {
  return (
    <section className="bg-indigo-500 text-white py-16 dark:bg-gray-800 ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 px-3 sm:px-0 gap-10 items-center">
        

        <div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Find Your Perfect Roommate on <span className="text-red-500">RoomsTer</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">
            Connect with verified people, explore rooms in your city, and build lasting roommate partnerships easily and securely.
          </p>
          <Link to={'/listing'}>
          <p className='btn text-green-600 my-2 bg-indigo-100 hover:bg-indigo-200'>
            See Listing
          </p>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://media.designcafe.com/wp-content/uploads/2023/07/05141750/aesthetic-room-decor.jpg"
            alt="Room 1"
            className="rounded-lg shadow-md object-cover "
          />
          <img
            src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2023/7/19/3/DOTY2023_Dramatic-Before-And-Afters_Hidden-Hills-11.jpg.rend.hgtvcom.1280.720.85.suffix/1689786863909.webp"
            alt="Roommate"
            className="rounded-lg shadow-md object-cover"
          />
          <img
            src="https://www.thespruce.com/thmb/WQdt9HXB78tKg5U5eITP4ZUlYcA=/2500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PAinteriors-7-cafe9c2bd6be4823b9345e591e4f367f.jpg"
            alt="Room 2"
            className="rounded-lg shadow-md object-cover"
          />
          <img
            src="https://www.decorpot.com/images/blogimage1361284108interior-designs-for-master-bedroom.jpg"
            alt="Student Room"
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
