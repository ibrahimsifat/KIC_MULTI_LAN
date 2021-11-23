import React from 'react';

const Slider = () => {
    return (
        <div className='bg-gray-400 mx-auto'>
          <div id="carouselExampleFade" class="carousel slide carousel-fade d-flex justify-content-center align-items-center" data-bs-ride="carousel">
  <div class="carousel-inner ">
    <div class="carousel-item active mx-auto">
      <img src="https://i.ibb.co/PGTQ1xW/dream-land.jpg" class="d-block w-75" alt="..."/>
    </div>
    <div class="carousel-item mx-auto">
      <img src="https://i.ibb.co/PGTQ1xW/dream-land.jpg" class="d-block w-75" alt="..."/>
    </div>
    <div class="carousel-item mx-auto">
      <img src="https://i.ibb.co/GtnkQTL/diner-square.jpg" class="d-block w-75" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    );
};

export default Slider;