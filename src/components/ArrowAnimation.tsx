"use client"
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const ArrowAnimation = () => {
  return (
    <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
      <Image
        src={"/down-arrow.svg"}
        width={40}
        height={10}
        alt="Down Arrow"
        className="cursor-pointer "
      />
    </motion.div>
  );
};

export default ArrowAnimation;
