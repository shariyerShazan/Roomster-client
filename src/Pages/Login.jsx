import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { MyContext } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router";
import { auth } from "../Firebase/firebase.config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Typewriter } from 'react-simple-typewriter'

function Login() {

   useEffect(()=>{
      document.title = "Login | RoomsTer"
     })

         const provider = new GoogleAuthProvider()
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user)
        navigate('/')
        toast(`Welcome ${user.displayName}`);
      })
      .catch((error) => {
        console.error('Login failed:', error);
        toast.error("Login failed. Try again.");
      });
  };



  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate()

  const { setUser } = useContext(MyContext);



 const handleSubmit = async (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  const role = e.target.role.value;

  try {
    const response = await axios.post(
      "https://server-sepia-theta.vercel.app/api/users/login",
      {
        email,
        password,
        role,
      },
      {
        withCredentials: true,
      }
    );

    setMessage(response.data.message);
    setSuccess(true);
    console.log("response",response)

 
    const token = response.data.token;
    console.log(response.data)
    console.log(token)

    if(token){
      localStorage.setItem('token', token);

    }

    setUser(response.data.user);
    toast(`${response.data.message}`);

    setTimeout(() => {
      navigate('/');
    }, 1000);

  } catch (error) {
    setMessage(error.response?.data?.message || "Login failed");
    setSuccess(false);
  }
};


  return (
    <div className="min-h-[calc(100vh-177px)] bg-indigo-100 dark:bg-gray-800 flex justify-center py-[5vh]">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset bg-white dark:bg-gray-200 rounded-box w-xs border-y-4 border-indigo-500 dark:border-purple-500 dark:border-y-5 p-4">
          <legend className="fieldset-legend text-3xl text-red-500 ">
            Login
          </legend>
          <Typewriter
            words={['Welcome Back!', 'Login to Continue', 'RoomsTer Login']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />

          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
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
            Login
          </button>
          {
            <Link to={'/register'}>Don't have an account? <span className="text-green-500">Register</span>
            </Link>
          }
          <button
           onClick={loginWithGoogle}
          className="btn mt-2 hover:bg-indigo-100 dark:hover:bg-gray-300 text-black border-[#e5e5e5]">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Login;
