import React from 'react'

function Slider() {
  return (
    <div>
      <div className="carousel w-full h-[50vh]">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwiMEtZ_BALUCYZZn4pDpRWG7usA99Qq39FA&s"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://wallpapers.com/images/hd/apartment-background-cqslqr1i651vkk01.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://d34mfkth6cubud.cloudfront.net/wp-content/uploads/2022/12/26065935/living-in-apartments-Cover-20221226.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://resource.rentcafe.com/image/upload/q_auto,f_auto/s3/2/102601/theo2%20(copy)(1).jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    </div>
  )
}

export default Slider
