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
           <section class="elementor-section elementor-top-section elementor-element elementor-element-133de06 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="133de06" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div class="elementor-container elementor-column-gap-no">
							<div class="elementor-row">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c9d46a5" data-id="c9d46a5" data-element_type="column">
			<div class="elementor-column-wrap elementor-element-populated">
							<div class="elementor-widget-wrap">
						<div class="elementor-element elementor-element-67590ad bdevs-sign--top elementor-widget elementor-widget-about bdevs-el about" data-id="67590ad" data-element_type="widget" data-settings="{&quot;design_style&quot;:&quot;style_1&quot;}" data-widget_type="about.default">
				<div class="elementor-widget-container">
			
                <section class="about_section clearfix monsterratFont">
            <div class="container">
                <div class="section_title text-center mb_80 wow fadeInUp22 animated" data-wow-delay=".1s" style={{visibility:' visible', animationDelay: '0.1s'}}>
                    <div class="row justify-content-center">
                        <div class="col-lg-8 col-md-7 col-sm-9 col-xs-12">
                            <h4 class="small_title text-sm">
                           
                                </h4>
                                                       
                            <h2 class={!IsArabic?"text-3 md:text-4xl font-bold mb-0 monsterratFont":"text-3 md:text-4xl font-bold mb-0 arabic-font-1"}> {t('Home_SingleAbout_2')}</h2>
                                                    
                                                    </div>
                    </div>
                </div>

                <div class="row justify-content-lg-between pt-12 justify-content-md-center justify-content-sm-center">
                                        <div class=" col-lg-6 col-md-8 col-sm-10 col-xs-12">
                        <div class="about_image_2 wow fadeInUp22 animated" data-wow-delay=".3s"style={{visibility:' visible', animationDelay: '0.3s'}}>
                            <img src={"https://www.devsnews.com/wp/frintem/wp-content/uploads/2021/01/img_02.jpg"} alt="icon_not_found"/>
                                                       
            </div>
                    </div>
                    <div class="col-lg-6 col-md-8 col-sm-10 col-xs-12 ">
                    <div class="bg-white px-2">
                     <p class=" bg-white animated grid md:grid-cols-2" data-wow-delay=".5s" style={{visibility:' visible', animationDelay: '0.5s'}}>
                                                            
                         <p class="experience_image"><img className='w-full  sm:w-11/12' src="https://www.devsnews.com/wp/frintem/wp-content/uploads/2020/11/img_03.png" alt='..'/>
                                    </p>
                    <span className={!IsArabic?'monsterratFont ml-5':'arabic-font-2 mr-5'}>
                                {t('Home_SingleAbout_3')}
                                </span></p>
                                                                
                        <p className={!IsArabic?' monsterratFont ':'arabic-font-2 '}  style={{visibility:' visible', animationDelay: '0.6s'}}>  {t('Home_SingleAbout_4')}.</p> 
                            
                    <div class="avatar_wrap wow fadeInUp22 animated mt-2 flex items-center" data-wow-delay=".7s" style={{visibility:' visible', animationDelay: '0.7s'}}>
                                 <div class="avatar_image">
                                    <img className='rounded-full w-12 h-12' src="https://www.devsnews.com/wp/frintem/wp-content/uploads/2020/11/img_01.png" alt="profile"/>
                                                               </div> 
                                     <div class={!IsArabic?"avatar_content mt-2 ml-4":"avatar_content mt-2 mr-4"}> 
                                  <h4 style={{fontSize:'17px'}} class="avatar_name ">MR.ATIF JEBREAL</h4>
                                                                                                                <span class={!IsArabic?" text-sm block  -mt-1":" text-sm block -mt-1 arabic-font-1"}>  {t('Home_SingleAbout_5')}</span>
                                                                        
                                    
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