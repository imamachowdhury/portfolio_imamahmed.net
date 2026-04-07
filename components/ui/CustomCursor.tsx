"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Check if device is touch capable, if so, don't show custom cursor
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Triggers for links, buttons, or elements with 'data-cursor'
      if (
        target.closest("a") || 
        target.closest("button") || 
        target.closest("[data-cursor='hover']") ||
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!isMounted) return null;
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <>
      {/* Outer subtle ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-black/10 pointer-events-none z-[100] hidden md:block"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.1)",
          backgroundColor: isHovering ? "rgba(0, 0, 0, 0.02)" : "rgba(0, 0, 0, 0)"
        }}
        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
      />
      {/* Inner precise dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-black pointer-events-none z-[100] hidden md:block"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: isHovering ? 0 : 1
        }}
        transition={{ type: "spring", bounce: 0, duration: 0.1 }}
      />
    </>
  );
}
