"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LandingPage() {
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
    <>
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
      <div className=' z-10'>
        <h1 className='text-6xl font-bold mb-8 text-center'>
          <svg
            id='lontano_logo'
            data-name='Lontano Logo'
            className='fill-white'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 587.53 83.89'
          >
            <defs>
              <style jsx>{`
                .cls-1 {
                  fill: #0e113d;
                  stroke-width: 0px;
                }
              `}</style>
            </defs>
            <g id='Layer_1' data-name='Layer 1'>
              <path
                class='cls-1'
                d='M323.26,20.15h-28.58c-.54,0-5.13-.28-5.13,2.57s5.06,2.57,5.06,2.57h4.56c7.2,0,6.56,6.77,6.56,6.77v44.9c0,4.52,1.57,5.27,2.49,5.27,2.82,0,2.64-5.2,2.64-5.2v-44.98c0-7.41,7.34-6.91,7.34-6.91h5.49c1.5,0,3.49-.21,3.49-2.64s-3.92-2.35-3.92-2.35ZM114.71,0h0c-29.1,0-52.69,23.59-52.69,52.69,0,10.2,2.93,19.7,7.95,27.76,0,0,1.56,2.78,4.3,2.78,0,0,2.25.11,2.85-.61.49-.6,0-1.31,0-1.31-6.07-7.95-9.68-17.86-9.68-28.63,0-26.11,21.17-47.28,47.28-47.28h0c26.11,0,47.28,21.17,47.28,47.28,0,10.77-3.62,20.68-9.68,28.63,0,0-.49.71,0,1.31.59.72,2.85.61,2.85.61,2.74,0,4.3-2.78,4.3-2.78,5.03-8.06,7.95-17.56,7.95-27.76,0-29.1-23.59-52.69-52.69-52.69ZM248.45,21.12c-3.06,0-2.65,4.32-2.65,4.32v34.62c0,3.86-.46,7.87-2.35,7.87s-3.86-3.55-3.86-3.55c0,0-22.43-37.49-23.36-39.04-.93-1.54-2.6-4.97-6.02-4.97-3.7,0-3.52,5-3.52,5v51.56c0,4.63,1.73,5.28,2.53,5.28,2.9,0,2.65-5.25,2.65-5.25v-35.61c0-1.54.15-6.08,2.44-6.08s5.86,6.88,5.86,6.88l22,36.94s2.13,3.83,4.93,3.83c4.01,0,3.9-5.46,3.9-5.46V25.6s.12-4.47-2.56-4.47ZM21.45,77.85h-10.79c-5.17,0-5.43-4.97-5.43-4.97V25.66s0-4.59-2.65-4.59S0,25.66,0,25.66c0,0,0,46.86,0,52.39s5.01,5.14,5.01,5.14h17.01s4.19,0,4.19-2.75-4.76-2.59-4.76-2.59ZM381.75,25.62s-1.38-5.1-4.57-5.1c-3.44,0-4.9,5.16-4.9,5.16l-18.18,52.82c-.49,1.67-.52,4.07,1.58,4.07,1.91,0,2.65-1.1,4.58-5.55,2.08-4.81,7.43-4.47,7.43-4.47h18.28c6.34,0,7.6,3.49,7.88,4.32.27.8,1.24,5.7,4.5,5.7s1.13-5.63,1.13-5.63l-17.72-51.31ZM382.7,67.28h-11.18s-8.01.49-5.63-6.75l7.54-21.95s1.44-4.47,3.65-4.47,3.52,4.39,3.52,4.39l7.77,22.48s2.55,6.3-5.67,6.3ZM554.15,17.13c-18.43,0-33.38,14.94-33.38,33.38s14.94,33.38,33.38,33.38,33.38-14.94,33.38-33.38-14.94-33.38-33.38-33.38ZM554.15,78.57c-15.5,0-28.06-12.56-28.06-28.06s12.56-28.06,28.06-28.06,28.06,12.56,28.06,28.06-12.56,28.06-28.06,28.06ZM479.28,21.12c-3.05,0-2.65,4.32-2.65,4.32v34.62c0,3.86-.46,7.87-2.35,7.87s-3.86-3.55-3.86-3.55c0,0-22.43-37.49-23.36-39.04-.93-1.54-2.6-4.97-6.02-4.97-3.7,0-3.52,5-3.52,5v51.56c0,4.63,1.73,5.28,2.53,5.28,2.9,0,2.65-5.25,2.65-5.25v-35.61c0-1.54.15-6.08,2.44-6.08s5.86,6.88,5.86,6.88l22,36.94s2.13,3.83,4.93,3.83c4.01,0,3.9-5.46,3.9-5.46V25.6s.12-4.47-2.56-4.47Z'
              />
            </g>
          </svg>
        </h1>
        <nav>
          <ul className='flex space-x-6 text-lg'>
            <li>
              <Button asChild variant='outline'>
                <Link href='/actividades'>actividades</Link>
              </Button>
            </li>
            <li>
              <Button asChild variant='outline'>
                <Link href='/login'>agenda</Link>
              </Button>
            </li>
            <li>
              <Button asChild variant='outline'>
                <Link href='/login'>contacto</Link>
              </Button>
            </li>
            <li>
              <Button asChild variant='outline'>
                <Link href='/about'>nosotros</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
