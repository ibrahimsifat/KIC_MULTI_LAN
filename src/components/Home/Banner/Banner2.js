import React from 'react';
import homebg from '../../../img/homebg-02.jpg'
import printIcon from '../../../img/printicon.png'
import graphicIcon from '../../../img/homeBG.jpg'
import webDev from '../../../img/web-home-icon.png'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import cookies from 'js-cookie'
const Banner2 = () => {
    const { t } = useTranslation()
    const IsArabic=cookies.get('i18next') ==='ar'
    return (
        <div>
          <body class="" >
  
<div>

    <div style={{background: "#270B55"}} class=" md:overflow-hidden">
      <div class="px-4 py-20 md:py-4">
        <div class="md:max-w-6xl md:mx-auto">
          <div class="md:flex md:flex-wrap ">
            <div class="md:w-1/2 text- md:text- md:pt-16">
            <div className={!IsArabic?'text-left px-4  md:my-0 my-8 md:pt-0 pt-8 ':
            'text-right px-4  md:my-0 my-8 md:pt-0 pt-8 '
        }>
                <p><span className=' text-3xl md:text-3xl text-white'>{t('home_banner_first')}</span> <span className='textred text-3xl sm:text-5xl md:text-5xl lg:text-6xl  font-bold'> {t('home_banner_second')}</span></p>
                 <p className=' text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-white'>{t('home_banner_three')}</p>
                 <p className='textred font-bold text-3xl sm:text-5xl md:text-5xl lg:text-6xl'>{t('home_banner_fourth')}</p>
                </div>

              <NavLink to='aboutus'
                
                class="mt-6 md:mx-4 mx-7 mb-12 md:mb-0 md:mt-10 inline-block py-2 px-8 text-white bgred hover:bg-purple-900 duration-500 rounded-lg shadow text-start no-underline"
                >More</NavLink>
            </div>
            <div class="md:w-1/2 relative">
              <div class="hidden md:block">
                <div
                  class={!IsArabic?"-ml-24 -mb-40 absolute left-0 bottom-0 w-40 bg-white rounded-lg shadow-lg px-6 py-8 transform -rotate-12 z-10"
                    :
                    "-mr-24 -mb-10 absolute right-0 bottom-0 w-40 bg-white rounded-lg shadow-lg px-6 py-8 transform -rotate-12 z-10"
                }
                
                >
                 
                <img src={printIcon} alt="" />
                  <div class="text-gray-800 font-bold text-center">
                  PRINTING <br />SERVICES 


                  </div>
                </div>

                <div
                  class={!IsArabic?"ml-24 mb-16 absolute left-0 bottom-0 w-40 bg-white rounded-lg shadow-lg px-6 py-8 transform -rotate-12"
                :
                "mr-40 mb-16 absolute right-0 bottom-0 w-40 bg-white rounded-lg shadow-lg px-6 py-8 transform -rotate-12"
                }
                  style={{zIndex:'2'}}
                >
                  <img src={graphicIcon} alt="" /> 

                  <div class="text-gray-800 font-bold mt-2 text-center">
                    GRAPHIC DESIGN
                  </div>
                </div>

                <div
                  class={!IsArabic?"ml-40 mb-16 absolute left-0 bottom-0 w-40 bg-white rounded-lg shadow-lg px-6 py-8 transform -rotate-12"
                    :
                    "mr-24 mb-16 absolute right-0 bottom-0 w-40 bg-white rounded-lg shadow-lg px-6 py-8 transform -rotate-12"
                 }
                  style={{zIndex:'2',marginBottom:'-220px'}}
                >
                  <img src={webDev} alt="" /> 

                  <div class=" font-bold text-gray-800 text-center">
                  MARKETING 
 <br />CAMPAIGNS
                     
                  </div>
                </div>

                <div
                  class={!IsArabic?"mt-10 w-full absolute right-0 top-0 flex rounded-lg bg-white overflow-hidden transform -rotate-12"
                :
                "mt-10 w-full absolute -left-52 top-0 flex rounded-lg bg-white overflow-hidden transform -rotate-12"
                }
                style={{zIndex:'1',marginRight:'-220px'}}
                >
                  <div class="" style={{height:' 560px'}}></div>
                <img src={homebg} alt="" />
                </div>

                <div
                  class="w-full absolute left-0 bottom-0 ml-1 transform  -rotate-12"
                 style={{zIndex:'1',marginBottom:'-360px'}}
                >
                  <div class="grid--gray h-48 w-48"></div>
                </div>
              </div>

           
            </div>
          </div>
        </div>
      </div>
      <svg
        class="fill-current text-white hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path fill-opacity="1" d="M0,224L1440,32L1440,320L0,320Z"></path>
      </svg>
    </div>

  
</div>
</body>
        </div>
    );
};

export default Banner2;