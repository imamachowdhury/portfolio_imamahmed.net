import Link from "next/link";
import { Film } from "lucide-react";
import { FaYoutube, FaFacebook, FaInstagram, FaXTwitter, FaGithub } from "react-icons/fa6";

export default function Footer() {
  const socials = [
    { name: "YouTube", href: "https://www.youtube.com/@StoryGhorCreation", icon: FaYoutube },
    { name: "Facebook", href: "https://www.facebook.com/imam.giff", icon: FaFacebook },
    { name: "StoryGhor FB", href: "https://www.facebook.com/StoryGhor.official", icon: Film },
    { name: "Instagram", href: "https://www.instagram.com/imam.gif", icon: FaInstagram },
    { name: "X", href: "https://x.com/imamachowdhury", icon: FaXTwitter },
    { name: "GitHub", href: "https://github.com/imamachowdhury", icon: FaGithub },
  ];

  return (
    <footer className="py-20 border-t border-white/5 bg-black mt-auto relative z-10 w-full flex-shrink-0">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="text-2xl font-black italic uppercase tracking-tighter text-white">
            Imam Ahmed
          </div>
          <div className="text-[10px] tracking-[0.3em] font-bold uppercase text-blue-500 mt-1 flex items-center gap-2">
            StoryGhor Creation <Film size={12} />
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-zinc-500">
          {socials.map((social) => (
            <a 
              key={social.name}
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
              aria-label={social.name}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
        
        <p className="text-[10px] uppercase tracking-[0.1em] text-zinc-600 font-medium text-center md:text-right">
          © {new Date().getFullYear()}. Imam Ahmed.
        </p>
      </div>
    </footer>
  );
}
