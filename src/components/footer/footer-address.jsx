import React from "react";
import { TfiLocationPin } from "react-icons/tfi";
import { FiPhoneCall } from "react-icons/fi";
import { BsGlobe } from "react-icons/bs";

const FooterAddress = () => {
  return (
    <>
      <div className="w-full flex xl:justify-center md:gap-4  border-footer  border-t-gray-100  mt-10">
        <div className="w-full md:max-w-screen-xl grid grid-cols-1  py-10   md:grid-cols-2 xl:grid-cols-3 gap-5 md:justify-between mx-10 md:mx-20 lg:mx-10 xl:mx-0">
          <div className="flex gap-5 items-center xl:justify-center">
            <div className="w-20 h-20 bg-gray-200 bg-opacity-20 flex justify-center items-center rounded-full p-3">
              <TfiLocationPin className="w-10 h-10 text-white  opacity-100" />
            </div>
            <div className=" flex flex-col gap-1 text-white ">
              <p className="text-xl">Location</p>
              <p className="text-gray-300 text-sm md:text-md">TransICT Islamabad,Pakistan</p>
            </div>
          </div>

          <div className="flex gap-5 items-center xl:justify-center md:border-footer-around">
            <div className="w-20 h-20 bg-gray-200 bg-opacity-20 flex justify-center items-center rounded-full p-3">
              <FiPhoneCall className="w-10 h-10 text-white  opacity-100" />
            </div>
            <div className=" flex flex-col gap-1 text-white ">
              <p className="text-xl">Contact</p>
              <div className="flex flex-row md:flex-col gap-3">
                <p className="text-gray-300 text-sm md:text-md">+92-42-35460401</p>
              </div>
            </div>
          </div>

          <div className="flex gap-5 items-center xl:justify-center">
            <div className="w-20 h-20 bg-gray-200 bg-opacity-20 flex justify-center items-center rounded-full p-3">
              <BsGlobe className="w-10 h-10 text-white  opacity-100" />
            </div>
            <div className=" flex flex-col gap-1 text-white ">
              <p className="text-xl">Website</p>
              <div className="flex flex-row md:flex-col gap-3">
                <p className="text-gray-300 text-sm md:text-md">transict.com </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterAddress;
