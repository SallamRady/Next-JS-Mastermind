"use client";
import { TypeAnimation } from "react-type-animation";

const TextAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "Sallam Rady",
        1000,
        "Web Developer",
        1000,
        "Mern Stack Developer",
        1000,
        "JS Developer",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "3rem", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default TextAnimation;
