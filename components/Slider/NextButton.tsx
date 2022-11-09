import React from 'react'

import { useSwiper } from 'swiper/react';
import Image from 'next/image';
import ButtonsStyling from './ButtonsStyling';

const NextButton = () => {
  const swiper = useSwiper();
  return <div 
  className={ButtonsStyling + ' right-0'}>
    <button onClick={() => swiper.slideNext()}>
      <Image
       src={"/icons/RightArrow.svg"}
       alt="Right arrow icon"
       width={24}
       height={24}
      />
    </button>
  </div>
};

export default NextButton