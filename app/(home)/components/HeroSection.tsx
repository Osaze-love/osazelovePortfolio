import { MovingBorderBtn } from "@/components/ui/moving-border";
import Link from "next/link";
import React from "react";
import Title from "./Title";

const HeroSection = () => {
  return (
    <div className="min-h-[60vh] overflow-hidden flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-bold">
          Nice to meet you 👋
          <br />{" "}
          <span className="underline underline-offset-8 decoration-green-500">
            I'm Osaze Love.
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          I'm a Frontend web developer passionate about building modern
          interactive web applications that meet user and company needs.
        </p>
        <Link
          className="inline-block group"
          href={"mailto:loveomobude23@gmail.com"}
        >
          <Title text="Contact Me " />
        </Link>
      </div>
      <div className="relative">
        <div className="w-80 h-80 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="w-24 h-24 rounded-2xl bg-green-500"></div>
            <div className="w-24 h-24 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-24 h-24 rounded-2xl bg-indigo-500"></div>
            <div className="w-24 h-24 rounded-full bg-green-500"></div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
        <div className="absolute bottom-5 left-0">
          <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
            <a href="/osazelovecv.pdf">📢 View CV</a>
          </MovingBorderBtn>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
