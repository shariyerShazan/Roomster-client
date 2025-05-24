import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router";
import { MyContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
// import axiosInstance from '../lib/axiosInstance'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'


function MyListing() {
  const [myDatas, setMyDatas] = useState([]);
  const { user } = useContext(MyContext);

  useEffect(() => {
    document.title = "My Listing | RoomsTer";
  });

  useEffect(() => {
    if (!user) return;

    axios
      .get(
        `https://server-sepia-theta.vercel.app/api/posts/get-admin-post/${user?._id}`
      )
      .then((res) => {
        setMyDatas(res.data.post);
        console.log("response", res);
      })
      .catch((err) => console.error(err));
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://server-sepia-theta.vercel.app/api/posts/delete/${id}`,
            {
              withCredentials: true,
            }
          )
          .then(() => {
            setMyDatas((prev) => prev.filter((item) => item._id !== id));
          })
          .catch((err) => console.error(err));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="min-h-[calc(100vh-177px)] bg-indigo-100 dark:bg-gray-800 py-10">
      <div className="w-[95%] md:w-[90%] mx-auto bg-white dark:bg-gray-200 p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-indigo-600 mb-6 text-center">
          My Listings
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-2 border-indigo-500 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-indigo-200 text-indigo-700">
                <th className="px-4 py-3 text-left">#</th>
                <th className="px-4 py-3 text-left">Photo</th>
                <th className="px-4 py-3 text-left">Title</th>
                <th className="px-4 py-3 text-left">Location</th>
                <th className="px-4 py-3 text-left">Rent</th>
                <th className="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {myDatas.map((data, i) => (
                <tr
                  key={i}
                  className="border-t hover:bg-indigo-50 transition-all"
                >
                  <td className="px-4 py-3">{i + 1}</td>
                  <td className="px-4 py-3">
                    <img
                      src={data?.roomPictureURL}
                      alt="Room"
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="px-4 py-3 font-medium">{data.title}</td>
                  <td className="px-4 py-3">{data.location}</td>
                  <td className="px-4 py-3 text-red-500">${data.rent}</td>
                  <td className="px-4 py-3 text-center">


                    <Link
                      to={`edit/${data._id}`}
                      data-tooltip-id={`tooltip-${i}`}
                      data-tooltip-content="Edit this listing"
                    >
                      <button className="px-4 ml-1 mt-1 sm:mt-0 cursor-pointer py-1 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-md">Edit</button>
                    </Link>
                    <Tooltip id={`tooltip-${i}`} place="top" />


                    <button
                     data-tooltip-id={`tooltip-${i}`}
                     data-tooltip-content="delete this listing"
                      onClick={() => handleDelete(data._id)}
                      className="px-4 ml-1 mt-1 sm:mt-0 cursor-pointer py-1 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-md"
                    >
                      Delete
                    </button>
                    {/* <Tooltip id={`tooltip-${i}`} place="top" /> */}
                  </td>
                </tr>
              ))}
              {myDatas.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-6 text-gray-500">
                    No listings found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MyListing;
