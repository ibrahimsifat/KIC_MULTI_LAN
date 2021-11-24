import React from 'react';
import './ContactUs.css'
const ContactBannertwo = () => {
    return (
        <div>
              <div class=" bg-white">
    <div class="bgContactBanner to-blue-600 h-96"></div>
    <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 ">
        <div class="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72">
            <p class="text-3xl font-bold leading-7 text-center ">Contact me</p>
            <form action="" method="post">
                <div class="md:flex items-center mt-12">
                <div class="relative z-0 w-full mb-5">
        <input
          type="text"
          name="name"
          placeholder=" "
          required
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-b-1 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter Email</label>
        <span class="text-sm text-red-600 hidden" id="error">Name is required</span>
      </div>
      <div class="relative z-0 w-full mb-5 ml-9">
        <input
          type="text"
          name="name"
          placeholder=" "
          required
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-b-1 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter name</label>
        <span class="text-sm text-red-600 hidden" id="error">Name is required</span>
      </div>
              
                    
                </div>
                <div class="relative z-0 w-full mb-5">
        <input
          type="text"
          name="name"
          placeholder=" "
          required
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-b-1 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Subject</label>
        <span class="text-sm text-red-600 hidden" id="error">Name is required</span>
      </div>
      <div class="relative z-0 w-full mb-5">
        <textarea
          type="text"
          name="name"
          placeholder=" "
          required
          class="pt-3  block w-full px-0 mt-0 bg-transparent border-b-1 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 h-32"
        ></textarea>
        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Massage</label>
        <span class="text-sm text-red-600 hidden" id="error">Name is required</span>
      </div>
              
                <div class="flex items-center justify-center w-full">
                    <button class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
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