import React, { useEffect, useState } from "react";
import AllImages from "../../data/allImages";

import { BsSquareFill } from "react-icons/bs";
import ProgressBar from "./progress-bar";

export default function Prograss() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 1);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="flex justify-center z-50  mb-5">
      <div className=" grid lg:grid-cols-2 grid-cols-1 max-w-screen-xl gap-5 my-20 mx-5 md:mx-20 lg:mx-10 ">
        <div className="lg:w-[90%] ">
          {/* Content for the blue div */}
          <div className="flex items-center">
            <BsSquareFill className="text-[#930000] w-3 h-3" />

            <p className="ml-2">WELCOME TO OUR COMPANY</p>
          </div>
          <h1 className="text-5xl font-semibold mt-4 leading-[3rem] pr-0 lg:pr-20">We provide Excellent IT services for your success</h1>
          
          <div className=" md:mt-20 flex flex-col gap-8">
            <div>
              <div className="flex justify-between items-center">
                <p className="text-sm">BUSINESS SECURITY</p>
                <p className="text-sm">62%</p>
              </div>
              <ProgressBar percentage={62} />
            </div>

            <div>
              <div className="flex justify-between items-center">
                <p className="text-sm">CAREER DEVELOPMENT</p>
                <p className="text-sm">88%</p>
              </div>
              <ProgressBar percentage={88} />

            </div>

            <div>
              <div className="flex justify-between items-center">
                <p className="text-sm">BUSINESS INNOVATION</p>
                <p className="text-sm">90%</p>
              </div>
              <ProgressBar percentage={90} />

            </div>
          </div>
        </div>
        <div className="w-full " style={{}}>
          {/* Content for the red div */}
          <img
            src={AllImages.prograssImage}
            alt="Cover"
            className="w-full h-full rounded-md bg-contain"
          />
        </div>
      </div>
    </div>
  );
}
