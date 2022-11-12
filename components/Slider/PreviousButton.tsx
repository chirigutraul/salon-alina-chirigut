import React from 'react'

import { useSwiper } from 'swiper/react';
import Image from 'next/image';
import ButtonsStyling from './ButtonsStyling';

const PreviousButton = () => {
  const swiper = useSwiper();
  return <div className={ButtonsStyling + ' left-0'}>
    <button onClick={() => swiper.slidePrev()}>
      <div className='h-8 w-8 relative'>
      <Image
       src={"/icons/LeftArrow.svg"}
       alt="Left arrow icon"
       fill={true}
       sizes={"(max-width:1920px) theme(8)"}
      />
      </div>
    </button>
  </div>
};

export default PreviousButton