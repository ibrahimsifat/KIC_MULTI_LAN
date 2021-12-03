import React from 'react';
import cookies from 'js-cookie'
import slider1 from '../../img/Recognition1.jpg'
import slider2 from '../../img/Recognition2.jpg'
import './AllClients.css'
import { useTranslation } from 'react-i18next';
import Navigation2 from '../../shared/Navigation2';
const ClientsRecognition = () => {
  const IsArabic=cookies.get('i18next') ==='ar'
  const { t } = useTranslation()
    return (
        <div>
            <Navigation2></Navigation2>
           <div className=" mb-16 flex justify-center items-center">
         <img src={t('clientRecognitionBanner')} alt="" />
        
           </div>
         <div className='bg-client-award'>
         <div  id="carouselExampleDark" class="carousel carousel-dark md:w-8/12 w-9/12 mx-auto slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 2"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={slider1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        {/* <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p> */}
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="1000">
      <img src={slider2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        {/* <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p> */}
      </div>
    </div>

  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
         </div>
        </div>
    );
};

export default ClientsRecognition;