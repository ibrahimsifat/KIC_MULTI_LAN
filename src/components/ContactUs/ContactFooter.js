import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarker, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
const faceBookIcon= <FontAwesomeIcon icon={faFacebookF} />
const instagramIcon= <FontAwesomeIcon icon={faInstagram} />
const phoneIcon= <FontAwesomeIcon icon={faPhone} />
const mapIcon= <FontAwesomeIcon icon={faMapMarkerAlt} />
const envelopeIcon= <FontAwesomeIcon icon={faEnvelope} />
const ContactFooter = () => {
    // const handleInstagram=()=>{
    //     location=
    // }
    return (
        <div className='contactFooterbg'>
         <div className="">
         <div className="container monsterratFont mx-auto flex flex-col py-20 justify-center items-center  ">
                <div>
                    <h1 className='text-2xl text-white font-semibold uppercase text-center '>Mr. Atif Jebreal</h1>
                </div>
                <div className='mt-12 grid lg:grid-cols-3 md:grid-cols-2 justify-around items-center '>

                    <p className='text-xl lg:mx-10  '>
                         <i class="fas fa-phone bg-red-500 mx-2 px-3 py-2 rounded-full hover:bg-red-800 hover:text-white duration-500 text-sm"> {phoneIcon}</i>
                         <span className='text-white'>+966505353820</span>
                    </p>

                    <p className='text-xl lg:mx-10 md:my-0 my-6 '> 
                    <i class="fas fa-envelope
                    bg-red-500 mx-2 px-3 py-2 rounded-full hover:bg-red-800 hover:text-white duration-500 text-sm
                    ">{envelopeIcon}</i> 
                    <span className='text-white  '>atif@kicadv.com</span></p>

                    <p className=' lg:mt-0 md:mt-4 lg:mx-10'> 
                    <i class="fas fa-map-marker-alt
                    bg-red-500 mx-2 px-3 py-2 rounded-full hover:bg-red-800 hover:text-white duration-500 text-sm
                    ">
                        {mapIcon}
                        </i> <span className='text-white text-xl'>Address</span></p>
                </div>
                <div className='mt-12 sm:flex justify-between  items-center '>
                    <p className=' text-xl mx-4 md:mx-16 sm:mb-0 mb-6'>
                         <span className='  bg-red-500 mx-2 px-3 py-2 rounded-full hover:bg-red-800 hover:text-white duration-500 text-sm'>{faceBookIcon}</span> 
                         <span className=' text-white'>KICADV</span>
                    </p>

                    <p onClick="window.open('https://www.willmaster.com')" className=' text-xl mx-4 md:mx-16'>
                         <span className='  bg-red-500 mx-2 px-3 py-2 rounded-full hover:bg-red-800 hover:text-white duration-500 text-sm '>{instagramIcon}</span>
                        <span className='uppercase text-white'>kicadvertising</span>
                    </p>
                </div>
            </div>
         </div>
        </div>
    );
};

export default ContactFooter;