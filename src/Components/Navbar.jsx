import React, { useContext} from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { MyContext } from "../Context/AuthContext";
import {  ToastContainer } from "react-toastify";
// import Swal from 'sweetalert2'
// import axios from "axios";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
// import axios from "axios";

function Navbar() {
  const {user , setUser , theme , setTheme} =  useContext(MyContext)

  const navigate = useNavigate()



  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  
  const handleLogout = async () => {
    await localStorage.removeItem("token" )
    setUser(null)
    signOut(auth)
    navigate('/login')
 
  };
  
  
  return (
    <div className="bg-indigo-900 text-white shadow-2xl border-b-2 border-indigo-600 dark:bg-gray-900 dark:text-white">
      <ToastContainer />
      <div className="navbar w-[90%] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-3"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "border-b-red-500 border-b-2 rounded-lg hover:bg-indigo-800 dark:hover:bg-gray-800" : "hover:bg-indigo-700 dark:hover:bg-gray-700"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/listing"
                  className={({ isActive }) =>
                    isActive ? "border-b-red-500 border-b-2 rounded-lg hover:bg-indigo-800 dark:hover:bg-gray-800" : "hover:bg-indigo-700 dark:hover:bg-gray-700"
                  }
                >
                  Listing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/my-listing`}
                  className={({ isActive }) =>
                    isActive ? "border-b-red-500 border-b-2 rounded-lg hover:bg-indigo-800 dark:hover:bg-gray-800" : "hover:bg-indigo-700 dark:hover:bg-gray-700"
                  }
                >
                  My Listings
                </NavLink>
              </li>
              <li>
              <NavLink
                to={`/add-listing/`}
                className={({ isActive }) =>
                  isActive ? "border-b-red-500 border-b-2 rounded-lg hover:bg-indigo-800 dark:hover:bg-gray-800" : "hover:bg-indigo-700 dark:hover:bg-gray-700"
                }
              >
                Create Listings
              </NavLink>
            </li>
              <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "border-b-red-500 border-b-2 rounded-lg hover:bg-indigo-800 dark:hover:bg-gray-800" : "hover:bg-indigo-700 dark:hover:bg-gray-700"
                }
              >
                About
              </NavLink>
            </li>
            </ul>
          </div>
          <a className="btn bg-indigo-800 dark:bg-gray-800 text-red-500 hover:bg-indigo-800 dark:hover:bg-gray-800 border-none shadow-none  text-xl">RoomsTer</a>
          {
          <>
              <button
              onClick={()=>handleTheme()}
               className={`ml-6 cursor-pointer  hover:scale-110 ${theme === "dark" ? "block ": "hidden"}`}>
            <CiLight size={25} />
          </button>
          <button
          onClick={()=>handleTheme()}
          className={`ml-6 cursor-pointer  hover:scale-110 ${theme === "dark" ? "hidden ": "block"}`}>
            <MdDarkMode size={25}/>
          </button>
          </>
        }
        </div>
        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "border-b-red-500 border-b-2 rounded-lg hover:bg-indigo-800 dark:hover:bg-gray-800" : "hover:bg-indigo-700 dark:hover:bg-gray-700"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/listing"
                className={({ isActive }) =>
                  isActive ? "border-b-red-500 border-b-2 rounded-lg hover:bg-indigo-800 dark:hover:bg-gray-800" : "hover:bg-indigo-700 dark:hover:bg-gray-700"
                }
              >
                Listing
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/my-listing/`}
                className={({ isActive }) =>
                  isActive ? "border-b-red-500 border-b-2 rounded-lg hover:bg-indigo-800 dark:hover:bg-gray-800" : "hover:bg-indigo-700 dark:hover:bg-gray-700"
                }
              >
                My Listings
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/add-listing/`}
                className={({ isActive }) =>
                  isActive ? "border-b-red-500 border-b-2 rounded-lg hover:bg-indigo-800 dark:hover:bg-gray-800" : "hover:bg-indigo-700 dark:hover:bg-gray-700"
                }
              >
                Create Listings
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "border-b-red-500 border-b-2 rounded-lg hover:bg-indigo-800 dark:hover:bg-gray-800" : "hover:bg-indigo-700 dark:hover:bg-gray-700"
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
        {
            
          }
  {
  user ? (
    <div className="flex items-center gap-2 relative z-10">
      <div className="group">
      <Link to={'/profile'} className=" relative">
        <img
          src={`${user.photoURL
          }`}
          alt="User"
          className="w-10 h-10 rounded-full cursor-pointer"
        />  
      </Link>
      <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute top-12 sm:right-16 right-0 w-max bg-green-700 px-5 py-2 rounded-md text-white z-50">
          {user?.name || user?.displayName} | Visit Profile
          {/* {
            console.log(user.photoURL
            )
          } */}
        </span>
      </div>
      <Link
        onClick={() => handleLogout()}
        className="btn bg-indigo-800 hover:bg-indigo-700 dark:bg-gray-800 dark:hover:bg-gray-700 shadow-none text-white border-x-2 rounded-md border-y-0 border-red-700 ml-2"
      >
        Logout
      </Link>
    </div>
  ) : (
    <div className="flex items-center gap-2">
      <Link
        to="/login"
        className="btn bg-indigo-800 hover:bg-indigo-700 dark:bg-gray-800 dark:hover:bg-gray-700 shadow-none text-white border-x-2 rounded-md border-y-0 border-red-700"
      >
        Login
      </Link>
      <Link
        to="/register"
        className="btn bg-indigo-800 hover:bg-indigo-700 dark:bg-gray-800 dark:hover:bg-gray-700 shadow-none text-white border-x-2 rounded-md border-y-0 border-red-700"
      >
        Register
      </Link>
    </div>
  )
}

</div>

      </div>
    </div>
  );
}

export default Navbar;
