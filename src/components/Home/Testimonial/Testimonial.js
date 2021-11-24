import React from "react";


const Testimonial=({user})=>{
    const{img}=user
    return(
         <div className='w-10/12 mx-3'>  
                    <div className="p-4 w-32 h96"></div>

                   <img src={img} alt="" />
                                                  
                    </div>
    )
}
export default Testimonial