import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import LoginNavigation from '../../shared/LoginNavigation';
import '../../App.css'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
const arrowIcon = <FontAwesomeIcon icon={faLongArrowAltLeft}/>
const AllclientDetails = () => {
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
          <LoginNavigation></LoginNavigation>
        <div className='container'>
        <NavLink to='/allclients' className=' hover:text-gray-200 duration-500 text-5xl no-underline'
> <span >{arrowIcon}</span></NavLink>
        </div>
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
    const {id,title,img,img2,img3,img4}=singleClient
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
      <img src={img2} class="d-block" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        {/* <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p> */}
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="1000">
      <img src={img3} class="d-block" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        {/* <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p> */}
      </div>
    </div>
    <div class="carousel-item">
      <img src={img4} class="d-block" alt="..."/>
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
               {(!img4&&img2&&img3)&& <div  id="carouselExampleDark" class="carousel carousel-dark md:w-8/12 w-9/12 mx-auto slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={img2} class="d-block" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        {/* <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p> */}
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="1000">
      <img src={img3} class="d-block" alt="..."/>
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
            <img className=' mx-auto ' src={img2} alt="" />
                    
        </div>}
         </div>
           
       }
     </div>
        </>
    )
}
export default AllclientDetails;