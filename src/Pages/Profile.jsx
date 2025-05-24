import React, { useContext, useEffect } from "react";
import { MyContext } from "../Context/AuthContext";
import { useNavigate } from "react-router";

const Profile = () => {

   useEffect(()=>{
      document.title = "Profile | RoomsTer"
     })


  const { user } = useContext(MyContext);
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-lg text-red-500">Please login to view profile.</p>
        <button onClick={() => navigate('/')} className="btn mt-4 btn-primary">
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-150px)] bg-indigo-100 dark:bg-gray-800">
      <div className="bg-white dark:bg-gray-100 shadow-md rounded-xl p-8 w-full max-w-sm">
        <div className="flex justify-center mb-4">
          <img
            src={`${user?.photoURL}`}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-indigo-500"
          />
        </div>
        <h2 className="text-xl font-semibold text-center text-indigo-600">
          {user?.name || user?.displayName}
        </h2>
        <p className="text-center text-gray-600">{user?.email}</p>
        <p className="text-center mt-2">
          <span className="font-semibold text-gray-700">Role:</span>{" "}
          <span className="capitalize">{user?.role}</span>
        </p>
        <button
          onClick={() => navigate('/')}
          className="btn  bg-indigo-100 hover:bg-indigo-200 btn-sm mt-6 w-full"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Profile;
