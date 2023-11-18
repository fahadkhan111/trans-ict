import React from "react";
import technology from "../../assets/technologysolution.svg";
import itmanagement from "../../assets/itmanagement.svg";
import mobile from "../../assets/mobile.svg";
import datatracking from "../../assets/datatracking.svg";
import circle from "../../assets/circle.svg";
import { BsSquareFill } from "react-icons/bs";

const Features = () => {
  const aboutData = [
    {
      id: 1,
      title: "",
      icon: technology,
      description:
        "Harnessing the synergies of our team members whilst maintaining impactful presence, TransICT has actively served Pakistan’s ICT industries for nearly a decade. We have proudly served a prestigious portfolio of clientele, spanning a wide range of verticals in Public & Private sectors.  ",
    },
    {
      id: 2,
      title: "",
      icon: itmanagement,
      description:
        "TransICT offers turnkey solutions – covering the complete suite of technology services including consultancy, design, implementation, operations and maintenance, technical support and training.",
    },
    {
      id: 3,
      title: "",
      icon: mobile,
      description:
        "At TransICT, our people are our strength. We pursue a tradition of continuous improvement in a permanent quest to acquire new competencies and in-depth knowledge in our areas of expertise. We have earned our value through progressive effort and extensive industry experience. We share your goals to employ the power of technology to transform your business.",
    },
    {
      id: 4,
      title: "",
      icon:datatracking,
      description:
        "Today, TransICT is a leading solution provider with a deep knowledge base in IT Infrastructure design, implementation, professional services and customer support. A team of professionals with the required skills, broad experience and knowledge to design and configure solutions ensures reliability of client systems.",
    },
  ];
  return (
    <>
      {/* circle part */}

      <div className=" relative ">
        <div className="w-full flex py-16 justify-center ">
          <img src={circle} alt="" className="absolute z-10" />
          <div className="w-full md:max-w-screen-xl md:mx-auto flex flex-col items-center justify-center mt-12">
            <span className="flex justify-center items-center space-x-2   ">
              <BsSquareFill className="text-[#930000] w-3 h-3" />
              <p className="text-md uppercase">OUR FEATURES</p>
              <BsSquareFill className="text-[#930000] w-3 h-3" />
            </span>
            <p className="text-4xl mt-4 pb-40">Awesome Features</p>
          </div>
        </div>

        {/* four boxes main div */}
        <div className="absolute flex justify-center space-x-5  w-[100%]  top-64 ">
          <div className="w-[80%] md:w-[80%] 2xl:w-[75%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {/* first card  */}

            {aboutData.map((item) => {
              return (
                <div className="border  flex justify-center items-center bg-[#FFFFFF] rounded-[15px] max-h-full">
                  <div className="px-5 py-8">
                    <div className=" w-[70px] h-[70px] flex justify-center items-center bg-[#E6EEFE] rounded-lg p-4">
                      <img src={item.icon} alt="none"></img>
                    </div>
                    <div >
                      <p className="text-[24px] text-[#1C1C25] my-4">
                        Technology solution
                      </p>
                      <p className="mt-3 ">
                        {item.description.length > 10
                          ? item.description.substring(0, 130) + " ..."
                          : item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* second card  */}
            {/* <div className="border md:w-[100%] md:h-[300px]  xl:w-[100%] xl:h-[360px] flex justify-center items-center bg-[#FFFFFF] rounded-[15px]">
              <div className=" w-[75%] h-[300px]">
                <div className=" w-[70px] h-[70px] flex justify-center items-center bg-[#E6EEFE] rounded-lg mt-4 p-4">
                  <img src={itmanagement} alt="none"></img>
                </div>
                <div className="mt-4">
                  <p className="text-[24px] text-[#1C1C25]">
                    Technology <br></br>solution
                  </p>
                  <p className="mt-3 ">
                    TransICT offers turnkey solutions – covering the complete
                    suite of technology services including consultancy, design,
                    implementation, operations and maintenance, technical
                    support and training.
                  </p>
                </div>
              </div>
            </div> */}

            {/* 3rd card  */}

            {/* <div className="border  md:w-[100%] md:h-[300px]  xl:w-[100%] xl:h-[360px] flex justify-center items-center bg-[#FFFFFF] rounded-[15px]">
              <div className=" w-[75%] h-[300px]">
                <div className=" w-[70px] h-[70px] flex justify-center items-center bg-[#E6EEFE] rounded-lg mt-4 p-4">
                  <img src={mobile} alt="none"></img>
                </div>
                <div className="mt-4">
                  <p className="text-[24px] text-[#1C1C25]">
                    Technology <br></br>solution
                  </p>
                  <p className="mt-3 ">
                    At TransICT, our people are our strength. We pursue a
                    tradition of continuous improvement in a permanent quest to
                    acquire new competencies and in-depth knowledge in our areas
                    of expertise. We have earned our value through progressive
                    effort and extensive industry experience. We share your
                    goals to employ the power of technology to transform your
                    business.
                  </p>
                </div>
              </div>
            </div> */}
            {/* four card  */}
            {/* <div className="border  md:w-[100%] md:h-[300px]  xl:w-[100%] xl:h-[360px] flex justify-center items-center bg-[#FFFFFF] rounded-[15px]">
              <div className=" w-[75%] h-[300px]">
                <div className=" w-[70px] h-[70px] flex justify-center items-center bg-[#E6EEFE] rounded-lg mt-4 p-4">
                  <img src={datatracking} alt="none"></img>
                </div>
                <div className="mt-4">
                  <p className="text-[24px] text-[#1C1C25]">
                    Technology <br></br>solution
                  </p>
                  <p className="mt-3 ">
                    Today, TransICT is a leading solution provider with a deep
                    knowledge base in IT Infrastructure design, implementation,
                    professional services and customer support. A team of
                    professionals with the required skills, broad experience and
                    knowledge to design and configure solutions ensures
                    reliability of client systems.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Features;
