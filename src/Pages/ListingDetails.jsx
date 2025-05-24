import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { AiFillLike } from "react-icons/ai";

function ListingDetails() {

  useEffect(() => {
    document.title = "Listing Details | RoomsTer"
  }, [])

  const [postDatas, setPostDatas] = useState([])
  const [like, setLike] = useState(0)
  const [disable, setDisable] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    axios.get("https://server-sepia-theta.vercel.app/api/posts/get-post")
      .then(res => setPostDatas(res.data.post))
      .catch(err => console.error(err))
  }, [])

  const selectedPost = postDatas.find(data => data._id === id)

  useEffect(() => {
    if (selectedPost) {
      setLike(selectedPost.like || 0)
    }
  }, [selectedPost])

  const handleLike = () => {
    const isCurrentlyLiked = disable
    const newDisable = !disable
    const newLikeCount = isCurrentlyLiked ? like - 1 : like + 1

    setDisable(newDisable)
    setLike(newLikeCount)

    axios.put(`https://server-sepia-theta.vercel.app/api/posts/update-like/${id}`, {
      like: newLikeCount
    })
      .then(res => {
        console.log("Updated like count in backend:", res.data.post.like)
      })
      .catch(err => console.error("Failed to update like count:", err))
  }

  return (
    <div className='min-h-[calc(100vh-177px)] bg-indigo-100 dark:bg-gray-800 '>
      <div className='flex justify-center'>
        {selectedPost ? (
          <div className='my-[10%] bg-white dark:bg-gray-100 rounded-md flex flex-col justify-center items-center shadow-xl group text-center sm:text-start mx-4 sm:mx-0 p-5 '>
            <div className='flex flex-col sm:flex-row justify-center gap-10 items-center'>
              <img
                className='rounded-md sm:group-hover:-translate-x-1/3 sm:group-hover:-translate-y-1/3 duration-500 sm:group-hover:scale-[150%] w-[300px] h-[200px] sm:w-[400px] object-cover sm:h-[300px]'
                src={selectedPost.roomPictureURL}
                alt="Room"
              />
              <div>
                <p className='font-bold text-3xl sm:text-5xl text-center text-indigo-500 py-2'>{selectedPost.title}</p>
                <div className='flex flex-col sm:flex-row justify-between text-lg'>
                  <p>{selectedPost.location}</p>
                  <p className='text-red-500'>$:{selectedPost.rent}</p>
                </div>
                <div className='flex flex-col sm:flex-row justify-between py-2'>
                  <p className='text-lg text-green-500'>type: {selectedPost.type}</p>
                  <p className='text-lg text-green-500'>Availability Date: {selectedPost.availabilityDate}</p>
                </div>
                <div className='flex justify-between items-center gap-4'>
                  <p className='font-bold text-xl'>{selectedPost.lifestyle}</p>
                  <button
                    onClick={handleLike}
                    className={`cursor-pointer btn bg-indigo-100 flex items-center gap-1 px-3 py-1 rounded-md shadow ${disable ? "text-blue-500" : "text-black"}`}>
                    <AiFillLike size={20} />
                    <span>Like ({like})</span>
                  </button>
                </div>

                <p className={`text-lg font-bold text-purple-500 ${disable ? 'block' : 'hidden'}`}>
                  Contact: {selectedPost.contactNumber}
                </p>
              </div>
            </div>
            <p className='text-lg text-gray-600 mt-4 px-[1vh] sm:px-[10vh]'>
              {selectedPost.description}
            </p>
          </div>
        ) : (
          <p>Loading or Post not found</p>
        )}
      </div>
    </div>
  )
}

export default ListingDetails