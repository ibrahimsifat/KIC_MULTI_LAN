import React, { useEffect, useState } from 'react';


import SingleClients from './SingleClients';
const AllClientsDetails = () => {
const [clients,setClients]=useState([])

    useEffect(()=>{
        fetch('../AllMeal.json')
        .then(res=>res.json())
        .then(data=>setClients(data))
        
    },[])
    return (
        <div className='container mx-auto grid lg:grid-cols-6 md:grid-cols-5 grid-cols-2 gap-4 my-0'>   
            {
                clients.map(client=><SingleClients
                key={client.id}
                client={client}
                ></SingleClients>)
            }
        </div>
    );
};
export default AllClientsDetails;