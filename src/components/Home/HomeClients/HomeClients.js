import React, { useEffect } from 'react';
import clientBgIcon from '../../../img/client-bg-icon.png'
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie'
import { CarouselProvider, Slider} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import SingleHomeSlide from './SingleHomeSlide';
import { useState } from 'react/cjs/react.development';
import { useHistory } from 'react-router';
const HomeClients = () => {

    const IsArabic=cookies.get('i18next') ==='ar'
    let history=useHistory()
    const handlehomeClients=(id)=>{
        const url= `allclientsdetails/${id}`
        history.push(url)

console.log(id);
    }
    const { t } = useTranslation()
    const [users,setUsers]=useState([])

    useEffect(()=>{
        fetch('../AllMeal.json')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
   
    return (
        <div className='-mt-24'>
            <div className={!IsArabic?"my-24 relative monsterratFont":"my-24 relative arabic-font-1"}>
                <div className=' md:px-20'> 
                <h1 className='lg:ml-20 ml:mx-10 sm:mx-8 mx-16  text-3xl font-extrabold sm:text-4xl md:text-4xl lg:text-5xl textred my-4 uppercase'>{t('home_clients_first')}</h1>
              
      
        {/* <div className="2xl:mx-auto 2xl:container flex justify-center">
            
            <div className="2xl:px-20 px-6 py-2 w-full lg:w-4/5">
             
                <CarouselProvider className="relative block sm:hidden" naturalSlideWidth={50} isIntrinsicHeight={true} totalSlides={8} visibleSlides={3} step={3} infinite={true}>
                    <div className="js-flickity flex justify-center items-center">
                        
                        <Slider>
                        {
                            users.map(user=><SingleHomeSlide
                            key={user.id}
                            user={user}
                            handlehomeClients={handlehomeClients}
                            >

                            </SingleHomeSlide>)
                        }
                   
                        </Slider>
                      
                    </div>
                </CarouselProvider>

           
                <CarouselProvider className="relative hidden sm:block" naturalSlideWidth={50} isIntrinsicHeight={true} totalSlides={8} visibleSlides={3} step={3} infinite={true} currentSlide={1}>
                    <div className="js-flickity flex justify-center items-center">
                   
                        <Slider className="carousel__sliderLarge">
                           
                        {
                            users.map(user=><SingleHomeSlide
                            key={user.id}
                            user={user}
                            handlehomeClients={handlehomeClients}
                            >

                            </SingleHomeSlide>)
                        }
                        </Slider>
                       
                    </div>
                </CarouselProvider>
            </div>
        </div> */}

                </div>
         <div className='relative'>
         <img className='md:w-36 w-24 pb-4 absolute top-10 md:top-5 left-2' src={clientBgIcon} alt="" />
         </div>
            </div>
        </div>
    );
};

export default HomeClients;