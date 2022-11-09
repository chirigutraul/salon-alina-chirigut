import React from 'react'

import { useSwiper } from 'swiper/react';
import Image from 'next/image';
import ButtonsStyling from './ButtonsStyling';

const PreviousButton = () => {
  const swiper = useSwiper();
  return <div className={ButtonsStyling + ' left-0'}>
    <button onClick={() => swiper.slidePrev()}>
      <Image
       src={"/icons/LeftArrow.svg"}
       alt="Left arrow icon"
       width={24}
       height={24}
      />
    </button>
  </div>
};

export default PreviousButton