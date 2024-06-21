import { cn } from "@/lib/utils";
import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";

const Navbar = ({ className }: { className?: string }) => {
  const socials = [
    {
      link: "https://www.linkedin.com/in/love-osaze-omobude-bab8a71a4",
      label: "LinkedIn",
      icon: SiLinkedin,
    },
    {
      link: "https://github.com/Osaze-love",
      label: "Github",
      icon: SiGithub,
    },
  ];
  return (
    <nav
      className={cn(
        "py-10 flex justify-between items-center animate-move-down",
        className
      )}
    >
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        OsazeLove
      </h1>
      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <Link href={social.link} key={index} aria-label={social.label}>
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
