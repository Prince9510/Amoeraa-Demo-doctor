"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "interactive" | "image" | "book">("default");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 24, stiffness: 260, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on desktop pointer devices with no reduced motion
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!hasFinePointer || prefersReducedMotion) {
      return;
    }

    setIsEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Determine element hovered
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorAttr = target.closest("[data-cursor]")?.getAttribute("data-cursor");
      const isBookingBtn = target.closest("[data-cursor-book]") || target.closest("a[href*='appointment']");
      const isImage = target.closest("img") || target.closest("[data-cursor='explore']");
      const isInteractive = target.closest("a, button, [role='button'], input, select, textarea");

      if (cursorAttr === "explore" || (isImage && !isInteractive)) {
        setCursorVariant("image");
        setCursorText("EXPLORE");
      } else if (cursorAttr === "book" || isBookingBtn) {
        setCursorVariant("book");
        setCursorText("BOOK →");
      } else if (cursorAttr === "view") {
        setCursorVariant("interactive");
        setCursorText("VIEW");
      } else if (isInteractive) {
        setCursorVariant("interactive");
        setCursorText("");
      } else {
        setCursorVariant("default");
        setCursorText("");
      }
    };

    const handleMouseLeave = () => {
      mouseX.set(-100);
      mouseY.set(-100);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  if (!isEnabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center font-sans"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <motion.div
        animate={{
          width: cursorVariant === "book" ? 84 : cursorVariant === "image" ? 78 : cursorVariant === "interactive" && cursorText ? 64 : cursorVariant === "interactive" ? 36 : 10,
          height: cursorVariant === "book" ? 84 : cursorVariant === "image" ? 78 : cursorVariant === "interactive" && cursorText ? 64 : cursorVariant === "interactive" ? 36 : 10,
          backgroundColor: cursorVariant === "book" ? "#0F5C5E" : cursorVariant === "image" ? "#0F5C5E" : cursorVariant === "interactive" ? "rgba(15, 92, 94, 0.15)" : "#0F5C5E",
          borderColor: cursorVariant === "interactive" ? "#0F5C5E" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className={`rounded-full flex items-center justify-center text-center backdrop-blur-[2px] transition-colors border ${
          cursorVariant === "default" ? "border-none" : ""
        }`}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-[10px] font-semibold tracking-wider text-white select-none px-1"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
}
