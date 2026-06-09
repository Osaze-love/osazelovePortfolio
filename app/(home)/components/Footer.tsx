import Link from "next/link";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 mt-10 pt-10 pb-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-lg font-bold text-white">
            Osaze<span className="text-green-500">Love</span>
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Frontend engineer · Lagos, Nigeria · Remote worldwide
          </p>
        </div>

        <div className="flex items-center gap-4">
          {[SiLinkedin, SiGithub, SiGmail].map((Icon, i) => {
            const links = [
              "https://www.linkedin.com/in/love-osaze-omobude-bab8a71a4",
              "https://github.com/Osaze-love",
              "mailto:loveomobude23@gmail.com",
            ];
            return (
              <Link
                key={i}
                href={links[i]}
                target="_blank"
                className="p-2 rounded-lg text-gray-400 hover:text-green-400 border border-white/5 hover:border-green-500/30 transition-all"
              >
                <Icon className="w-4 h-4" />
              </Link>
            );
          })}
        </div>
      </div>

      <p className="text-center text-xs text-gray-600 mt-8">
        © {year} Osaze Love. Built with Next.js & Tailwind.
      </p>
    </footer>
  );
};

export default Footer;
