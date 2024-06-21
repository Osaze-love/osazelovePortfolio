"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Title from "./Title";
import {
  SiNextdotjs,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiGit,
} from "react-icons/si";
const Skills = () => {
  const skills = [
    {
      Icon: SiNextdotjs,
      text: "Nextjs",
    },
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "Javascript",
      Icon: SiJavascript,
    },
    {
      text: "Typescript",
      Icon: SiTypescript,
    },
    {
      text: "Tailwind",
      Icon: SiTailwindcss,
    },
    {
      text: "Firebase",
      Icon: SiFirebase,
    },
    {
      text: "Git",
      Icon: SiGit,
    },
  ];
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="Skills 🛠️"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <HoverEffect items={skills} />
    </div>
  );
};

export default Skills;
