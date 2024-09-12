import Navigate from "@/components/navigate";
import MotionBackground from "@/components/motion";

export default function page() {
  return (
    <>
      <MotionBackground />
      <main className=' container mx-auto'>
        <h1 className='text-4xl font-bold mb-8 text-center'>Nosotros</h1>
        <div className='flex flex-col items-center text-center p-2'>
          <p className='text-lg'>
            Somos una organización sin fines de lucro que promueve la cultura y
            el arte en todas sus formas. Nuestro objetivo es acercar la cultura
            a todos los rincones de la ciudad, para que nadie se quede sin
            disfrutar de la belleza y la creatividad.
          </p>
          <p className='text-lg'>
            Nuestra misión es fomentar la creatividad y la expresión artística
            en todas sus formas, para que cada persona pueda encontrar su voz y
            compartirla con el mundo.
          </p>
          <p className='text-lg'>
            ¡Únete a nosotros y descubre todo lo que la cultura tiene para
            ofrecerte!
          </p>
        </div>
        <Navigate />
      </main>
    </>
  );
}
