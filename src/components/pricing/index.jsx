import React from "react";
import PersonIcon from "../../assets/icons/person.svg";
import { BsCheckCircle, BsSquareFill } from "react-icons/bs";

const Pricing = () => {
  return (
    <div className="flex justify-center my-10">
      <div className="max-w-screen-xl w-full text-center mx-5 md:mx-20 lg:mx-10">
        <div className="flex flex-col gap-5 items-center">
          <div className="flex items-center gap-3 text-sm">
            <BsSquareFill className="text-[#930000] w-3 h-3" />
            <p className="text-md uppercase">Pricing Plans</p>
            <BsSquareFill className="text-[#930000] w-3 h-3" />
          </div>

          <h1 className="text-5xl font-medium ">Pricing Packages</h1>
          <p className="w-[60%] text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            obortis ligula euismod sededesty am augue nisl.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 my-6 xl:my-10 ">
          <div className="flex flex-col sm:flex-row p-12 border rounded-xl w-full justify-between border-[#930000] hover:border-none box-shadow transition-all duration-500 ease-in-out ">
            <div className="flex flex-col gap-5 mb-2">
              <div className="flex flex-col gap-2 lg:gap-5 relative">
                <img
                  src={PersonIcon}
                  alt="PersonIcon"
                  // width={80}
                  className="z-10 w-20"
                />
                <h1 className="text-5xl text-start z-10">$39</h1>
                <div className="absolute bg-gray-200 w-32 lg:w-36 h-32 lg:h-36 rounded-full left-10 top-6"></div>
              </div>
              <p className="text-xl text-gray-600 text-start">
                Great for large business
              </p>
            </div>
            <div className="flex flex-col  gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 lg:gap-3 items-center">
                  <BsCheckCircle className="text-xl text-[#930000]" />
                  <p className="text-lg md:text-md lg:text-lg">
                    Design & Marketing
                  </p>
                </div>
                <div className="flex gap-2 lg:gap-3 items-center">
                  <BsCheckCircle className="text-xl text-[#930000]" />
                  <p className="text-lg md:text-md lg:text-lg">
                    Project Management
                  </p>
                </div>
                <div className="flex gap-2 lg:gap-3 items-center">
                  <BsCheckCircle className="text-xl text-[#930000]" />
                  <p className="text-lg md:text-md lg:text-lg">
                    Business Solution
                  </p>
                </div>
                <div className="flex gap-2 lg:gap-3 items-center">
                  <BsCheckCircle className="text-xl text-[#930000]" />
                  <p className="text-lg md:text-md lg:text-lg">
                    Digital Product Design
                  </p>
                </div>
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="text-black bg-gray-300 hover:bg-[#930000] hover:text-white font-medium rounded-full text-lg w-full sm:w-auto px-5 py-2.5 text-center transition-colors duration-300"
                >
                  {" "}
                  Choose Plan
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row p-12 border rounded-xl w-full justify-between border-[#930000] hover:border-none  box-shadow transition-all ease-in-out duration-300">
            <div className="flex flex-col gap-5 mb-2">
              <div className="flex flex-col gap-2 lg:gap-5 relative">
                <img
                  src={PersonIcon}
                  alt="PersonIcon"
                  // width={80}
                  className="z-10 w-20"
                />
                <h1 className="text-5xl text-start z-10">$39</h1>
                <div className="absolute bg-gray-200 w-32 lg:w-36 h-32 lg:h-36 rounded-full left-10 top-6"></div>
              </div>
              <p className="text-xl text-gray-600 text-start">
                Great for large business
              </p>
            </div>
            <div className="flex flex-col  gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 lg:gap-3 items-center">
                  <BsCheckCircle className="text-xl text-[#930000]" />
                  <p className="text-lg md:text-md lg:text-lg">
                    Design & Marketing
                  </p>
                </div>
                <div className="flex gap-2 lg:gap-3 items-center">
                  <BsCheckCircle className="text-xl text-[#930000]" />
                  <p className="text-lg md:text-md lg:text-lg">
                    Project Management
                  </p>
                </div>
                <div className="flex gap-2 lg:gap-3 items-center">
                  <BsCheckCircle className="text-xl text-[#930000]" />
                  <p className="text-lg md:text-md lg:text-lg">
                    Business Solution
                  </p>
                </div>
                <div className="flex gap-2 lg:gap-3 items-center">
                  <BsCheckCircle className="text-xl text-[#930000]" />
                  <p className="text-lg md:text-md lg:text-lg">
                    Digital Product Design
                  </p>
                </div>
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="text-black bg-gray-300 hover:bg-[#930000] hover:text-white font-medium rounded-full text-lg w-full sm:w-auto px-5 py-2.5 text-center transition-colors duration-300"
                >
                  {" "}
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
