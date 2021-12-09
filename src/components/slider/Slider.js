import React from 'react';

const Slider = () => {
    return (
        <div className='bg-gray-400 mx-auto'>
          <div id="carouselExampleFade" className="carousel slide carousel-fade d-flex justify-content-center align-items-center" data-bs-ride="carousel">
  <div className="carousel-inner ">
    <div className="carousel-item active mx-auto">
      <img src="https://i.ibb.co/PGTQ1xW/dream-land.jpg" className="d-block w-75" alt="..."/>
    </div>
    <div className="carousel-item mx-auto">
      <img src="https://i.ibb.co/PGTQ1xW/dream-land.jpg" className="d-block w-75" alt="..."/>
    </div>
    <div className="carousel-item mx-auto">
      <img src="https://i.ibb.co/GtnkQTL/diner-square.jpg" className="d-block w-75" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    );
};

export default Slider;