import { useState } from "react";
import man1 from "../../assets/images/man-smiling.png";
import aboutUs from "../../assets/images/about-us-bg.png";
import { BsSquareFill } from "react-icons/bs";

const AboutUs = () => {
  const [bgColor, setBgColor] = useState("bg-[#000000]");

  const handleEnterContact = () => {
    setBgColor("bg-[#800000]");
  };
  const handleLeaveContact = () => {
    setBgColor("bg-[#000000]");
  };
  return (
    <div className="max-w-[1220px] mx-auto pt-10 px-4 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-36 place-items-center">
        <div className="relative">
          <img src={man1} alt="man 1"/>
          <img
            className="absolute left-[0] bottom-[0] lg:left-[3%] lg:bottom-[7%] xl:left-[-20%] xl:bottom-[-15%] z-[-1] max-w-[100%] xl:w-[550px] xl:h-[550px]"
            src={aboutUs}
            alt="about"
          />
        </div>
        <div className="space-y-6 ">
          <div className="flex items-center gap-3">
            <BsSquareFill className="text-[#800000] w-3 h-3" />
            <p className="uppercase text-sm font-medium">
              more about our company
            </p>
          </div>
          <h2 className="capitalize text-5xl font-medium leading-10">
            our application features.
          </h2>
          <p className="text-base text-[#7B7E86] md:w-[416px]">
            IT service providers work closely with clients work clients to
            understand their unique needs and develop customized
          </p>
          <div>
            <div className="flex items-center gap-2">
              <BsSquareFill className="text-[#1C1C25] w-[6px] h-[6px]" />
              <p className="text-lg font-medium">Amazing communication.</p>
            </div>{" "}
            <div className="flex items-center gap-2">
              <BsSquareFill className="text-[#1C1C25] w-[6px] h-[6px]" />
              <p className="text-lg font-medium">
                Best trending designing experience.
              </p>
            </div>
            <div className="flex items-center gap-2 pb-4">
              <BsSquareFill className="text-[#1C1C25] w-[6px] h-[6px]" />
              <p className="text-lg font-medium">Email & Live chat</p>
            </div>
          </div>
          <button
            type="button"
            className={`capitalize text-base text-white font-bold py-3 px-10 rounded-full ${bgColor}`}
            onMouseEnter={handleEnterContact}
            onMouseLeave={handleLeaveContact}
          >
            contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
