import { LandingPage } from "@/components/landing-page";
import Navigate from "@/components/navigate";
import MotionBackground from "@/components/motion";

export default function Home() {
  return (
    <>
      <MotionBackground />
      <main className='z-10'>
        <LandingPage />
        <Navigate />
      </main>
    </>
  );
}
