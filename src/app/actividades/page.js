import { ActivitiesPage } from "@/components/activities-page";
import Navigate from "@/components/navigate";
import MotionBackground from "@/components/motion";

export default function page() {
  return (
    <>
      <MotionBackground />
      <main className='z-10'>
        <h1 className='text-4xl font-bold mb-8 text-center'>Actividades</h1>
        <ActivitiesPage />
        <Navigate />
      </main>
    </>
  );
}
