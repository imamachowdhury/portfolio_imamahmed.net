"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Film, User, BookOpen, DollarSign } from "lucide-react";

const navItems = [
  { name: "Portfolio", href: "/#portfolio", icon: Film },
  { name: "About", href: "/about", icon: User },
  { name: "Academy", href: "/academy", icon: BookOpen },
  { name: "Pricing", href: "/pricing", icon: DollarSign },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center gap-1 px-4 py-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full"
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="group relative flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            <item.icon size={16} />
            <span>{item.name}</span>
            <motion.div
              className="absolute inset-0 bg-white/5 rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity"
              layoutId="nav-hover"
            />
          </Link>
        ))}
      </motion.div>
    </nav>
  );
}
