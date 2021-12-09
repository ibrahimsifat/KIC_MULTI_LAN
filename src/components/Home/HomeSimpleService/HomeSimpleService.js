import React from 'react';
import '../../../App.css'
import cookies from 'js-cookie'
import { useTranslation } from 'react-i18next';
const HomeSimpleService = () => {
    const { t } = useTranslation()
    const IsArabic=cookies.get('i18next') ==='ar'
    return (
        <div className="bg-simpleservice">
        <div className='container py-44 '>
           <section className="elementor-section elementor-top-section elementor-element elementor-element-133de06 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="133de06" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div className="elementor-container elementor-column-gap-no">
							<div className="elementor-row">
					<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c9d46a5" data-id="c9d46a5" data-element_type="column">
			<div className="elementor-column-wrap elementor-element-populated">
							<div className="elementor-widget-wrap">
						<div className="elementor-element elementor-element-67590ad bdevs-sign--top elementor-widget elementor-widget-about bdevs-el about" data-id="67590ad" data-element_type="widget" data-settings="{&quot;design_style&quot;:&quot;style_1&quot;}" data-widget_type="about.default">
				<div className="elementor-widget-container">
			
                <section className="about_section clearfix monsterratFont">
            <div className="container">
                <div className="section_title text-center mb_80 wow fadeInUp22 animated" data-wow-delay=".1s" style={{visibility:' visible', animationDelay: '0.1s'}}>
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-7 col-sm-9 col-xs-12">
                            <h4 className="small_title text-sm">
                           
                                </h4>
                                                       
                            <h2 className={!IsArabic?"text-3 md:text-4xl font-bold mb-0 monsterratFont":"text-3 md:text-4xl font-bold mb-0 arabic-font-1"}> {t('Home_SingleAbout_2')}</h2>
                                                    
                                                    </div>
                    </div>
                </div>

                <div className="row justify-content-lg-between pt-12 justify-content-md-center justify-content-sm-center">
                                        <div className=" col-lg-6 col-md-8 col-sm-10 col-xs-12">
                        <div className="about_image_2 wow fadeInUp22 animated" data-wow-delay=".3s"style={{visibility:' visible', animationDelay: '0.3s'}}>
                            <img src={"https://www.devsnews.com/wp/frintem/wp-content/uploads/2021/01/img_02.jpg"} alt="icon_not_found"/>
                                                       
            </div>
                    </div>
                    <div className="col-lg-6 col-md-8 col-sm-10 col-xs-12 ">
                    <div className="bg-white px-2">
                     <p className=" bg-white animated grid md:grid-cols-2" data-wow-delay=".5s" style={{visibility:' visible', animationDelay: '0.5s'}}>
                                                            
                         <p className="experience_image"><img className='w-full  sm:w-11/12' src="https://www.devsnews.com/wp/frintem/wp-content/uploads/2020/11/img_03.png" alt='..'/>
                                    </p>
                    <span className={!IsArabic?'monsterratFont ml-5':'arabic-font-2 mr-5'}>
                                {t('Home_SingleAbout_3')}
                                </span></p>
                                                                
                        <p className={!IsArabic?' monsterratFont ':'arabic-font-2 '}  style={{visibility:' visible', animationDelay: '0.6s'}}>  {t('Home_SingleAbout_4')}.</p> 
                            
                    <div className="avatar_wrap wow fadeInUp22 animated mt-2 flex items-center" data-wow-delay=".7s" style={{visibility:' visible', animationDelay: '0.7s'}}>
                                 <div className="avatar_image">
                                    <img className='rounded-full w-12 h-12' src="https://www.devsnews.com/wp/frintem/wp-content/uploads/2020/11/img_01.png" alt="profile"/>
                                                               </div> 
                                     <div className={!IsArabic?"avatar_content mt-2 ml-4":"avatar_content mt-2 mr-4"}> 
                                  <h4 style={{fontSize:'17px'}} className="avatar_name ">MR.ATIF JEBREAL</h4>
                                                                                                                <span className={!IsArabic?" text-sm block  -mt-1":" text-sm block -mt-1 arabic-font-1"}>  {t('Home_SingleAbout_5')}</span>
                                                                        
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
                		</div>
				</div>
						</div>
					</div>
		</div>
								</div>
					</div>
		</section>
        </div>
        </div>
    );
};

export default HomeSimpleService;