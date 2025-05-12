import Link from "next/link";
import Title from "./Title";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { MovingBorderBtn } from "@/components/ui/moving-border";

const mainProjects = [
  {
    title: "Sippy Website",
    link: "https://www.sippy.life/",
    cover: "/sippyImage.png",
    description:
      "Built on Nextjs. Modern UI. Worked with an existing code base. Built collaboratively with three developers. CRUD functionalities. Paystack Integration.",
    background: "bg-black-500",
  },
  {
    title: "Passpro Africa",
    link: "https://passpro.africa/",
    cover: "/passproImage.png",
    description:
      "Nextjs. Event Ticketing platform. Built solely.",
    background: "bg-black-500",
  },
  
];

const otherProjects = [
  {
    title: "SAAS Translator Chat App",
    link: "https://saas-chat-sigma.vercel.app/",
    github: "https://github.com/Osaze-love/saas-chat",
    cover: "/SaasChat.png",
    description:
      "A massive SAAS build. Chat app that translates to over 10 languages. Nextjs 14, Tailwind, Zod, Shadcn, Stripe, Next-Auth, Firebase. Pages protected and features limited by subscription plan. Stripe in test mode.",
    background: "bg-black-500",
  },
  {
    title: "Dropbox Clone",
    link: "https://dropbox-clone-ul32.vercel.app/",
    github: "https://github.com/Osaze-love/dropbox-clone",
    cover: "/Dropboxclone.png",
    description:
      "Interacts with Firebase. CRUD app for file storage. Clerk for authentication. Modern UI with shadcn.",
    background: "bg-black-500",
  },
];

const Projects = () => {
  return (
    <div className="py-10 text-white p-5 sm:p-0">
      <Title
        text="Projects 🎨"
        className="flex flex-col items-center justify-center "
      />
      <div className="max-w-3xl mx-auto text-center text-gray-300 pt-6 pb-10 text-md md:text-lg">
        This is not an exhaustive list of projects. For confidentiality, some live projects are not included. See full descriptions in <span>
        <MovingBorderBtn borderRadius="0.2rem" className="p-1 font-semibold">
            <a href="/CV_osazelove-1.pdf" target="_blank">
             CV
            </a>
          </MovingBorderBtn>
        </span>
         
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-10 gap-5">
        {mainProjects.map((project, index) => (
          <div key={index}>
            <div className={cn("p-5 rounded-md", project.background)}>
              <DirectionAwareHover
                imageUrl={project.cover}
                className="w-full space-y-5 cursor-pointer"
              >
                <h1>{project.title}</h1>
              </DirectionAwareHover>
              <p className="my-3">{project.description}</p>
              {project.link && project.link !== "#" && (
                <div className="flex justify-center items-center mt-2">
                  <MovingBorderBtn
                    borderRadius="0.5rem"
                    className="p-3 font-semibold"
                  >
                    <a href={project.link} target="_blank">
                      Project Link
                    </a>
                  </MovingBorderBtn>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="pt-40">
        <Title
          text="Other Projects"
          className="flex flex-col items-center justify-center rotate-0"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 pt-10 gap-5">
          {otherProjects.map((project, index) => (
            <div key={index}>
              <div className={cn("p-5 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <h1>{project.title}</h1>
                </DirectionAwareHover>
                <p className="my-3">{project.description}</p>
                <div className="flex justify-evenly items-center">
                  {project.github && (
                    <MovingBorderBtn
                      borderRadius="0.5rem"
                      className="p-3 font-semibold"
                    >
                      <a href={project.github} target="_blank">
                        View Github
                      </a>
                    </MovingBorderBtn>
                  )}
                  <MovingBorderBtn
                    borderRadius="0.5rem"
                    className="p-3 font-semibold"
                  >
                    <a href={project.link} target="_blank">
                      Project Link
                    </a>
                  </MovingBorderBtn>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
