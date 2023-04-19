import React from "react";
import VisitCardAdressOverlay from "./VisitCardAdressOverlay";
import Image from "next/image";

import { motion } from "framer-motion";

function VisitCard() {
  const salonImage: string =
    "https://images.unsplash.com/photo-1619607146034-5a05296c8f9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";

  return (
    <motion.div
      initial={{ x: "-100%" }}
      whileInView={{ x: "0" }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="h-[40rem] border-8 border-secondary relative p-8 
    md:h-[48rem]"
    >
      <div className="relative w-full h-full">
        <Image
          src={salonImage}
          alt={"Imagine cu salonul"}
          className="object-cover"
          fill={true}
          sizes="(max-width:1920px) theme(w-full)"
        />
      </div>
      <VisitCardAdressOverlay />
    </motion.div>
  );
}

export default VisitCard;
