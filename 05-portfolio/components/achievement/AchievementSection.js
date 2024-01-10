import React from "react";
import AchievementItem from "./AchievementItem";

const achievementsList = [
  {
    metric: "Projects",
    value: "50",
    postfix: "+",
  },
  {
    metric: "Problem Solved",
    value: "800",
    postfix: "+",
  },
  {
    metric: "Awards",
    value: "7",
    postfix: "+",
  },
  {
    metric: "Years",
    value: "5",
    postfix: "+",
  },
];

const SingleAchievement = achievementsList.map((achievement, index) => {
  return <AchievementItem key={index} achievement={achievement} />;
});

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {SingleAchievement}
      </div>
    </div>
  );
};

export default AchievementsSection;
