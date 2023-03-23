import emailjs from "emailjs-com";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "react-toastify/dist/ReactToastify.css";
import "./ContactUs.css";
const ContactBanner = () => {
  //   const notify = () => toast("Wow so easy!");
  const { t } = useTranslation();
  const [success, setSuccess] = useState(false);
  const handleSendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1vgctci",
        "template_fwxjzlq",
        e.target,
        "user_7owOWYzc38X9uk4D1hh4s"
      )
      .then((res) => {
        if (res.status === 200) {
          setSuccess(true);
        }
      })
      .catch((error) => console.log(error));
    e.target.reset();
    // notify();
  };

  const massageAlert = (
    <div
      className="bg-green-100 rounded-lg p-4 mb-4 text-sm text-green-700"
      role="alert"
    >
      <span className="font-medium">{t("Contact_one")}</span>
    </div>
  );
  return (
    <div className="contact_bg_img">
      <div className="pt-">
        <div className="flex justify-center items-center md:mx-8 mx-4">
          <div>
            {success && massageAlert}
            <h1 className="mt-16 tracking-wider tracking-tighter font-extrabold uppercase text-white text-3xl sm:text-5xl md:text-4xl lg:text-5xl mb-6 md:mx-32 lg:mb-8">
              {t("Contact_two")}
            </h1>
            <div className="w-full">
              <form onSubmit={handleSendEmail} className="w-full">
                <div className=" ">
                  <label
                    className="block text-white font-semibold pb-2 text-xl"
                    htmlFor="name"
                  >
                    {t("Contact_three")}:{" "}
                  </label>
                  <input
                    className=" text-white p-1 outline-none bg-transparent border-2 w-full"
                    type="text"
                    name="name"
                    id=""
                    required
                  />
                </div>
                <div className="mt-6">
                  <label
                    className="block text-white font-semibold pb-2 text-xl"
                    htmlFor="Email"
                  >
                    {t("Contact_four")}:{" "}
                  </label>
                  <input
                    className=" text-white p-1 outline-none bg-transparent border-2 w-full"
                    type="email"
                    name="user-email"
                    id=""
                    required
                  />
                </div>
                <div className="mt-6">
                  <label
                    className="block text-white font-semibold pb-2 text-xl"
                    htmlFor="Email"
                  >
                    {t("Contact_five")}:{" "}
                  </label>
                  <textarea
                    className="overflow-auto	 text-white p-1 h-36 outline-none bg-transparent border-2 w-full"
                    type="text"
                    name="message"
                    id=""
                    required
                  />
                </div>
                <div className="mt-4 flex justify-end items-center">
                  <button
                    type="submit"
                    className="hover:bg-indigo-900 duration-300 bg-opacity-50 uppercase mb-16 font-semibold text-white py-1 px-5 border-2"
                  >
                    {" "}
                    {t("Contact_six")}
                  </button>
                  {/* <ToastContainer /> */}
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
