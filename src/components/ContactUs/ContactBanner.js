import React, { useState } from 'react';
import LoginNavigation from '../../shared/LoginNavigation';
import emailjs from 'emailjs-com'
import './ContactUs.css'
const ContactBanner = () => {
    const [success,setSuccess]=useState(false)
    const handleSendEmail=(e)=>{
      
        e.preventDefault()

        emailjs.sendForm('service_1p4ozx7','template_fwxjzlq',e.target,'user_7owOWYzc38X9uk4D1hh4s')
        .then(res=>{
            if(res.status=== 200){
         
                setSuccess(true)
            }
            
            }
        ).catch(error=>console.log(error))
       e.target.reset()
    }

const massageAlert=<div class="bg-green-100 rounded-lg p-4 mb-4 text-sm text-green-700" role="alert">
<span class="font-medium">Successfully sent the message!</span>
</div>
    return (
        <div className='contact_bg_img'>
         <div className='pt-10'>
         <LoginNavigation></LoginNavigation>
    <div className='flex justify-center items-center monsterratFont md:mx-8 mx-4'>
            <div>
                {success&& massageAlert}
                <h1 className='mt-16 monsterratFont tracking-tighter font-extrabold uppercase text-white text-3xl sm:text-5xl md:text-4xl lg:text-5xl mb-6 lg:mb-8'>send us a message</h1>
                <div  className='w-12/12'>
                    <form onSubmit={handleSendEmail}>
                    <div>
                        <label className='block text-white font-semibold pb-2 text-xl' htmlFor="Name">Name: </label>
                        <input className=' text-white p-1 outline-none bg-transparent border-2 w-full' type="text" name="name" id="" required />
                    </div>
                        <div className='mt-6'>
                            <label className='block text-white font-semibold pb-2 text-xl' htmlFor="Email">Email: </label>
                            <input className=' text-white p-1 outline-none bg-transparent border-2 w-full' type="email" name="user-email" id="" required />
                        </div>
                        <div className='mt-6'>
                            <label className='block text-white font-semibold pb-2 text-xl' htmlFor="Email">Message:: </label>
                            <textarea className=' text-white p-1 h-36 outline-none bg-transparent border-2 w-full' type="text" name="message" id="" required/>
                        </div>
                        <div className="mt-4 flex justify-end items-center">
                        <button type='submit' className='uppercase mb-16 font-semibold text-white py-1 px-5 border-2'>Submit</button>
                        </div>
                        </form>
                </div>
            </div>
    </div>
         </div>
        </div>
    );
};

export default ContactBanner;