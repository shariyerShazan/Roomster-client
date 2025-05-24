import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router";
import { MyContext } from "../Context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const PrivateRoute = ({ children }) => {
  const { user } = useContext(MyContext);
  const [showRedirect, setShowRedirect] = useState(false);

  useEffect(() => {
    if (!user) {
      toast.warn("Please login first!");
      const timer = setTimeout(() => {
        setShowRedirect(true);
      }, 1000); 

      return () => clearTimeout(timer); 
    }
  }, [user]);

  if (!user && showRedirect) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      {!user && <ToastContainer />}
      {user && children}
    </>
  );
};

export default PrivateRoute;
