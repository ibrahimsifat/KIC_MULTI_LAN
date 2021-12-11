import React from 'react';
 import Iframe from 'react-iframe'
 import cookies from 'js-cookie'
const Foot = () => {
  const IsArabic=cookies.get('i18next') ==='ar'
    return (
       <div className={!IsArabic?'md:ml-auto md:mt-0 mt-10 sm:pl-3':'md:mr-auto md:mt-0 mt-10  sm:pr-3'}>
           
<Iframe url="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdkakin.top%2F&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=548723683095799"
        width="100%"
        data-tabs="timeline,events,messages"
        height="330px"
        id="myId"
        className="myClassname"
        display="initial"
       
        data-hide-cover="false"
        data-show-facepile="true"
      />
       </div>
    );
};

export default Foot;