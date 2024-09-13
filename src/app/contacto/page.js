import Navigate from "@/components/navigate";
import { Button } from "@/components/ui/button";
import MotionBackground from "@/components/motion";

export default function page() {
  return (
    <>
      <MotionBackground />
      <main className='container mx-auto'>
        <h1 className='text-4xl font-bold mb-8 text-center'>Contacto</h1>
        <div className='flex flex-col items-center text-center  max-w-3xl mx-auto space-y-2 p-2'>
          <p className='text-lg'>
            ¡Estamos en contacto! ¿Tienes un proyecto en mente? ¿Quieres saber
            más sobre nosotros? Escríbenos a{" "}
            <a
              href='mailto:lontano@gmail.com'
              className='text-lg font-bold underline'
            >
              lontano@gmail.com
            </a>
          </p>
          <p className='text-lg'>
            También puedes encontrarnos en nuestras redes sociales:
          </p>
          <ul className='flex space-x-4'>
            <li>
              <Button asChild variant='outline'>
                <a
                  href='https://twitter.com/lontano'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Twitter
                </a>
              </Button>
            </li>
            <li>
              <Button asChild variant='outline'>
                <a
                  href='https://facebook.com/lontano'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Facebook
                </a>
              </Button>
            </li>
            <li>
              <Button asChild variant='outline'>
                <a
                  href='https://instagram.com/lontano'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Instagram
                </a>
              </Button>
            </li>
          </ul>
        </div>
        <Navigate />
      </main>
    </>
  );
}
