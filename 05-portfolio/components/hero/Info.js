"use client";
import { motion } from "framer-motion";
import TextAnimation from "./TextAnimation";
import Link from "next/link";
function Info() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="col-span-7 place-self-center place-items-center grid lg:place-items-start"
    >
      <h1 className="text-white max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold">
        <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
          Hello, I&apos;m{" "}
        </span>
        <br />
        <TextAnimation />
      </h1>
      <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
        I just graduated from the Faculty of Computer Science, Assiut University
        | 2022 My fifth rank on the Department with a GPA 3.6 . I am seek to be
        one of the best 50 JS Developers in the world.
      </p>
      <div>
        <button className="bg-gradient-to-br from-blue-500 via-yellow-500 to-orange-500 hover:bg-slate-200 text-black px-6 py-3 rounded-full mr-4">
          Hire Me
        </button>
        <button className="m-4 ml-0 bg-gradient-to-br from-blue-500 via-yellow-500 to-orange-500 px-1 py-1  text-white rounded-full">
          <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
            Download CV
          </span>
        </button>
      </div>
    </motion.div>
  );
}

export default Info;
