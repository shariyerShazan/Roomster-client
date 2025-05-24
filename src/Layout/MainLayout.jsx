import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router'
import LoadingSpinner from '../Components/LoadingSpinner';

function MainLayout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
        <Navbar />
        {loading ? <LoadingSpinner /> : <Outlet />}
        <Footer />
    </div>
  )
}

export default MainLayout
