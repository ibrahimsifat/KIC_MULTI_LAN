import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
const search=<FontAwesomeIcon icon={faPlus}/>
const SingleHomeSlide = ({user,handlehomeClients}) => {
    const{img,id}=user
    return (
        <div className='w-10/12 mx-3'>  
        <div className="p-4 w-32 h96"></div>
        <div className=" transition duration-300 ease-in-out xl:mb-0 lg:mb-0 md:mb-0 mb-6 cursor-pointer group">
                <div className="overflow-hidden relative rounded-2xl item-zoom">
               
                <img className="w-full transition duration-700  rounded-xl  " src={img} alt="" />
          
                    <div className="absolute bottom-0  h-full w-full flex justify-center items-center group-hover:bg-gray-700 group-hover:bg-opacity-75   transition duration-500 ease-in-out opacity-0 group-hover:opacity-100 ">
                
   
   
               <div className='flex flex-col  justify-center items-center '>

               {/* <h2 className=' text-2xl font-semibold text-white'></h2>
                <p className='text-white text-md mt-1'></p> */}
                <i
        className=" text-white  font-bold uppercase text-2xl hover:text-3xl px-4 py-2 rounded  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-500"
        type="button"
        onClick={ ()=>handlehomeClients(id)}
      ><i className="fas fa-search transition duration-500 hover:scale:110 ">{search}</i>
 
      </i>
               </div>

                    </div>
                </div>
            </div>
                </div>
                                      
      
    );
};

export default SingleHomeSlide;