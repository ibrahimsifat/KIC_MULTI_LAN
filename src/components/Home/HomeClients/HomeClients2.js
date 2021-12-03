import React, { useEffect, useState } from 'react';
import { CarouselProvider, Slider} from "pure-react-carousel";
import SingleHomeSlide from './SingleHomeSlide';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
import clientBgIcon from '../../../img/client-bg-icon.png'
const HomeClients2 = () => {
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
        <div className='-mt-4 mb-8 container'>
            <div className=' md:px-5'> 
                <h1 className=' text-3xl font-extrabold sm:text-4xl md:text-4xl lg:text-5xl textred my-4 uppercase'>{t('home_clients_first')}</h1>
                <div className="2xl:mx-auto 2xl:container flex justify-center">
            </div>
            <div className="mx-auto 2xl:px-20 px-6 py-2 w-full lg:w-4/5">
             
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
        </div> 
        <div className='relative'>
         <img className='md:w-36 w-24 pb-4 absolute -top-3 md:-top-10 left-2' src={clientBgIcon} alt="" />
         </div>
        </div>
    );
};

export default HomeClients2;