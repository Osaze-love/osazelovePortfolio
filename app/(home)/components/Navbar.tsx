import { cn } from "@/lib/utils";
import Link from "next/link";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
];

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
    {
      link: "mailto:loveomobude23@gmail.com",
      label: "Gmail",
      icon: SiGmail,
    },
  ];

  return (
    <nav
      className={cn(
        "py-6 md:py-10 flex flex-col sm:flex-row justify-between items-center gap-5 animate-move-down",
        className
      )}
    >
      <Link
        href="#home"
        className="text-xl md:text-2xl text-white font-display font-bold hover:text-green-400 transition-colors tracking-tight"
      >
        Osaze<span className="text-green-500">Love</span>
      </Link>

      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-gray-400 hover:text-white transition-colors relative group"
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-green-500 group-hover:w-full transition-all duration-300" />
          </a>
        ))}
      </div>

      <div className="flex items-center gap-5 text-white">
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <Link
              href={social.link}
              key={index}
              aria-label={social.label}
              target="_blank"
              className="p-2 rounded-lg border border-white/5 hover:border-green-500/30 hover:bg-green-500/5 transition-all"
            >
              <Icon className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
