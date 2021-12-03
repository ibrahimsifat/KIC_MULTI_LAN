import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import '../../App.css'
import { NavLink } from 'react-router-dom';
import cookies from 'js-cookie'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import Navigation2 from '../../shared/Navigation2';
const leftArrowIcon = <FontAwesomeIcon icon={faLongArrowAltLeft}/>
const rightArrowIcon = <FontAwesomeIcon icon={faLongArrowAltRight}/>
const IsArabic=cookies.get('i18next') ==='ar'
const AllProfileDetails = () => {
    const {portfoliotId}=useParams()
    const [clients,setClients]=useState([])
    console.log(portfoliotId);
    useEffect(()=>{
        fetch('../AllPortfolio.json')
        .then(res=>res.json())
        .then(data=>setClients(data))
        
    },[])
    console.log(clients);

    const matchClient=clients.filter(client=>client.id===portfoliotId)
    console.log('mached',matchClient);
    return (
        <div>
          <Navigation2></Navigation2>
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
    const {img}=singleClient
    return(<>
      

<div className="container mx-auto my-16 py-8 px-16 rounded-lg border">
      <NavLink to='/allportfolio' className='hover:text-gray-200 duration-500 text-5xl no-underline'
> <span >{leftArrowIcon}</span></NavLink>

          <img  className='my-16 w-11/12 md:w-8/12 mx-auto' src={img} alt="" />
            
      
    <div className=" mx-auto px-6 md:px-16   ">
        {/* <div className="bg-white 2">
            <h3 className="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9 dark:text-white">
                {"title"}
            </h3>
            <p className="mt-6 text-base leading-6 text-gray-500 dark:text-gray-200">
                {"description"}
            </p>
            <div className="mt-8">
                <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 bg-white dark:bg-gray-800 text-sm leading-5 tracking-wider font-semibold uppercase text-blue-600">
                        What&#x27;s included
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200">
                    </div>
                </div>
                <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                    <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                        <RightSVG></RightSVG>
                        </div>
                        <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                        Specilaized Bilingual Guide

                        </p>
                    </li>
                    <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                        <RightSVG></RightSVG>
                        </div>
                        <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                        Private Transport
                        </p>
                    </li>
                    <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                        <RightSVG></RightSVG>
                        </div>
                        <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                        Entrance Fees
                        </p>
                    </li>
                    <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                        <RightSVG></RightSVG>
                        </div>
                        <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                        Box Lunch,Water,Dinner and Snacks
                        </p>
                    </li>
                    <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                        <RightSVG></RightSVG>
                        </div>
                        <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                        Additional Services

                        </p>
                    </li>
                    <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                            <RightSVG></RightSVG>

                        </div>
                        <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                        Drink
                        </p>
                    </li>
                    
                </ul>
            </div>
            <div className="mt-8">
                <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 bg-white text-sm dark:bg-gray-800 leading-5 tracking-wider font-semibold uppercase text-blue-600">
                        &amp; What&#x27;s not
                    </h4>
                </div>
                <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                    <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                        <CloseSVG></CloseSVG>
                        </div>
                        <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                        Insurance
                        </p>
                    </li>
                    <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                            <CloseSVG></CloseSVG>
                        </div>
                        <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                        Tickets</p>
                    </li>
                </ul>
            </div>
           
        </div> */}
        {/* <button
            
            //  onClick={()=>handleAddCartBtn(match)}
                className="mx-auto px-6 mb-10 block py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-blue-900 hover:bg-blue-600 hover:shadow-lg focus:outline-none"
            >
                Book Now
            </button> */}
    </div>
</div>






    


  

        </>
    )
}


// const CloseSVG=()=>{
//     return(
//         <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" className="h-6 w-6 mr-2" fill="red" viewBox="0 0 1792 1792">
//         <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
//         </path>
//     </svg>
//     )
// }

// const RightSVG=()=>{
//     return(
//  <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
//                                 <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
//                                 </path>
//                             </svg>
//     )
// }
export default AllProfileDetails;