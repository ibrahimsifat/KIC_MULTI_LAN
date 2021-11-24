import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ContactUs.css'
import emailjs from 'emailjs-com'
const ContactBannertwo = () => {
  const [success,setSuccess]=useState(false)
  const handleSendEmail=(e)=>{
    
      e.preventDefault()

      emailjs.sendForm('service_1p4ozx7','template_fwxjzlq',e.target,'user_7owOWYzc38X9uk4D1hh4s')
      .then(res=>{
          if(res.status=== 200){
       
              setSuccess(true)
          }
          
          }
      )
      .finally(setSuccess(false))

    }

    const { t } = useTranslation()
  const massageAlert=<div class="bg-green-100 rounded-lg p-4 mb-4 text-sm text-green-700" role="alert">
  <span class="font-medium">
  {t('Contact_one')}</span>
  </div>



    return (
        <div>
           {success&& massageAlert}
              <div class=" bg-white">
    <div class="bgContactBanner to-blue-600 h-96"></div>
    <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 ">
        <div class="bg-white w-full  rounded p-8 sm:p-12 -mt-72">
            <p class="text-3xl font-bold leading-7 text-center uppercase">{t('Contact_two')}</p>
            <form onSubmit={handleSendEmail}>
                <div class="md:flex items-center mt-12">
                <div class="relative z-0 w-full mb-5">
        <input
          type="text"
          name="name"
          placeholder=" "
          required
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-b-1 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
        />
        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">{t('Contact_three')}</label>
        <span class="text-sm text-red-600 hidden" id="error">Name is required</span>
      </div>
      <div class="relative z-0 w-full mb-5 md:ml-9">
        <input
          type="email"
          name="user-email"         
          placeholder=" "
          required
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-b-1 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
        />
        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">{t('Contact_four')}</label>
        <span class="text-sm text-red-600 hidden" id="error">Name is required</span>
      </div>
              
                    
                </div>
                <div class="relative z-0 w-full mb-5">
        <input
          type="text"
          name="name"
          placeholder=" "
          required
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-b-1 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
        />
        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">{t('Contact_seven')}</label>
        <span class="text-sm text-red-600 hidden" id="error">Subject is required</span>
      </div>
      <div class="relative z-0 w-full mb-5">
        <textarea
          type="text"
          name="name"
          placeholder=" "
          required
          class="pt-3  block w-full px-0 mt-0 bg-transparent border-b-1 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400 h-32"
        ></textarea>
        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">{t('Contact_five')}</label>
        <span class="text-sm text-red-600 hidden" id="error">Message is required</span>
      </div>
              
                <div class="flex items-center justify-center w-full">
                    <button class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none" type='submit'>
                      
                        Send message
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
        </div>
    );
};

export default ContactBannertwo;