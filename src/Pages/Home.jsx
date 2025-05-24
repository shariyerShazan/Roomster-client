import React, { useEffect } from 'react'
import Slider from '../Components/Slider'
import HeroSection from '../Components/HeroSection'
// import FeaturedListings from '../Components/Features'
// import HeroAnimation from '../Components/HeroAnimation'

function Home() {

   useEffect(()=>{
      document.title = "Home | RoomsTer"
     })
  return (
    <div className='min-h-[calc(100vh-177px)] bg-indigo-100'>
      {/* <HeroAnimation /> */}
      <Slider />
      <HeroSection />
      
    </div>
  )
}

export default Home
