// import { faHeart,faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import { NavLink ,useHistory} from 'react-router-dom';
import '../../App.css'

import Zoom from 'react-reveal/Zoom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const search=<FontAwesomeIcon icon={faSearch}/>
const SinglePortfolio = ({portfolio}) => {


  let history=useHistory()
  const handleClientDetails=(id)=>{
      const url= `allportfoliodetails/${id}`
      history.push(url)

console.log(id);
  }
  const {img,id,des}=portfolio
    const [showModal, setShowModal] = React.useState(false);
    return (
   
           <div className=" mx-auto  img-hover duration-700  ">  
           
            <div className="transition duration-300 ease-in-out xl:mb-0 lg:mb-0 md:mb-0 mb-6 cursor-pointer group">
              <Zoom >   
                <div className="overflow-hidden relative item-zoom"  onClick={() => handleClientDetails(id)}>
               
                <img className="w-full transform transition hover:scale-105 duration-300 ease-in-out " src={img} alt="" />
          
                    <div className="absolute bottom-0 duration-700 h-full w-full flex justify-center items-center bg-gray-900 group-hover:bg-opacity-90   transition duration-500 ease-in-out opacity-0 group-hover:opacity-100 ">
                
   
   
               <div className='flex flex-col  justify-center items-center '>

               {/* <h2 className=' text-2xl font-semibold text-white'>{title}</h2> */}
                
                <i
        className="   font-bold uppercase text-2xl hover:text-3xl px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
       
      ><h1 className=' px-3 py-1 text-white hover:scale transition transform duration-500 rounded-full text-black'><i className="fas fa-search">{search}</i></h1>
 
      </i>
               </div>

                    </div>
                </div>
            </Zoom>
            </div>
 

 

            </div>

          

    );
};

export default SinglePortfolio;