import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div
      className={`
      w-[8rem] h-[4rem] relative
      xs:w-[16rem] xs:h-[6rem]
      sm:w-[32rem] sm:basis-2/5
      md:basis-full md:h-[4rem]
      lg:h-[6rem] lg:basis-full
    `}
    >
      <Image src={`/images/light-logo.png`} alt="Picture of the author" fill />
    </div>
  );
};

export default Logo;
