import React from "react";
// import muast from "../../assets/muast.png";
import cisco from "../../assets/images/cisco.png";
import avast from "../../assets/images/avast.png";
import kaspersky from "../../assets/images/kaspersky.png";
import mcAffee from "../../assets/images/mcAffee.png";
import calAmp from "../../assets/images/calAmp.png";
import gfi from "../../assets/images/gfi.png";
import barracuda from "../../assets/images/barracuda.png";
import avg from "../../assets/images/avg.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

const Partners = () => {
  const images = [
    { id:1,src: cisco, alt: "none" },
    { id:2,src: avast, alt: "none" },
    { id:3,src: mcAffee, alt: "none" },
    { id:4,src: calAmp, alt: "none" },
    { id:5,src: gfi, alt: "none" },
    { id:6,src: barracuda, alt: "none" },
    { id:7,src: kaspersky, alt: "none" },
    { id:8, src: avg, alt: "none" },
  ];

  return (
    <>
      <div className="flex justify-center mt-20">
        <div className=" w-full max-w-screen-xl flex justify-between  bg-opacity-70 py-10 px-10 ">
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            autoplay={{
              delay: 2000,
            }}
            breakpoints={{
              320: {
                slidesPerView: 3,
                spaceBetween: 15,
              },

              640: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 25,
              },
              1289:{
                slidesPerView: 6,
                spaceBetween: 20,
              }
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {images.map((image) => {
              return (
                <SwiperSlide className="w-full" key={image.id}>
                  <img src={image.src} alt=""  className="mx-auto h-full"/>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className=" flex justify-center ">
        <hr className="w-[100%] 2xl:w-[80%] "></hr>
      </div>
    </>
  );
};

export default Partners;
