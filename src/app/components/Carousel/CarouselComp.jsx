import React from 'react'
import Image from 'next/image'

const CarouselComp = () => {
  return (
    <div>

<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <Image src="/carousel-img-5.jpg" width={`800`} height={`600`} className="d-block w-100" alt="carousel-img-1"/>
    </div>
    <div className="carousel-item">
    <Image src="/carousel-img-2.jpg" width={`800`} height={`600`} className="d-block w-100" alt="carousel-img-1"/>

    </div>
    <div className="carousel-item">
    <Image src="/carousel-img-3.jpg" width={`800`} height={`600`} className="d-block w-100" alt="carousel-img-1"/>

    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default CarouselComp