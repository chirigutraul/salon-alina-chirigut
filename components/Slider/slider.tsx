import React from 'react'
import 'swiper/css';

import { Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import PreviousButton from './PreviousButton';
import NextButton from './NextButton';
import Image from 'next/image';

function Slider() {
  const swiper = useSwiper();
  const imagesArray:string[] = [
    "https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    "https://images.unsplash.com/photo-1610992015734-080387c1f66f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
    "https://images.unsplash.com/photo-1636485830028-1a7663299a1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  ]

  return (
  <Swiper
  spaceBetween={0}
  slidesPerView={1}
  className="justify-center mx-0 px-0"
  >
    <PreviousButton/>
    <NextButton />
    {
      imagesArray.map((imageLink:string, index:number) => 
      <SwiperSlide key={index}>
        <div className='h-screen w-screen relative'>
          <Image
          src={imageLink}
          alt="Picture of the something nice"
          fill={true}
          className="object-contain"
          priority
          />
        </div>
      </SwiperSlide>
      )
    }
    </Swiper>
    )
}

export default Slider