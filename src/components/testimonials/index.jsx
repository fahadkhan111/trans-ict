import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AllImages from "../../data/allImages";
import { BsSquareFill } from "react-icons/bs";

const dataArray = [
  {
    title: "People talk about us",
    imageSource: AllImages.user5,
    quote: "Trans ESCROW",
    des: "TransICT inc. is sole Escrow Solution provider in Pakistan. It is also offering services across to the financial, governmental, public and private entities. We have experienced them to be the best & always reachable",
    author: "Syed Mujeeb",
    designation: "Bank (CEO)",
  },
  {
    title: "People talk about us",
    imageSource: AllImages.user3,
    quote: "Trans SECURITY",
    des: "Our bank has engaged TransICT for various security testing services, they have executed tasks like mobile app secure code review, Pentesting, Vulnerability Analysis.",
    author: "Theodore Isaac Rubin",
    designation: "Programmer",
  },
  {
    title: "People talk about us",
    imageSource: AllImages.user4,
    quote: "Trans TRACK",
    des: "We find TransICT a great contributor in the field of enovation R&D and implementation int the domain of Vehicle Tracking, Fleet Management, Asset Tracking, Personnel Tracking, Team Tracking including hardware and software area.",
    author: "Max de Pree",
    designation: "Manager",
  },
];

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: true,
    arrows: false,
  };

  return (
    <div className="flex  gap-5 bg-testimonialBg  bg-cover py-20">
      <div className="w-1/3 pl-16 hidden lg:block">
        <div className="imgcircle h-14 w-14 rounded-full bg-[#b6dcfd] mt-20"></div>
        <img src={AllImages.man} alt="Man" className="myImage" />
      </div>
      <div className="w-1/4 pl-16 hidden md:block lg:hidden"></div>

      <div className="w-full md:w-1/2 pt-16 parent-div">
        <Slider {...settings}>
          {dataArray.map((data, index) => (
            <div key={index} className="slide-item">
              <div className="slide-content">
                <div
                  className="flex"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                  }}
                >
                  <div className="flex items-center gap-3 text-sm ">
                    <BsSquareFill className="text-[#930000] w-3 h-3" />
                    <p className="text-md uppercase">Pricing Plans</p>
                    <BsSquareFill className="text-[#930000] w-3 h-3" />
                  </div>
                </div>
                <div
                  className="flex pt-2"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                  }}
                >
                  <h1 className="text-2xl md:text-3xl font-semibold pt-4">{data.title}</h1>
                </div>
                <div
                  className="flex pt-6"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                  }}
                >
                  <img
                    src={data.imageSource}
                    alt={data.author}
                    className="w-28 h-28 mt-10"
                  />
                </div>
                <div
                  className="flex pt-2"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                  }}
                >
                  <h1 className="text-4xl font-semibold pt-10">
                    “{data.quote}”
                  </h1>
                </div>
                <div className="text-center mt-4 font-normal text-gray-500 pt-4">
                  {data.des}
                </div>
                <div
                  className="flex pt-4"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                  }}
                >
                  <h1 className="text-xl  font-semibold pt-4">{data.author}</h1>
                </div>
                <div
                  className="flex"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                  }}
                >
                  <p className="mt-2">
                    <span>{data.designation}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="w-1/3 hidden md:block mt-10 ">
        <div className="w-full flex justify-evenly pl-32 ">
          <div className="imgcircle h-14 w-14 rounded-full  mt-20">
            <img
              src={AllImages.circlboy}
              alt="boy"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="w-full pl-20 flex justify-start mt-32">
          <div className="imgcircle h-14 w-14 rounded-full ">
            <img
              src={AllImages.circlegirl}
              alt="girl"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="w-full pl-32 flex justify-evenly mt-32">
          <div className="imgcircle h-14 w-14 rounded-full bg-[#dfddff]"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
