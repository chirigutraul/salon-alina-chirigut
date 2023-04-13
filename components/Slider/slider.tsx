import React from "react";
import "swiper/css";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import Image from "next/image";

function Slider() {
  const imagesArray: string[] = [
    "https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    "https://images.unsplash.com/photo-1610992015734-080387c1f66f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
    "https://images.unsplash.com/photo-1636485830028-1a7663299a1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  ];

  SwiperCore.use([Autoplay]);

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      className="p-0 h-[32rem] w-screen
  lg:h-full"
      loop={true}
      autoplay={true}
    >
      {/* <PreviousButton/> */}
      {/* <NextButton /> */}
      {imagesArray.map((imageLink: string, index: number) => (
        <SwiperSlide key={index}>
          <div className={`relative w-full h-full`}>
            <Image
              src={imageLink}
              alt="Picture of the something nice"
              fill={true}
              className="object-cover"
              sizes={"(max-width:1920px) w-screen h-screen"}
              priority={index === 0}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
