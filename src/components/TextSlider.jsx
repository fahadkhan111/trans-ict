import React from "react";
import "../App.css"; // Import the CSS file for styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

const TextSlider = () => {
  const array = [
    { id: 1, title: "TECHNOLOGY" },
    { id: 2, title: "24/7 Customer Service" },
    { id: 3, title: "HAPPY CUSTOMER" },
    { id: 4, title: "GET A QUOTE" },
    { id: 5, title: "WEBSITE & MOBILE" },
    // { id: 6, title: "TECHNOLOGY" },
  ];

  return (
    <div className="flex justify-center mt-20 bg-gray-900  ">
      <div className=" w-full max-w-screen-xl flex justify-between bg-opacity-70 py-10 px-10 ">
        {/* Your content goes here */}
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          autoplay={{
            delay: 2000,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 15,
            },

            640: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1289: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {array.map((item) => {
            return (
              <SwiperSlide className="w-full flex " key={item.id}>
                <div className="w-full h-full mx-auto flex items-center justify-center">
                  <h1 className="text-white text-2xl text-center">
                    {item.title}
                  </h1>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default TextSlider;
