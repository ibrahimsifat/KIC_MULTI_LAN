
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../../App.css'
// import Jump from 'react-reveal/Jump';


// const cart = <FontAwesomeIcon icon={faShoppingCart} />
const search=<FontAwesomeIcon icon={faSearch}/>

const SingleClients = ({client,handleClientDetails}) => {
    const {img,img2,img3,img4,id}=client
  
    return (
           <div className=" mx-auto  w-32 img-hover duration-700  ">  
            <div className=" transition duration-300 ease-in-out xl:mb-0 lg:mb-0 md:mb-0 mb-6 cursor-pointer group">
                
                <div className="overflow-hidden relative shadow my-2 rounded-2xl item-zoom">
               
                <img className="w-full transition duration-700    " src={img} alt="" />
          
                    <div className="absolute bottom-0  h-full w-full flex justify-center items-center bg-gradient-to-r from-blue-900 group-hover:bg-opacity-75   transition duration-500 ease-in-out opacity-0 group-hover:opacity-100 ">
                
   
   
               <div className='flex flex-col  justify-center items-center '>

               {/* <h2 className=' text-2xl font-semibold text-white'></h2>
                <p className='text-white text-md mt-1'></p> */}
                <i
        className=" text-white  font-bold uppercase text-2xl hover:text-3xl px-4 py-2 rounded  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-500"
        type="button"
        onClick={() => handleClientDetails(id)}
      ><i className="fas fa-search transition duration-500 hover:scale:110 ">{search}</i>
 
      </i>
               </div>

                    </div>
                </div>
            </div>
            
 

    

            </div>

   

    );
};

export default SingleClients;