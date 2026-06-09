"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Title from "./Title";
import {
  SiNextdotjs,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiCsharp,
  SiDotnet,
  SiTailwindcss,
  SiFirebase,
  SiGit,
  SiWordpress,
  SiRedux,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { Icon: SiNextdotjs, text: "Next.js" },
    { Icon: SiReact, text: "React" },
    { Icon: SiJavascript, text: "Javascript" },
    { Icon: SiTypescript, text: "Typescript" },
    { Icon: SiCsharp, text: "C#" },
    { Icon: SiDotnet, text: ".NET" },
    { Icon: SiTailwindcss, text: "Tailwind" },
    { Icon: SiWordpress, text: "WordPress" },
    { Icon: SiRedux, text: "Redux" },
    { Icon: SiFirebase, text: "Firebase" },
    { Icon: SiGit, text: "Git" },
  ];

  return (
    <div id="skills" className="max-w-5xl text-white mx-auto px-1 md:px-8 pb-28 relative section-glow">
      <Title
        number="02 — Skills"
        text="Tech stack"
        subtitle="Tools and frameworks I work with day to day."
        className="flex flex-col items-center justify-center"
      />
      <HoverEffect items={skills} />
    </div>
  );
};

export default Skills;
