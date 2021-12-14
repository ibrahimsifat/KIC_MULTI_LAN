import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import '../../App.css'
import { NavLink } from 'react-router-dom';

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
          
          <div className='container flex justify-start  items-center my-5 '>
       <NavLink to='/allclients' className='flex justify-center mx-14 items-center border-b-2 border-purple-900 no-underline text-black font-semibold px-2 duration-300  mx-auto'> 
            <div className='mx-2 text-white duration-500 text-4xl no-underline'> 
 
            <button  id="topButton"
        className=" z-10  hover:text-red-700 duration-500 text-black md:p-3 p-2  bottom-10 right-10 animate-bounce">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18">
            </path>
        </svg>
        <div className="absolute top-0 -left-4 w-10 h-10 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
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
           <div className="carousel-main ">
               {(img2&&img3&&img4)&& <div  id="carouselExampleDark" className="carousel carousel-dark md:w-8/12 w-9/12 mx-auto slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={img2} className="d-block  h-auto" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        {/* <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p> */}
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="1000">
      <img src={img3} className="d-block  h-auto" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        {/* <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p> */}
      </div>
    </div>
    <div className="carousel-item">
      <img src={img4} className="d-block  h-auto" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        {/* <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p> */}
      </div>
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
            </div>}
               {(!img4&&img2&&img3)&& <div  id="carouselExampleDark" className="carousel carousel-dark md:w-8/12 w-9/12 h-auto mx-auto slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={img2} className="d-block  h-auto" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        {/* <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p> */}
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="1000">
      <img src={img3} className="d-block  h-auto" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        {/* <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p> */}
      </div>
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
            </div>}

        {(!img3&&!img4&&img2)&&<div className="">
            <img className=' mx-auto  md:my-16 my-3 w-full md:w-11/12 border-3 border-purple-900 h-auto' src={img2} alt="" />
                    
        </div>}
         </div>
           
       }
     </div>
 
        </>
    )
}
export default AllclientDetails;