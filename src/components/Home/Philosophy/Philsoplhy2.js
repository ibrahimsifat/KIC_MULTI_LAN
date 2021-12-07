import React from 'react';
import LeftIcon from '../../../img/philosophyIcon.png'
import RightIcon from '../../../img/printiconrightICOn.png'
import TextRighttIcon from '../../../img/philosophyleftIcon.png'
import cookies from 'js-cookie'
import { useTranslation } from 'react-i18next';
const Philsoplhy2 = () => {
    const { t } = useTranslation()
    const IsArabic=cookies.get('i18next') ==='ar'
    return (
        <div>
            <div className={!IsArabic?'md:ml-32 mt-40 ml-5 grid grid-cols-5 ':'md:mr-32 mr-5 mt-40 4 grid grid-cols-5 '}>
                <div className='col-span-4'>
                {/* <h1 className={!IsArabic?'monsterratFont text-3xl font-extrabold sm:text-4xl md:text-4xl lg:text-5xl  uppercase':'arabic-font-1 text-3xl font-extrabold sm:text-4xl md:text-4xl lg:text-5xl  uppercase'}>{t('home_PHILOSOPHY_first')}</h1> */}
                <h1 className={!IsArabic?' py-2 md:my-2 md:text-xl text-sm monsterratFont ':'my-2 md:my-2 text-sm lg:text-xl arabic-font-1 '}>{t('home_PHILOSOPHY_second')}</h1>
                </div>
                <div>
                    <img src={TextRighttIcon} alt="" />
                </div>
            </div>
           {!IsArabic? <div className='flex justify-between items-center mb-8'>
                <img className='md:w-40 w-24 ' src={LeftIcon} alt="" />
                <img className=' md:w-52 w-32 ' src={RightIcon} alt="" />
            </div>: <div className='flex justify-between items-center'>
                <img className='' src={RightIcon} alt="" />
                <img className='' src={LeftIcon} alt="" />
            </div>}
        </div>
    );
};

export default Philsoplhy2;