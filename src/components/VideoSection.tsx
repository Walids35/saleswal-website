"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const VideoSection = () => {
  return (
    <>
        <div className="relative z-0">
          <video
            playsInline
            disablePictureInPicture
            src="https://videos.gotolstoy.com/public/0bd40674-5491-46ef-8e12-cde981f6c3b0/30a7ddbe-1eb7-4f73-ab39-0165e4adc4b0/30a7ddbe-1eb7-4f73-ab39-0165e4adc4b0_640.mp4"
          />
          <motion.div className="absolute -top-5 -right-10 z-10" animate={{
            y: [0, 10, 0],
            transition: {
              duration: 2,
              repeat: Infinity
            }
          }}>
            <Image src="/element1.svg" alt="element1" width={100} height={50} />
          </motion.div>
          <motion.div className="absolute -bottom-5 -right-10 z-10" animate={{
            y: [0, 10, 0],
            transition: {
              duration: 2.5,
              repeat: Infinity
            }
          }}>
            <Image src="/element2.svg" alt="element2" width={100} height={50} />
          </motion.div>
        </div>
    </>
  )
}

export default VideoSection