import Link from "next/link";
import Title from "./Title";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { MovingBorderBtn } from "@/components/ui/moving-border";

const Projects = () => {
  const projects = [
    {
      title: "SAAS Translator Chat App",
      link: "https://saas-chat-sigma.vercel.app/",
      github: "https://github.com/Osaze-love/saas-chat",
      cover: "/SaasChat.png",
      description:
        "This is a massive SAAS build. It is a chat app that translates to over 10 languages. It uses technologies like Nextjs 14, Tailwind,Zod, Shadcn, Stripe, Next-Auth, firebase for language translation and data storage. Pages are protected and features are limited based on subscription plan.It is a complete build with every single button being active and working. NB: The stripe feature is currently in test mode. Hence, actual card details are not used.",
      background: "bg-black-500",
    },
    {
      title: "Transport Dashboard",
      link: "https://drive.google.com/file/d/17glcuUKFqavjguHBUwiMrxDZ38dpl0rR/view?usp=drive_link",
      cover: "/DashboardTransport.png",
      description:
        "The live web app for this has been discontinued. However, a video demo is still available. The dashboard uses technologies like React, Axios, createAsyncThunk and MUI. It interacts with an actual backend server and accepts three levels of users. A super admin, an admin and a normal user. Protected routes are used and a bearer token for axios calls also. It is also a CRUD app.",
      background: "bg-black-500",
    },
    {
      title: "Dropbox clone",
      link: "https://dropbox-clone-ul32.vercel.app/",
      cover: "/Dropboxclone.png",
      github: "https://github.com/Osaze-love/dropbox-clone",
      description:
        "This interacts with firebase and is essentially a CRUD app where files are stored. It uses clerk for authentication and also protects routes based on login status.Its design is also made seamlessly through the use of the modern UI technology, shadcn.",
      background: "bg-black-500",
    },
    {
      title: "Ecommerce web app",
      link: "https://sippyecommerce.vercel.app/",
      cover: "/EcommerceSippy.png",
      github: "https://github.com/Osaze-love/sippyecommerce",
      description:
        "Built with Nextjs 14, this web app is meant to show proficiency in building ecommerce web apps. It uses dummy json for pulling data. It also uses redux toolkit for global state management and use the AppDispatch to pull related products data from the redux state. Active pages are the Home(shop) page, product page, cart page and checkout page.",
      background: "bg-black-500",
    },
    {
      title: "Post Dashboard",
      link: "https://post-dashboard-eight.vercel.app/",
      cover: "/PostDashboard.png",
      github: "https://github.com/Osaze-love/PostDashboard",
      description:
        "This is built on Nextjs and its main aim is to show the use of modern UI for quick and effective builds. The active pages are the Dashboard and Post pages. It also has an auth page. It uses shadcn as its main package. Other packages used are: Typescript, Recharts, React hook form and Zod. There is no existing backend on this project.",
      background: "bg-black-500",
    },
  ];
  return (
    <div className="py-10 text-white p-5 sm:p-0">
      <Title
        text="Projects 🎨"
        className="flex flex-col items-center justify-center rotate-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <div key={index}>
              <div className={cn("p-5 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <h1>{project.title}</h1>
                </DirectionAwareHover>
                <p>{project.description}</p>
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
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
