import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Listing() {


  useEffect(() => {
    AOS.init({
      duration: 1500, 
      once: false,   
    });
  }, []);


   useEffect(()=>{
      document.title = "Listing | RoomsTer"
     })

  const [postDatas, setPostDatas] = useState([])
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    axios.get("https://server-sepia-theta.vercel.app/api/posts/get-post")
      .then(res => setPostDatas(res.data.post))
      .catch(err => console.error(err))
  }, [])

  const displayedPosts = showAll ? postDatas : postDatas.slice(0, 5)

  return (
    <div className='bg-indigo-100 dark:bg-gray-800 min-h-[calc(100vh-177px)]'>
        
      <div className='w-[90%] mx-auto'>
        <div className='grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center items-center py-12'>
          {
            displayedPosts.map((data, i) => (
              <div
              //  ref={boxRef}
              data-aos="fade-up"
              data-aos-delay={i * 300}
               key={i}>
                <div className='flex flex-col justify-center items-center border-y-12 border-indigo-500 rounded-b-lg shadow-md bg-white dark:bg-gray-100 rounded-xl h-96'>
                  <img className='w-[180px] h-[160px] object-cover rounded-md' src={data?.roomPictureURL} alt="" />
                  <p className='font-bold text-lg text-center text-indigo-500'>{data.title}</p>
                  <div className='flex justify-between gap-5 my-1'>
                    <p>{data.location}</p>
                    <p className='text-red-500'>$:{data.rent}</p>
                  </div>
                  <div className='my-2'>
                    <Link to={`details/${data._id}`}>
                      <button className='btn bg-indigo-200 hover:bg-indigo-300'>View Details</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

        {
          postDatas.length > 5 && (
            <div className="text-center pb-10">
              <button
                onClick={() => setShowAll(prev => !prev)}
                className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg"
              >
                {showAll ? 'Show Less' : 'Show All'}
              </button>
            </div>
          )
        }

      </div>
    </div>
  )
}

export default Listing
