import React from 'react'

import { useSwiper } from 'swiper/react';
import Image from 'next/image';
import ButtonsStyling from './ButtonsStyling';

const NextButton = () => {
  const swiper = useSwiper();
  return <div 
  className={ButtonsStyling + ' right-0'}>
    <button onClick={() => swiper.slideNext()}>
      <div className='h-16 w-16 relative'>
      <Image
       src={"/icons/RightArrow.svg"}
       alt="Right arrow icon"
       fill={true}
       sizes={"(max-width:1920px) theme(8)"}
      />
      </div>
    </button>
  </div>
};

export default NextButton