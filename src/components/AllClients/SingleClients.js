
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../../App.css'
// import Jump from 'react-reveal/Jump';


// const cart = <FontAwesomeIcon icon={faShoppingCart} />
const search=<FontAwesomeIcon icon={faSearch}/>

const SingleClients = ({client,handleClientDetails}) => {
    const {img,img2,img3,img4,id}=client
    const [showModal, setShowModal] = React.useState(false);
    return (
           <div className=" mx-auto  w-32 img-hover duration-700  ">  
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
        onClick={() => handleClientDetails(id)}
      ><i className="fas fa-search transition duration-500 hover:scale:110 ">{search}</i>
 
      </i>
               </div>

                    </div>
                </div>
            </div>
            
 

    <>
     
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between">
                  
                  <button
                    className="p-1 ml-auto mr-3 border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className=" relative  h-6 w-6 text-3xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative mx-auto ">
              {!img2&& <h1 className='text-center font-bold'>No Images</h1>}
             
             <div className='px-5 grid md:grid-cols-2'>
             <img className='block mx-auto mb-5 md:w-80' src={img2} alt="" />
             {img3&& <img className='block mx-auto mb-5 md:w-80' src={img3} alt="" />}
             {img4&& <img className='block mx-auto mb-5 md:w-80' src={img4} alt="" />}
  
             </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end ">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  {/* <button
                    className="bg-emerald-500  active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded  hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
 

            </div>

   

    );
};

export default SingleClients;