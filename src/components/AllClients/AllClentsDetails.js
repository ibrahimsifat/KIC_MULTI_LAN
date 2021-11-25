import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';


import SingleClients from './SingleClients';
const AllClientsDetails = () => {
const [clients,setClients]=useState([])

    useEffect(()=>{
        fetch('../AllMeal.json')
        .then(res=>res.json())
        .then(data=>setClients(data))
        
    },[])
    let history=useHistory()
    const handleClientDetails=(id)=>{
        const url= `allclientsdetails/${id}`
        history.push(url)

console.log(id);
    }
    return (
        <div className='bg-gray-200'>
        <div className='container mx-auto grid lg:grid-cols-6 md:grid-cols-5 grid-cols-2  my-0 py-16 '>   
            {
                clients.map(client=><SingleClients
                key={client.id}
                client={client}
                handleClientDetails={handleClientDetails}
                ></SingleClients>)
            }
        </div>
        </div>
    );
};
export default AllClientsDetails;