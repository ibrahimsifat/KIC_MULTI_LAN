import React from 'react';
import { Link } from 'react-router-dom';
import LoginNavigation from '../../shared/LoginNavigation'
import AllClientsDetails from './AllClentsDetails';
import './AllClients.css'
const AllClients = () => {
    return (
        <div>
            <div className='allclientbg'>
        <LoginNavigation></LoginNavigation>
            <div className=' mt-32  flex justify-center flex-col items-center'>
            <p className="text-white font-extrabold text-3xl md:text-5xl uppercase">
                  Our Clients
                </p>
               <div className="text-white font-semibold text-xl mt-2 flex">
                   <Link className=' mr-2' to='/'>Home</Link>
                    / <span className=' ml-2 '>Clients</span>
                    </div>
        </div>
      </div>
        <div className='my-20'>
        <AllClientsDetails></AllClientsDetails>
        </div>
            
        </div>
    );
};

export default AllClients;