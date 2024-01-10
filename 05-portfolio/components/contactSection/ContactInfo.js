import React from "react";
import GithubIcon from "@/public/github-icon.svg";
import LinkedinIcon from "@/public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const ContactInfo = () => {
  return (
    <div className="z-10">
      <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
      <p className="text-[#ADB7BE] mb-4 max-w-md">
        I'm currently looking for new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I'll try my best to
        get back to you!
      </p>
      <div className="socials flex flex-row gap-2">
        <Link href="https://github.com/SallamRady">
          <Image src={GithubIcon} alt='github' />
        </Link>
        <Link href="https://www.linkedin.com/in/sallam-rady-3b66b2181/">
          <Image src={LinkedinIcon} alt="linkedin"/>
        </Link>
      </div>
    </div>
  );
};

export default ContactInfo;
