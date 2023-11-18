import { BsSquareFill } from "react-icons/bs";
import ChooseUsCard from "./choose-card";
import { FeaturesData } from "../../data/featuresData";


const ChooseUs = () => {
  return (
    <div className="relative bg-caseStudiesBg bg-cover bg-center bg-no-repeat text-center h-full py-20 w-full">
      <div className="max-w-[1220px] mx-auto ">
        <div className="flex justify-center">
          <div className="grid gap-6">
            <div className="flex items-center justify-center gap-3">
              <BsSquareFill className="text-[#800000] w-3 h-3" />
              <p className="uppercase text-sm font-medium">case studies</p>
              <BsSquareFill className="text-[#800000] w-3 h-3" />
            </div>
            <h2 className="capitalize text-5xl text-center font-medium leading-10">
              why people choose us?
            </h2>
            <p className="text-base text-center text-[#7B7E86] max-w-[1200px] md:px-[150px] lg:px-[310px] pb-20">
              IT service providers work closely adipiscing elit. Morbi obortis
              ligula euismod sededesty am augue nisl.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-8 mx-4">
      {FeaturesData.map((featuresData, index) => (
        <ChooseUsCard featuresData={featuresData} key={index}/>
        ))}
    </div>
      </div>
    </div>
  );
};

export default ChooseUs;
