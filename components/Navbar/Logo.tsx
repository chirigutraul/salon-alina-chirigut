import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div
      className={`
      w-[4rem] h-[4rem] relative
      md:w-[6rem] md:h-[6rem] 
    `}
    >
      <Image src={`/images/light-logo.png`} alt="Picture of the author" fill />
    </div>
  );
};

export default Logo;
