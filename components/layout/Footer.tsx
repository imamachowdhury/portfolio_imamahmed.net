"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaYoutube, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const footerLinks = [
  { name: "Portfolio", href: "/#portfolio" },
  { name: "About", href: "/about" },
  { name: "Academy", href: "/academy" },
  { name: "POV", href: "/pov" },
  { name: "Blog", href: "/blog" },
  { name: "Pricing", href: "/pricing" },
];

const socials = [
  { icon: FaFacebookF, href: "#" },
  { icon: FaInstagram, href: "#" },
  { icon: FaLinkedinIn, href: "#" },
  { icon: FaYoutube, href: "#" },
];

export default function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="bg-black text-white py-24 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Logo/Name */}
        <Link href="/" className="text-3xl font-black tracking-tighter uppercase mb-12">
          Imam<span className="text-zinc-600">Ahmed</span>
        </Link>
        
        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-x-10 gap-y-6 mb-16 px-4">
          {footerLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex items-center gap-8 mb-16">
          {socials.map((social, i) => (
            <Link 
              key={i} 
              href={social.href} 
              className="text-zinc-500 hover:text-white transition-colors p-2"
            >
              <social.icon size={22} />
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-700">
            © {new Date().getFullYear()} Imam Ahmed. Visual storytelling that works.
          </p>
        </div>
      </div>
    </footer>
  );
}
