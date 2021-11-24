import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import LoginNavigation from '../../shared/LoginNavigation';

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
        <div>
          <LoginNavigation></LoginNavigation>
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
           !img2?<div>there is no images avalible</div>:
           <div class="carousel slide">
           <div class="carousel-inner">
            <div className="md:flex mt-32 justify-around items-center flex-warp">
              <img className='md:w-96 h-96 w-11/12 border mx-auto ' src={img2} alt="" />
              <img className='md:w-96 h-96 w-11/12 border mx-auto' src={img3} alt="" />
              <img className='md:w-96 h-96 w-11/12 border mx-auto' src={img4} alt="" />
            </div>
         </div>
         </div>
           
       }
     </div>
        </>
    )
}
export default AllclientDetails;