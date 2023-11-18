import React from "react";
import people from "../../assets/people.png";
import { BsSquareFill } from "react-icons/bs";

const Services = () => {
  return (
    <>
      <div className="flex justify-center my-20 mb-5 ">
        <div className=" grid lg:grid-cols-2 grid-cols-1 w-[80%] xl:mt-64 md:mt-[500px] mt-[73rem]  md:w-[80%] 2xl:w-[75%] ">
          <div className=" flex items-center">
            <div className="  ">
              <div className="flex items-center">
                <BsSquareFill className="text-[#930000] w-3 h-3" />

                <p className="ml-2">WELCOME TO OUR COMPANY</p>
              </div>
              <p className="text-[44px] text-[#1C1C25] leading-[58px] mt-3">
                We Make Awesome IT Services For Your Newly Business
              </p>
              <div className="sm:flex sm:flex-row flex flex-col gap-4  mt-9 ">
                <button
                  type="submit"
                  className="text-black bg-[#B9A6A6] shadow-md hover:bg-[#930000] hover:text-white font-medium rounded-full text-lg w-full sm:w-auto px-5 py-2.5 text-center transition-colors duration-300"
                >
                  Get a Quote
                </button>
                <div className=" flex items-center   ">
                  <div className="">
                    <p className="text-[#930000] font-semibold text-[18px]">
                      Call Us: 258-3258 235
                    </p>
                    <p className="font-semibold text-[18px]">
                      {" "}
                      For any question
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex justify-center items-center  sm:mt-0  mt-1">
            <img src={people} className="w-[100%]" alt=""></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
