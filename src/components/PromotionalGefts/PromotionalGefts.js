import React from 'react';
import Img from '../../img/promotional-gefts-(1).JPG'
import Img2 from '../../img/promotional-gefts-(2).JPG'

import Navigation3 from '../../shared/Navigation3';
const PromotionalGefts = () => {
    return (
        <div>
            <Navigation3></Navigation3>
            <div id="carouselExampleDark" className="carousel carousel-dark w-8/12 slide mx-auto bg-gray-700" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={Img} className="d-block w-100" alt="..."/>
      
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={Img2} className="d-block w-100" alt="..."/>
      {/* <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div> */}
    </div>
  
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    );
};

export default PromotionalGefts;