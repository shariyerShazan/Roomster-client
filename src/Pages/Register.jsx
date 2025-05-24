import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { MyContext } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router";
import { Typewriter } from "react-simple-typewriter";

function Register() {

   useEffect(()=>{
      document.title = "Register | RoomsTer"
     })


  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate()

  const { setUser } = useContext(MyContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;
    const role = e.target.role.value;

    try {
      const response = await axios.post(
        "https://server-sepia-theta.vercel.app/api/users/register",
        {
          name,
          email,
          photoURL,
          password,
          role,
        },
        {
          withCredentials: true,
        }
      );
        const token = response.data?.token
        if(token){
          localStorage.setItem("token" ,token)
        }
      

      setMessage(response.data.message);
      // console.log("response" , response.data)
      setSuccess(true);
      setUser(response.data.user);
      toast(`${response.data.message}`);

      setTimeout(() => {
        navigate('/')
      }, 1000);

    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed");
      console.log(error);
      setSuccess(false);
      // toast.error("Login failed");
    }
  };

  return (
    <div className="min-h-[calc(100vh-177px)] bg-indigo-100 dark:bg-gray-800 flex justify-center py-[5vh]">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset bg-white dark:bg-gray-200 rounded-box w-xs border-y-4 border-indigo-500 dark:border-purple-500 dark:border-y-5 p-4">
          <legend className="fieldset-legend text-3xl text-red-500">
            Register
          </legend>
          <Typewriter
                      words={['Welcome Back!', 'Register to Continue', 'RoomsTer Register']}
                      loop={true}
                      cursor
                      cursorStyle="|"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1500}
                    />

          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Name"
            required
          />

          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            required
          />
          <label className="label">PhotoURL</label>
          <input
            type="text"
            name="photoURL"
            className="input"
            placeholder="Photo URL"
            required
          />

          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
            required
          />

          <label className="label">Role</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="role"
                value="user"
                defaultChecked
                className="radio"
              />
              User
            </label>
            <label className="flex items-center gap-1">
              <input type="radio" name="role" value="admin" className="radio" />
              Admin
            </label>
          </div>

          {message && (
            <p
              className={`mt-3 text-sm ${
                success ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}

          <button type="submit" className="btn btn-neutral mt-4">
            Register
          </button>
          {
            <Link to={'/login'}>Alreay have an account? <span className="text-green-500">Login</span>
            </Link>
          }
          
        </fieldset>
      </form>
    </div>
  );
}

export default Register;
