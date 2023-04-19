import React from "react";
import { IServicesObject } from "types";
import Image from "next/image";

import { motion } from "framer-motion";
import useWindowSize from "utils/hooks/BreakPointsHooks";
import breakpoints from "utils/TailwindBreakPoints";
const isNumberOdd = (verifiedNumber: number) => verifiedNumber % 2 === 0;

function ServiceComponent({
  service,
  indexOfItem,
}: {
  service: IServicesObject;
  indexOfItem: number;
}) {
  const { width } = useWindowSize();
  const isScreenMedium = (width: number) => width >= breakpoints.md;

  const animationForSmallScreen = {
    x: isNumberOdd(indexOfItem) ? "100%" : "-100%",
  };
  const animationForMediumScreen = {
    y: isNumberOdd(indexOfItem) ? "100%" : "-100%",
  };

  const whileInViewForSmallScreen = { x: "0", y: "0" };
  const whileInViewForMediumScreen = { y: "0", x: "0" };

  const initialAnimationVariation =
    width && isScreenMedium(width)
      ? animationForMediumScreen
      : animationForSmallScreen;
  const whileInViewVariation =
    width && isScreenMedium(width)
      ? whileInViewForMediumScreen
      : whileInViewForSmallScreen;

  return (
    <motion.div
      animate={initialAnimationVariation}
      whileInView={whileInViewVariation}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div
        className={`relative w-full aspect-square
      md:w-[28vw]
      `}
      >
        <Image
          src={service.pictureOfService}
          fill={true}
          className="object-cover"
          alt={service.nameOfService}
          sizes="(max-width:1920px) theme(w-full)"
        />
      </div>

      <div
        className={`w-full mt-4 text-center
      md:w-[28vw]
      `}
      >
        <p className={`text-2xl text-white `}>{service.nameOfService}</p>
        <p
          className={`px-8 mt-2 text-white text-md 
          md:px-0
        `}
        >
          {service.descriptionOfService}
        </p>
      </div>
    </motion.div>
  );
}

export default ServiceComponent;
