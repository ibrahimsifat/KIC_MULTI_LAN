import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarker, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router';
const faceBookIcon= <FontAwesomeIcon icon={faFacebookF} />
const instagramIcon= <FontAwesomeIcon icon={faInstagram} />
const phoneIcon= <FontAwesomeIcon icon={faPhone} />
const mapIcon= <FontAwesomeIcon icon={faMapMarkerAlt} />
const envelopeIcon= <FontAwesomeIcon icon={faEnvelope} />
const ContactFooter = () => {
    let history=useHistory()
    const handleFaceBook=()=>{
        window.location.href='https://www.facebook.com/KIC-Printing-Advertising-333673783382403/'
    }
    const handleInstagram=()=>{
        window.location.href='https://www.instagram.com/kicadvertising/'
    }
    // const handleInstagram=()=>{
    //     location=
    // }
    return (
        <div className='contactFooterbg'>
         <div className="">
         <div className="container monsterratFont mx-auto flex flex-col py-20 justify-center items-center  ">
              
                <div className='mt-12 grid lg:grid-cols-3 md:grid-cols-2 justify-around items-center '>

                    <p className='text-xl lg:m-10  text-white m-3'>
                         <i className="fas fa-phone bg-indigo-600 mx-2 px-3 py-2 rounded-full hover:bg-indigo-800 hover:text-white duration-500 text-sm"> {phoneIcon}</i>
                         <span className='text-white'>+966505353820</span>
                    </p>

                    <p className='text-xl lg:m-10 m-3  text-white'> 
                    <i className="fas fa-envelope
                    bg-indigo-600 mx-2 px-3 py-2 rounded-full hover:bg-indigo-800 hover:text-white duration-500 text-sm
                    ">{envelopeIcon}</i> 
                    <span className='text-white  '>atif@kicadv.com</span></p>

                    <p className=' lg:mt-0 md:mt-4  text-white lg:m-10 m-3'> 
                    <i className="fas fa-map-marker-alt
                    bg-indigo-600 mx-2 px-3 py-2 rounded-full hover:bg-indigo-800 hover:text-white duration-500 text-sm
                    ">
                        {mapIcon}
                        </i> <span className='text-white text-xl'>Address</span></p>
                </div>
                <div className='mt-12 sm:flex justify-between  items-center '>
                    <p
                    onClick={handleFaceBook}
                    className=' text-xl mx-4 md:mx-16 cursor-pointer'>
                         <span className=' text-white bg-indigo-600 mx-2 px-3 py-2 rounded-full hover:bg-indigo-800 hover:text-white duration-500 text-sm'>{faceBookIcon}</span> 
                         <span className=' text-white'>KICADV</span>
                    </p>

                    <p 
                    
                    onClick={handleInstagram} className=' text-xl mx-4 md:mx-16'>
                         <span className='  text-white bg-indigo-600 mx-2 px-3 py-2 rounded-full hover:bg-indigo-800 hover:text-white duration-500 text-sm '>{instagramIcon}</span>
                        <span className='uppercase text-white'>KICADV</span>
                    </p>
                </div>
            </div>
         </div>
        </div>
    );
};

export default ContactFooter;