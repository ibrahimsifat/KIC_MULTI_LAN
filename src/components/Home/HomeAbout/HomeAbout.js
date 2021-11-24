import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { faChevronRight, faCube, faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import Img from '../../../img/home-about.png'


const pincilICon=<FontAwesomeIcon size='2x' icon={faPencilRuler}/>
const cubeICon=<FontAwesomeIcon  icon={faCube}/>
const right=<FontAwesomeIcon  icon={faChevronRight}/>

function HomeAbout() {
    const { t } = useTranslation()
    return (
        <>
            <div className="md:mx-auto md:container px-4">
                
                <div className="pb-32 pt-16">
                    <div className="mx-auto">
                        <div className="flex flex-wrap flex-row-reverse items-center">
                            <div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
                                <div className="py-2 text-color">
                                <h1 className='text-purple-800  text-xl'>About Us</h1>
           
                                    <h1 className="text-2xl md:text-4xl lg:text-5xl mt-3 md:leading-snug font-extrabold">{t('home_vision_first')}</h1>
                                    <h2 className="text-lg lg:text-xl leading-7 md:leading-10 f-f-r pt-4 pb-8">{t('home_vision_second')}</h2>
                                    <NavLink to='aboutus' className="flex items-center cursor-pointer no-underline  pb-4 md:pb-0">
                                        <p className="f-f-r text-lg lg:text-2xl font-semibold  no-underline text-purple-800"> Explore</p>
                                        <div className="pl-2">
                                         <h1 className=' text-purple-800 text-sm mb-2 pb-1'>{right}</h1>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                                <img className="absolute w-full h-full inset-0 object-cover object-center rounded-md" src={Img} alt=''/>
                                <div className="relative z-10 p-4 bg-white shadow rounded mx-auto w-8/12  -mb-16">
                                 
                                    <div className="mt- flex items-center ">
                                        <span className="text-white bg-purple-800 p-2 rounded-md">
                                        <span>{pincilICon}</span>
                                        </span>
                                        <p className="ml-1 text-xl font-bold ml-3 text-gray-800  ">Fast and quality service</p>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeAbout;