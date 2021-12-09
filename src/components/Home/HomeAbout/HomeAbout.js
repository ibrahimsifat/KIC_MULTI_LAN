import cookies from 'js-cookie'
import { faChevronRight,  faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import Img from '../../../img/home-about.png'


const pincilICon=<FontAwesomeIcon size='2x' icon={faPencilRuler}/>
const right=<FontAwesomeIcon  icon={faChevronRight}/>

function HomeAbout() {
    const IsArabic=cookies.get('i18next') ==='ar'
    const { t } = useTranslation()
    return (
        <>
            <div className="md:mx-auto md:container px-4">
                
                <div className="pb-32 pt-16">
                    <div className="mx-auto">
                        <div className="flex flex-wrap flex-row-reverse items-end">
                            <div className={!IsArabic?"md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0":
                            "md:w-1/2 lg:w-2/3 w-full lg:pr-20 md:pr-10 sm:pr-0 pr-0 arabic-font-1"
                            }>
                                <div className="py-2 text-color">
                                <h1 className='text-purple-800  text-xl'>{t('home_vision_five')}</h1>
           
                                    <h1 className="text-2xl md:text-4xl lg:text-5xl mt-3 md:leading-snug font-extrabold">{t('home_vision_first')}</h1>
                                    <h2 className="text-lg lg:text-xl leading-7 md:leading-10 f-f-r pt-4 pb-8">{t('home_vision_second')}</h2>
                                    <NavLink to='aboutus' className={!IsArabic?"flex items-center cursor-pointer no-underline  pb-4 md:pb-0":
                                    "flex items-center  cursor-pointer no-underline  pb-4 md:pb-0 "
                                    }>
          <p className="f-f-r text-lg lg:text-2xl flex-row-reverse font-semibold  no-underline text-purple-800">{IsArabic&&<span className=' text-purple-800 text-sm mb-2 pb-1'>{right}</span>} {t('home_vision_three')} {!IsArabic&&<span className=' text-purple-800 text-sm mb-2 pb-1'>{right}</span>}
         </p>
                                        <div className="pl-2">
                                         
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                                <img className="absolute w-full h-full inset-0 object-cover object-center rounded-md" src={Img} alt=''/>
                                <div className="relative z-10 p-4 bg-white shadow rounded mx-auto w-8/12  -mb-16">
                                 
                                    <div className="mt- flex items-center ">
                                        <span className="text-white bg-purple-800 md:p-2 p-2 rounded-md">
                                        <span>{pincilICon}</span>
                                        </span>
                                        <p className={!IsArabic?" text-xl font-bold md:ml-3 ml-2 text-gray-800":" text-xl font-bold md:mr-4 mr-2 text-gray-800"}>{t('home_vision_four')}</p>
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