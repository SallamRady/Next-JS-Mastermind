"use client";
import { motion } from "framer-motion";
import Image from "next/image";

function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="col-span-4 place-self-center mt-4 lg:mt-0"
    >
      <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
        <Image
          src="/images/hero-image.png"
          alt="hero image"
          className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          width={300}
          height={300}
        />
      </div>
    </motion.div>
  );
}

export default HeroImage;
