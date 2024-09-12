"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function MotionBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <motion.div
      className='absolute inset-0 opacity-50'
      animate={{
        background: [
          `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(100, 0, 200, 0.3) 0%, rgba(0, 0, 0, 0) 80%)`,
          `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(200, 0, 100, 0.3) 0%, rgba(0, 0, 0, 0) 80%)`,
        ],
      }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
    />
  );
}
