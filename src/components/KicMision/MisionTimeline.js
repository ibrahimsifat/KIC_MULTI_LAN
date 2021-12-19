import React from 'react';
import { useTranslation } from 'react-i18next';

const VisionStyle={
  backgroundColor:'#02BFFB'
}
const ValueStyle={
  backgroundColor:'#00ACFB'
}
const MissionStyle={
  backgroundColor:'#1F7EC5'
}
const MisionTimeline = () => {
  const { t } = useTranslation()
    return (
        <div className=' mx-auto'>
            <div className="border-l-2 mt-10">
       <Slide title={t('Mission_one')}
       description={t('Mission_two')}
       VisionStyle={VisionStyle}
       ></Slide>

       <Slide title={t('Mission_three')}
       description={t('Mission_four')}
       VisionStyle={ValueStyle}
       ></Slide>

       <Slide title={t('Mission_five')}
       description={t('Mission_six')}
       VisionStyle={MissionStyle}
       ></Slide>
     
      </div>
        </div>
    );
};

const Slide=({title,description,VisionStyle})=>{
   return(
    <div
    style={VisionStyle}
    className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4  text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
      
    <div
       style={VisionStyle}
        className="w-5 h-5 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

 
    <div 
    style={VisionStyle}
    className="w-10 h-1 absolute -left-10 z-0"></div>


    <div className="flex-auto">
      <h1 className="text-xl font-bold">{title}</h1>
      <h1 className="text-sm font-bold">{description}</h1>
    </div>

  </div>
   )
}
export default MisionTimeline;