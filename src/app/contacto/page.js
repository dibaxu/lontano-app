import Navigate from "@/components/navigate";
import Instagram from "@/components/ui/icon-instagram";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <main>
      <h1 className='text-4xl font-bold mb-8 text-center'>Contacto</h1>
      <div className='flex flex-col items-center'>
        <p className='text-lg'>
          ¡Estamos en contacto! ¿Tienes un proyecto en mente? ¿Quieres saber más
          sobre nosotros? Escríbenos a{" "}
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
            <Button
              asChild
              variant='secondary'
              href='https://twitter.com/lontano'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>Twitter</span>
            </Button>
          </li>
          <li>
            <Button
              asChild
              variant='secondary'
              href='https://facebook.com/lontano'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>Facebook</span>
            </Button>
          </li>
          <li>
            <Button
              asChild
              variant='secondary'
              href='https://instagram.com/lontano'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>
                <Instagram className='w-4 h-4 fill-black' /> Instagram
              </span>
            </Button>
          </li>
        </ul>
      </div>

      <Navigate />
    </main>
  );
}
