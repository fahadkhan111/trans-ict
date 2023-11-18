import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import FooterAddress from "./footer-address";
import pakFlag from "../../assets/images/pakistan-flag-animated.gif";
import ugandaFlag from "../../assets/images/uganda-flag-animated.gif";
import ukFlag from "../../assets/images/uk-flag-animated.gif";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center pt-20 bg-footerBg bg-[#930000] bg-blend-luminosity">
        <div className="w-full md:max-w-screen-xl md:mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 text-gray-200 mx-10 md:mx-20 lg:mx-10">
            <div className="">
              <div className="flex flex-col gap-5">
                <h1 className="text-2xl font-semibold">About Us</h1>
                <p className="font-light">
                  A cybersecurity consultancy, which can assist you in
                  evaluating your security requirements and crafting a
                  comprehensive cybersecurity strategy that aligns with your
                  business goals.
                </p>
                <div className="flex gap-3">
                  <div className="w-10 h-10 border border-gray-200 flex justify-center items-center rounded-full hover:bg-[#B9A6A6] hover:border-none cursor-pointer">
                    <FaFacebookF className="text-white" />
                  </div>
                  <div className="w-10 h-10 border border-gray-200 flex justify-center items-center rounded-full hover:bg-[#B9A6A6] hover:border-none cursor-pointer">
                    <AiOutlineInstagram className="text-white" />
                  </div>
                  <div className="w-10 h-10 border border-gray-200 flex justify-center items-center rounded-full hover:bg-[#B9A6A6] hover:border-none cursor-pointer">
                    <AiOutlineTwitter className="text-white" />
                  </div>
                  <div className="w-10 h-10 border border-gray-200 flex justify-center items-center rounded-full hover:bg-[#B9A6A6] hover:border-none cursor-pointer">
                    <FaLinkedinIn className="text-white" />
                  </div>
                  <div className="w-10 h-10 border border-gray-200 flex justify-center items-center rounded-full hover:bg-[#B9A6A6] hover:border-none cursor-pointer">
                    <AiFillYoutube className="text-white" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex lg:justify-center">
              <div className="flex flex-col gap-5">
                <h1 className="text-2xl font-semibold">HOSTING</h1>
                <ul className="flex flex-col gap-3">
                  <li className="hover:underline cursor-pointer">WEB HOSTING</li>
                  <li className="hover:underline cursor-pointer">EMAIL SERVERS</li>
                  <li className="hover:underline cursor-pointer">VPS</li>
                  <li className="hover:underline cursor-pointer">CORPORATE DATA HOSTING</li>
                  <li className="hover:underline cursor-pointer">DATA WAREHOUSING</li>
                </ul>
              </div>
            </div>
            <div className="flex lg:justify-center">
              <div className="flex flex-col gap-5">
                <h1 className="text-2xl font-semibold">HEADQUARTERS</h1>
                <ul className="flex flex-col gap-3">
                  <li className="flex gap-2">
                    <img src={pakFlag} alt="" className="w-16" />
                    <div>
                      <h1 className="font-semibold">TransICT Pakistan</h1>
                      <p className="text-sm text-gray-400"> Islamabad</p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <img src={ugandaFlag} alt="" className="w-16" />
                    <div>
                      <h1 className="font-semibold">TransICT Uganda</h1>
                      <p className="text-sm text-gray-400">45- Princess Anne</p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <img src={ukFlag} alt="" className="w-16" />
                    <div>
                      <h1 className="font-semibold">TransICT UK</h1>
                      <p className="text-sm text-gray-400">
                        Monkston Milton Keynes
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex lg:justify-center">
              <div className="flex flex-col gap-5">
                <h1 className="text-2xl font-semibold">Recent Posts</h1>
                <ul className="flex flex-col gap-3">
                  <li className="hover:underline cursor-pointer">About Us</li>
                  <li className="hover:underline cursor-pointer">Our Mission</li>
                  <li className="hover:underline cursor-pointer">Meet The Teams</li>
                  <li className="hover:underline cursor-pointer">Our Projects</li>
                  <li className="hover:underline cursor-pointer">Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <FooterAddress />
      </div>
      <div className="py-6 bg-[#B9A6A6] flex- justify-center ">
        <div className=" w-full md:max-w-screen-xl md:mx-auto">
          <p className="text-center">Copyright © 2023. All Rights Reserved.</p>{" "}
        </div>
      </div>
    </>
  );
};

export default Footer;
