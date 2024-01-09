"use client";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const Tabs = ({ items }) => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <>
      <div className="flex flex-row justify-start mt-8">
        <TabButton
          selectTab={() => handleTabChange("skills")}
          active={tab === "skills"}
        >
          Skills
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("education")}
          active={tab === "education"}
        >
          Education
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("certifications")}
          active={tab === "certifications"}
        >
          Certifications
        </TabButton>
      </div>
      <div className="mt-8">{items.find((t) => t.id === tab).content}</div>
    </>
  );
};

export default Tabs;
