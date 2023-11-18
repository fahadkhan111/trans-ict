import { FiArrowUpRight } from "react-icons/fi";

const ChooseUsCard = ({featuresData}) => {
  return (
    
        <div
          className=" bg-cardBg bg-no-repeat bg-cover border boeder-1 rounded-[19px]"
        >
             <div className="flex flex-wrap justify-center gap-10 p-10">
              <div className="grid gap-2">
                <p className="text-sm  leading-4 font-medium capitalize">
                  {featuresData.feature}
                </p>
                <h4 className="text-3xl font-medium">
                  <a
                    href="https://wptf.themepul.co/tronix/service/technologysolution/"
                    target="_blank"
            
                    rel="noreferrer"
                  >
                    {featuresData.featureText}
                  </a>
                </h4>
              </div>
              <div className="">
                <p className="text-gray-600"> {featuresData.featureDescription}</p>
              </div>
                <div className="flex items-center gap-1">
                  <button className="bg-[#B9A6A6] px-4 py-2 rounded-lg flex gap-2 items-center text-[#fff]">
                    learn more
                  <FiArrowUpRight className=" " />
                  </button>
                </div>
            </div>
        </div>
      
  );
};

export default ChooseUsCard;
