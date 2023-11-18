import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import ContactForm from "./contact-form";

const Contact = () => {
  return (
    <div className=" flex justify-center  ">
      <div className="max-w-screen-xl w-full ">
        <div className="flex flex-col lg:flex-row  my-10 gap-10 mx-5 md:mx-20 lg:mx-10">
          <div className="lg:w-1/2 w-full">
            <p className="mb-5">HAVE ANY QUESTION?</p>
            <h1 className="text-5xl mb-8"> Let’s Discuss About Something</h1>
            <p className="text-gray-500">
              At our IT solution company, we are committed to providing
              exceptional customer service and support. If you are experiencing
              technical difficulties or need assistance with one of our
              services,
            </p>
            <div className="flex flex-col gap-5 p-5 my-5 border rounded-xl">
              <p className="text-xl font-semibold">Follow Us:</p>
              <div className="flex gap-5">
                <div className="w-10 h-10 bg-gray-200 hover:bg-[#930000] text-[#930000]  hover:text-white flex justify-center items-center rounded-full transition-colors duration-300 ease-in-out cursor-pointer">
                  <FaFacebookF />
                </div>
                <div className="w-10 h-10 bg-gray-200 hover:bg-[#930000] text-[#930000]  flex hover:text-white justify-center items-center rounded-full transition-colors duration-300 ease-in-out cursor-pointer">
                  <AiOutlineInstagram />
                </div>
                <div className="w-10 h-10 bg-gray-200 hover:bg-[#930000] text-[#930000]  flex hover:text-white justify-center items-center rounded-full transition-colors duration-300 ease-in-out cursor-pointer">
                  <AiOutlineTwitter />
                </div>
                <div className="w-10 h-10 bg-gray-200 hover:bg-[#930000] text-[#930000]  hover:text-white flex justify-center items-center rounded-full transition-colors duration-300 ease-in-out cursor-pointer">
                  <FaLinkedinIn />
                </div>
                <div className="w-10 h-10 bg-gray-200 hover:bg-[#930000] text-[#930000]  hover:text-white flex justify-center items-center rounded-full transition-colors duration-300 ease-in-out cursor-pointer">
                  <AiFillYoutube />
                </div>
              </div>
              <p className="text-gray-500 underline">
                Get Google Map Directions
              </p>
            </div>
          </div>

          <div className="lg:w-2/3 w-full">
            <div className="border rounded-xl p-10 bg-contactBg bg-cover bg-[#930000] bg-blend-luminosity">
              <h1 className="text-2xl font-semibold text-white">
                Fill The Contact Form
              </h1>
              <p className=" text-white">
                Feel free to contact with us, we don’t spam your email
              </p>

              <ContactForm />
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Contact;
