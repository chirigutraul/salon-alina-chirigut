import {useState} from 'react'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller } from 'swiper';
import Image from 'next/image';

export default function Home() {
  const imagesArray = [
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=8",
    "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1587729927069-ef3b7a5ab9b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    "https://images.unsplash.com/photo-1588359953494-0c215e3cedc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
  ]

  return (
    <>
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      className='flex justify-center content-center'
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {
        imagesArray
        .map(imageLink => 
        <SwiperSlide className="justify-center">
          <img
          className='object-contain h-screen w-screen'
          src={imageLink}
          alt="Picture of the something nice"
          />
        </SwiperSlide>
        )
      }
    </Swiper>
    </>
  )
}
