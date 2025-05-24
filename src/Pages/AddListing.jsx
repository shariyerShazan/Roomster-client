import React, { useContext, useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { MyContext } from '../Context/AuthContext'
import { toast, ToastContainer } from 'react-toastify'

function AddListing() {



   useEffect(()=>{
      document.title = "Create Listing | RoomsTer"
     })




//   const { id } = useParams()
  const navigate = useNavigate()
  const { user } = useContext(MyContext)

  const [formData, setFormData] = useState({
    title: '',
    roomPictureURL: '',
    location: '',
    rent: '',
    type: '',
    availabilityDate: '',
    description: '',
    lifestyle: '',
    contactNumber: '',
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    // e.reset()
    setLoading(true)
    setError(null)

    try {
      const res = await axios.post(
        `https://server-sepia-theta.vercel.app/api/posts/post/${user?._id}`,
        formData,
        
        { withCredentials: true }
      )

      if (res.data.success) {
        toast('Post successfully!')
        setTimeout(() => {
          navigate('/my-listing')
        }, 1000);
      } else {
        setError(res.data.message || 'Post failed')
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Server error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[calc(100vh-177px)] flex justify-center items-start bg-indigo-100 dark:bg-gray-800 py-10 px-4">
      <ToastContainer />
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-100 p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-indigo-700 text-center">Create Listing</h2>

        

        <label className="block mb-3">
          <span className="text-gray-700 font-semibold">User's Email</span>
          <input
            type="email"
            name="title"
            value={user?.email}
            // onChange={handleChange}
            required
            className="mt-1 block w-full rounded border border-gray-300 px-3 py-2"
          />
        </label>

        <label className="block mb-3">
          <span className="text-gray-700 font-semibold">User's Name</span>
          <input
            type="text"
            name="title"
            value={user?.name}
            // onChange={handleChange}
            required
            className="mt-1 block w-full rounded border border-gray-300 px-3 py-2"
          />
        </label>

        <label className="block mb-3">
          <span className="text-gray-700 font-semibold">Title</span>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded border border-gray-300 px-3 py-2"
          />
        </label>

        <label className="block mb-3">
          <span className="text-gray-700 font-semibold">Room Picture URL</span>
          <input
            type="url"
            name="roomPictureURL"
            value={formData.roomPictureURL}
            onChange={handleChange}
            className="mt-1 block w-full rounded border border-gray-300 px-3 py-2"
          />
        </label>

        <label className="block mb-3">
          <span className="text-gray-700 font-semibold">Location</span>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded border border-gray-300 px-3 py-2"
          />
        </label>

        <label className="block mb-3">
          <span className="text-gray-700 font-semibold">Rent ($)</span>
          <input
            type="number"
            name="rent"
            value={formData.rent}
            onChange={handleChange}
            required
            min="0"
            className="mt-1 block w-full rounded border border-gray-300 px-3 py-2"
          />
        </label>

        <label className="block mb-3">
          <span className="text-gray-700 font-semibold">Type</span>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded border border-gray-300 px-3 py-2"
          >
            <option value="">Select a type</option>
            <option value="Family">Family</option>
            <option value="Sublet">Sublet</option>
            <option value="Bachelor">Bachelor</option>
            
          </select>
        </label>

        <label className="block mb-3">
          <span className="text-gray-700 font-semibold">Availability Date</span>
          <select
            name="availabilityDate"
            value={formData.availabilityDate}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded border border-gray-300 px-3 py-2"
          >
            <option value="">Select a day</option>
            <option value="saturday">Saturday</option>
            <option value="sunday">Sunday</option>
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
          </select>
        </label>

        <label className="block mb-3">
          <span className="text-gray-700 font-semibold">Description</span>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="mt-1 block w-full rounded border border-gray-300 px-3 py-2"
          ></textarea>
        </label>

        <label className="block mb-3">
          <span className="text-gray-700 font-semibold">Lifestyle</span>
          <input
            type="text"
            name="lifestyle"
            value={formData.lifestyle}
            onChange={handleChange}
            className="mt-1 block w-full rounded border border-gray-300 px-3 py-2"
          />
        </label>

        <label className="block mb-6">
          <span className="text-gray-700 font-semibold">Contact Number</span>
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className="mt-1 block w-full rounded border border-gray-300 px-3 py-2"
          />
        </label>
        {error && <p className="text-red-600 mb-4">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="cursor-pointer w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 rounded disabled:opacity-50"
        >
          {loading ? 'Creating...' : 'Create Listing'}
        </button>
      </form>
    </div>
  )
}

export default AddListing
