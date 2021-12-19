import React from 'react';
import { useParams } from 'react-router';
import '../../App.css'
import { NavLink } from 'react-router-dom';
import usePortfolio from '../../shared/usePortfolio';

const AllProfileDetails = () => {
    const {portfoliotId}=useParams()
    const [clients]=usePortfolio()


    const matchClient=clients.filter(client=>client.id===portfoliotId)
    
    return (
        <div>
    
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
      

<div className="container mx-auto mt-8 pt-8 px-3 md:px-6 rounded-lg ">
<div className='container flex justify-start  items-center my-5 '>
       <NavLink to='/allportfolio' className='flex justify-center mx-14 items-center border-b-2 border-purple-900 no-underline text-black font-semibold px-2 duration-300  mx-auto'> 
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

          <img  className='md:my-16 my-3 w-full md:w-10/12 mx-auto border-3 border-purple-900' src={img} alt="" />
            
      
    
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