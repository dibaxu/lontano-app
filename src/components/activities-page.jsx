"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Navigate from "@/components/navigate";

// Sample activities data
const activities = [
  {
    id: 1,
    title: "Summer Music Festival",
    description: "Join us for three days of non-stop music under the sun!",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Acoustic Night",
    description: "An intimate evening of unplugged melodies and soulful tunes.",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Music Workshop",
    description:
      "Learn from the pros in our interactive music creation workshop.",
    imageUrl: "/placeholder.svg",
  },
];

export function ActivitiesPage() {
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
      <div className='z-10'>
        <h1 className='text-4xl font-bold mb-8 text-center'>
          Nuestras Actividades
        </h1>
        <Carousel
          className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl'
          opts={{ loop: true }}
        >
          <CarouselContent>
            {activities.map((activity) => (
              <CarouselItem key={activity.id}>
                <Card className='bg-gray-800 border-gray-700'>
                  <CardContent className='p-0'>
                    <Image
                      src={activity.imageUrl}
                      alt={activity.title}
                      width={600}
                      height={400}
                      className='w-full h-48 object-cover rounded-t-lg'
                    />
                    <div className='p-4'>
                      <h2 className='text-xl font-semibold mb-2'>
                        {activity.title}
                      </h2>
                      <p className='text-gray-300'>{activity.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <Navigate />
      </div>
    </>
  );
}
