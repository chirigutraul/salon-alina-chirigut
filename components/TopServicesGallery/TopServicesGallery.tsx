import { AnimatePresence } from "framer-motion";
import React from "react";
import ServiceComponent from "./ServiceComponent";
import servicesArray from "./servicesArray";

function TopServicesGallery() {
  return (
    <div
      className={` flex flex-col
    items-center p-8 gap-8
    md:flex-row md:items-start md:justify-center
    `}
    >
      <AnimatePresence>
        {servicesArray.map((service, index: number) => (
          <ServiceComponent
            key={service.nameOfService}
            service={service}
            indexOfItem={index}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

export default TopServicesGallery;
