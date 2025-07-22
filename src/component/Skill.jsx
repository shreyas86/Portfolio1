import React from 'react';

// Icons
import js from "/public/icons/js.png";
import CSS from "/public/icons/css.png";
import tailwind from "/public/icons/tailwind-css.png";
import react from "/public/icons/react.png";
import html from "/public/icons/html.png";
import aws from "/public/icons/aws.png";
import node from "/public/icons/nodejs.png";
import Express from "/public/icons/express.png";
import Mongodb from "/public/icons/mongodb.png";
import Git from "/public/icons/git.png";

const skills = [
  { name: "JavaScript", icon: js },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "React JS", icon: react },
  { name: "HTML", icon: html },
  { name: "AWS", icon: aws },
  { name: "Node JS", icon: node },
  { name: "Express JS", icon: Express },
  { name: "MongoDB", icon: Mongodb },
  { name: "CSS", icon: CSS },
  { name: "Git", icon: Git },
];

const SkillRow = ({ items, direction }) => {
  const animationClass = direction === 'right' ? 'animate-scroll-right' : 'animate-scroll-left';

  return (
    <div className="relative overflow-hidden w-full">
      {/* Fade overlays */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-white to-transparent" />

      <div className={`flex w-max ${animationClass}`}>
        {[...items, ...items].map((skill, index) => (
          <div key={index} className="flex flex-col items-center text-center mx-3 md:mx-6 my-4 min-w-[80px]">
            <img src={skill.icon} loading='lazy' alt={skill.name} className="h-10 w-10 md:h-12 md:w-12 object-contain transition duration-300" />
            <p className="text-xs md:text-sm mt-2 text-gray-600 whitespace-nowrap">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const midpoint = Math.ceil(skills.length / 2);
  const topRow = skills.slice(0, midpoint);
  const bottomRow = skills.slice(midpoint);

  return (
    <div className="py-10 ">
      <h3 className="text-base md:text-2xl font-semibold pb-6 ">Skills</h3>
      <SkillRow items={topRow} direction="right" />
      <SkillRow items={bottomRow} direction="left" />
    </div>
  );
};

export default Skills;
