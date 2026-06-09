import Title from "./Title";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { MovingBorderBtn } from "@/components/ui/moving-border";

const mainProjects = [
  {
    title: "Sippy Website",
    link: "https://www.sippy.life/",
    cover: "/newsippy.jpeg",
    tags: ["Next.js", "Paystack", "CRUD", "Collaborative"],
    description:
      "Modern UI built on Next.js with an existing codebase. Collaborative build with three developers — CRUD functionalities and Paystack integration.",
    badge: null,
  },
  {
    title: "Miracle Portfolio",
    link: "https://miracle-bello.vercel.app/",
    cover: "/miraclebellz.png",
    tags: ["Next.js", "Vibe Coded", "Animations"],
    description:
      "Social media manager portfolio — vibe coded with bold typography, smooth scroll animations, and a conversion-focused layout.",
    badge: "✨ Vibe Coded",
  },
  {
    title: "Nuyew Tech Academy",
    link: "https://www.nuyew.academy/",
    cover: "/nuyew.jpeg",
    tags: ["WordPress", "Career Platform", "CMS"],
    description:
      "WordPress build for a UK-based tech career academy. Career pathways, funding options, and student support — all managed through WordPress.",
    badge: null,
  },
];

const otherProjects = [
  {
    title: "SAAS Translator Chat App",
    link: "https://saas-chat-sigma.vercel.app/",
    github: "https://github.com/Osaze-love/saas-chat",
    cover: "/SaasChat.png",
    tags: ["Next.js 14", "Stripe", "Firebase", "Next-Auth"],
    description:
      "Chat app translating 10+ languages. Subscription-gated features with Stripe, Firebase, and Next-Auth.",
  },
  {
    title: "Dropbox Clone",
    link: "https://dropbox-clone-ul32.vercel.app/",
    github: "https://github.com/Osaze-love/dropbox-clone",
    cover: "/Dropboxclone.png",
    tags: ["Firebase", "Clerk", "Shadcn"],
    description:
      "CRUD file storage app with Firebase backend, Clerk authentication, and a modern shadcn UI.",
  },
];

const ProjectCard = ({
  project,
  showGithub = false,
}: {
  project: (typeof mainProjects)[0] | (typeof otherProjects)[0];
  showGithub?: boolean;
}) => (
  <div className="glass-card p-5 md:p-6 group hover:border-green-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/5 h-full flex flex-col">
    <div className="relative overflow-hidden rounded-xl mb-4">
      <DirectionAwareHover
        imageUrl={project.cover}
        className="w-full aspect-video cursor-pointer"
        imageClassName="object-cover"
      >
        <h3 className="text-lg font-bold">{project.title}</h3>
      </DirectionAwareHover>
    </div>

    {"badge" in project && project.badge && (
      <span className="inline-flex self-start text-xs font-medium px-2.5 py-1 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/25 mb-3">
        {project.badge}
      </span>
    )}

    <div className="flex flex-wrap gap-1.5 mb-3">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-gray-400 border border-white/5"
        >
          {tag}
        </span>
      ))}
    </div>

    <p className="text-sm md:text-base text-gray-400 flex-1 leading-relaxed">
      {project.description}
    </p>

    <div className={cn("flex items-center gap-3 mt-5", showGithub ? "justify-between" : "justify-center")}>
      {showGithub && "github" in project && project.github && (
        <MovingBorderBtn
          borderRadius="0.5rem"
          className="px-3 py-1.5 font-semibold text-sm"
        >
          <a href={project.github} target="_blank">
            GitHub
          </a>
        </MovingBorderBtn>
      )}
      <MovingBorderBtn
        borderRadius="0.5rem"
        className="px-3 py-1.5 font-semibold text-sm"
      >
        <a href={project.link} target="_blank">
          Live Site →
        </a>
      </MovingBorderBtn>
    </div>
  </div>
);

const Projects = () => {
  return (
    <div id="projects" className="py-10 text-white px-1 md:px-0 relative section-glow">
      <Title
        number="03 — Projects"
        text="Selected work"
        subtitle="A curated showcase — some live projects are omitted for confidentiality."
        className="flex flex-col items-center justify-center"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 md:pt-12 max-w-6xl mx-auto">
        {mainProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <div className="pt-24 md:pt-32 max-w-5xl mx-auto">
        <Title
          number="03b — Side Projects"
          text="Other Projects"
          subtitle="Personal builds and experiments."
          className="flex flex-col items-center justify-center"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 md:pt-12">
          {otherProjects.map((project, index) => (
            <ProjectCard key={index} project={project} showGithub />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
