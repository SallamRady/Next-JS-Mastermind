import React from "react";
import Image from "next/image";
import Tabs from "./Tabs";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML/CSS/SCSS/Bootstrap/Tailwind CSS</li>
        <li>React.js , React MUI & Redux-Redux toolkit</li>
        <li>Next.js (App Router and Pages Router Approach)</li>
        <li>PWA Development</li>
        <li>Node.js & Express</li>
        <li>SQL , MySql & Sequelize</li>
        <li>MongoDB & Mongoose</li>
        <li>Rest API & GraphQL</li>
        <li>OOP , Algorithms &Data structures</li>
        <li>And More see my CV.</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Faculty of Computer and Technology - Assiut University</li>
        <li>Summer Training Front-end Diploma - ITI</li>
        <li>Summer Training Back-end Diploma - ITI</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Faculty of Computer and Technology - Assiut University (Bachelor
          Degree)
        </li>
        <li>Summer Training Front-end Diploma - ITI</li>
        <li>Summer Training Back-end Diploma - ITI</li>
        <li>Problem Solving&Data Structure ACM FCI Assuit Univeristy</li>
        <li>And more see my CV.</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  return (
    <section className="text-white" id="about">
      <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          className="rounded"
          alt="About me"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-white texxt-base md:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <Tabs items={TAB_DATA} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
