import { useState } from "react";
import HeroImg from "../../assets/images/hero-img.png";
import { GoVideo } from "react-icons/go";

const Hero = () => {
  const [iconColor, setIconColor] = useState("#ffffff");
  const handleIconHover = () => {
    setIconColor("#800000");
  };
  const handleIconLeave = () => {
    setIconColor("#ffffff");
  };
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat p-12 text-center h-screen  w-full"
      style={{
        backgroundImage: `url(${HeroImg})`,
      }}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full">
        <div className="flex h-full items-center max-w-screen-xl mx-auto">
          <div className="grid gap-6 text-white text-start w-[590px] p-4">
            <ul className="list-disc">
              <li className="text-sm tracking-wider font-bold uppercase">
                welcome to our company
              </li>
            </ul>
            <h1 className="text-6xl leading-[70px] font-bold capitalize">
              Affordable Big IT & Technology Solutions
            </h1>
            <p className="text-lg leading-7">
              TransICT is a leading solution provider with a deep knowledge base
              in IT Infrastructure design, implementation, professional services
              and customer support
            </p>
            <div className="flex gap-4">
              <button
                type="button"
                className="text-base font-bold py-3 px-10 rounded-full bg-[#800000] hover:bg-white hover:text-black"
              >
                Get a Quote
              </button>
              <div className="flex items-center gap-4">
                <button
                  className={`flex items-center justify-center border-[1.5px] hover:border-[#800000] font-bold w-14 h-14 rounded-full`}
                  onMouseEnter={handleIconHover}
                  onMouseLeave={handleIconLeave}
                >
                  <GoVideo color={iconColor} />
                </button>
                <p className="capitalize text-base font-medium">watch video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
