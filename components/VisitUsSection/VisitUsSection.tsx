import React from "react";

import BigHeader from "./BigHeader";
import VisitCard from "./VisitCard";

import { AnimatePresence } from "framer-motion";
import { roboto } from "utils/fonts";

function VisitUsSection() {
  return (
    <AnimatePresence>
      <div
        className={`grid grid-cols-1 py-2 bg-gradient-to-r from-secondary to-primary lg:grid-cols-2 ${roboto.className}`}
      >
        <BigHeader />
        <VisitCard />
      </div>
    </AnimatePresence>
  );
}

export default VisitUsSection;
