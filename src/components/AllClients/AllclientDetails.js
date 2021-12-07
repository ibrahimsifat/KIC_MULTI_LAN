import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import cookies from 'js-cookie'
import '../../App.css'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import Navigation3 from '../../shared/Navigation3';
import { useTranslation } from 'react-i18next';
const arrowIcon = <FontAwesomeIcon icon={faLongArrowAltLeft}/>
const RightarrowIcon = <FontAwesomeIcon icon={faLongArrowAltRight}/>
const IsArabic=cookies.get('i18next') ==='ar'
const AllclientDetails = () => {
  const { t } = useTranslation()
    const {clientId}=useParams()
    const [clients,setClients]=useState([])
    console.log(clientId);
    useEffect(()=>{
        fetch('../AllMeal.json')
        .then(res=>res.json())
        .then(data=>setClients(data))
        
    },[])
    console.log(clients);

    const matchClient=clients.filter(client=>client.id===clientId)
    console.log('mached',matchClient);
    return (
        <div >
          <Navigation3></Navigation3>
          <div className='container flex justify-start  items-center my-5 '>
       <NavLink to='/allclients' className='flex justify-center mx-14 items-center border-b no-underline text-black font-semibold px-2 hover:border duration-500 hover:text-white mx-auto'> 
            <div className='mx-2 text-white duration-500 text-4xl no-underline'> 
 
            <button  id="topButton"
        class=" z-10  hover:text-red-700 duration-500 text-black md:p-3 p-2  bottom-10 right-10 animate-bounce">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18">
            </path>
        </svg>
        <div class="absolute top-0 -left-4 w-10 h-10 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
        </button>
                      
            </div>
         
        </NavLink>
        </div>
      {/* {!IsArabic&&  <div className='container flex justify-start  items-center my-5'>
       <NavLink to='/allclients' className='flex justify-center mx-14 items-center bg-gray-400 no-underline text-black font-semibold px-2 hover:bg-gray-600 duration-500 hover:text-white '> 
            <div className='mx-2 text-white duration-500 text-4xl no-underline'> 
            <span >{arrowIcon}</span></div>
            <span className=' text-md md:text-xl text-white mb-1'>Back</span>
        </NavLink>
        </div>} */}



            {
                matchClient.map(singleClient=><SingleDetails
                key={singleClient.id}
                    singleClient={singleClient}
                ></SingleDetails>)
            }
        </div>
    );
};
const SingleDetails=({singleClient})=>{
    const {img2,img3,img4}=singleClient
    return(<>
     <div className="flex justify-center items-center ">
     {
           !img2?<div className='text-5xl font-extrabold uppercase'>there is no images avalible</div>:
           <div class="carousel-main ">
               {(img2&&img3&&img4)&& <div  id="carouselExampleDark" class="carousel carousel-dark md:w-8/12 w-9/12 mx-auto slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={img2} class="d-block  h-auto" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        {/* <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p> */}
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="1000">
      <img src={img3} class="d-block  h-auto" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        {/* <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p> */}
      </div>
    </div>
    <div class="carousel-item">
      <img src={img4} class="d-block  h-auto" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        {/* <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p> */}
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
            </div>}
               {(!img4&&img2&&img3)&& <div  id="carouselExampleDark" class="carousel carousel-dark md:w-8/12 w-9/12 h-auto mx-auto slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={img2} class="d-block  h-auto" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        {/* <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p> */}
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="1000">
      <img src={img3} class="d-block  h-auto" alt="..."/>
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
            </div>}

        {(!img3&&!img4&&img2)&&<div className="">
            <img className=' mx-auto  h-auto' src={img2} alt="" />
                    
        </div>}
         </div>
           
       }
     </div>
        </>
    )
}
export default AllclientDetails;