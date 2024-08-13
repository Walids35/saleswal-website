"use client"
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const ArrowAnimation = () => {
  return (
    <motion.div
    animate={{
      scale: [1, 1.2, 1],
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity
      }
    }}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => {
              window.scrollTo({ top: window.innerHeight, behavior: "smooth"})
            }}
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
