import React from 'react';
 import Iframe from 'react-iframe'
 import cookies from 'js-cookie'
const Foot = () => {
  const IsArabic=cookies.get('i18next') ==='ar'
    return (
       <div className={!IsArabic?'md:ml-auto md:mt-0 mt-10 sm:pl-3':'md:mr-auto md:mt-0 mt-10  sm:pr-3'}>
           
<Iframe url="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fkicadv%2F&tabs=timeline%2Cmessages%2Ccomments%2Clike%2Cshare%2Cpost&width=340&height=500&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=true&appId=3200451866854971"
       
        height="370" style={{border:"none",overflow:"hidden"}} scrolling="no" frameborder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
       </div>
    );
};

export default Foot;