"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar } from "@/components/ui/calendar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Navigate from "@/components/navigate";

// Eventos de ejemplo
const events = [
  {
    date: new Date(2024, 5, 15),
    title: "Concierto en el Parque",
    description: "Presentación al aire libre en el Parque Central",
  },
  {
    date: new Date(2024, 6, 1),
    title: "Lanzamiento de Álbum",
    description:
      "Fiesta de lanzamiento de nuestro nuevo álbum 'Melodías Cósmicas'",
  },
  {
    date: new Date(2024, 7, 10),
    title: "Gira Nacional",
    description: "Inicio de nuestra gira nacional 'Armonía en Movimiento'",
  },
];

export function AgendaPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // // Función para verificar si una fecha tiene un evento
  // const hasEvent = (day) => {
  //   if (day === null || day == undefined) return;
  //   return events.some(
  //     (event) => event.date.toDateString() === day.toDateString()
  //   );
  // };

  // // Función para obtener el evento de una fecha específica
  // const getEvent = (day) => {
  //   if (day === null || day == undefined) return;
  //   return events.find(
  //     (event) => event.date.toDateString() === day.toDateString()
  //   );
  // };

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
      <main className='z-10'>
        <h1 className='text-4xl font-bold mb-8 text-center'>Agenda</h1>
        <TooltipProvider>
          <Calendar
            mode='single'
            selected={date}
            onSelect={setDate}
            className='bg-gray-800 border-gray-700 rounded-lg p-4 w-min mx-auto'
            classNames={{
              day_today: "bg-purple-600 text-white",
              day_selected: "bg-purple-800 text-white",
            }}
            // components={{
            //   Day: ({ day, ...props }) => {
            //     const event = getEvent(day);
            //     if (hasEvent(day)) {
            //       return (
            //         <Tooltip>
            //           <TooltipTrigger asChild>
            //             <button
            //               {...props}
            //               className={`${props.className} relative bg-purple-500 text-white hover:bg-purple-600`}
            //             >
            //               {props.children}
            //             </button>
            //           </TooltipTrigger>
            //           <TooltipContent className='bg-gray-800 border-gray-700 p-2'>
            //             <p className='font-bold'>{event?.title}</p>
            //             <p>{event?.description}</p>
            //           </TooltipContent>
            //         </Tooltip>
            //       );
            //     }
            //     return <button {...props}>{props.children}</button>;
            //   },
            // }}
          />
        </TooltipProvider>
        <Navigate />
      </main>
    </>
  );
}
