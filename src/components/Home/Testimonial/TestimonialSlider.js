import React, { useEffect, useState } from "react";
import { CarouselProvider, Slider} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import Testimonial from "./Testimonial";


/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function TestimonialSlider() {
    const [users,setUsers]=useState([])

    useEffect(()=>{
        fetch('../AllMeal.json')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    return (
        <>
         <div className='my-16'>
                <h2 className="text-2xl leading-6 text-gray-800 text-center px-4">Testimonials</h2>
                <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold px-4 leading-10 text-gray-800 mt-6 text-center">What our client says</h1>
             
            </div>
        <div className="2xl:mx-auto 2xl:container flex justify-center">
            
            <div className="2xl:px-20 px-6 py-12 w-full lg:w-4/5">
                {/* Carousel for Small-Sized Screen */}
                <CarouselProvider className="relative block sm:hidden" naturalSlideWidth={50} isIntrinsicHeight={true} totalSlides={8} visibleSlides={3} step={3} infinite={true}>
                    <div className="js-flickity flex justify-center items-center">
                   
                        <Slider>
                        {
                            users.map(user=><Testimonial
                            key={user.id}
                            user={user}
                            >

                            </Testimonial>)
                        }
                   
                        </Slider>
                      
                    </div>
                </CarouselProvider>

                {/* Carousel for Medium and Large-Sized Screen */}
                <CarouselProvider className="relative hidden sm:block" naturalSlideWidth={50} isIntrinsicHeight={true} totalSlides={8} visibleSlides={3} step={3} infinite={true} currentSlide={1}>
                    <div className="js-flickity flex justify-center items-center">
                   
                        <Slider className="carousel__sliderLarge">
                           
                        {
                            users.map(user=><Testimonial
                            key={user.id}
                            user={user}
                            >

                            </Testimonial>)
                        }
                        </Slider>
                       
                    </div>
                </CarouselProvider>
            </div>
        </div>
        </>
    );
}

