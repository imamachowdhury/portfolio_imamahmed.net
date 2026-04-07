"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";

const navItems = [
  { name: "Portfolio", href: "/#portfolio" },
  { name: "About", href: "/about" },
  { name: "Academy", href: "/academy" },
  { name: "POV", href: "/pov" },
  { name: "Blog", href: "/blog" },
  { name: "Pricing", href: "/pricing" },
];

const socialItems = [
  { icon: FaFacebookF, href: "#" },
  { icon: FaInstagram, href: "#" },
  { icon: FaLinkedinIn, href: "#" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-black tracking-tighter text-black uppercase">
          Imam<span className="text-gray-400">Ahmed</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[0.9rem] font-semibold text-gray-500 hover:text-black transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex items-center gap-5">
          {socialItems.map((item, i) => (
            <Link key={i} href={item.href} className="text-gray-400 hover:text-black transition-colors">
              <item.icon size={18} />
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
