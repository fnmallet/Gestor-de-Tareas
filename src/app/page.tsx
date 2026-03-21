import Footer from '@/components/Footer';
import Heading from '@/components/Heading';
import LinkStyled from '@/components/LinkStyled';
import { appPath, routes } from '@/constants/routes';

const RootPage = () => {
  return <>
    <div className='absolute top-0 left-0 w-full h-full -z-10 bg-[linear-gradient(to_right,#2b7fff12_1px,transparent_1px),linear-gradient(to_bottom,#2b7fff12_1px,transparent_1px)] bg-size-[4rem_4rem] bg-center'></div>
    <div className='flex flex-col justify-center items-center mt-16 h-full w-full gap-16 px-4'>
      <Heading level={1}>Bienvenido al Gestor de Tareas</Heading>
      <div className='text-center flex flex-col gap-2'>
        <p>Esta aplicación te permite gestionar tareas de forma sencilla y organizada.</p>
        <p>Podrás crear distintos espacios de trabajos, cada uno con sus propias tareas.</p>
      </div>
      <div className='flex flex-col gap-2 md:w-md py-4 px-4 md:py-8 md:px-16 rounded-xl shadow-2xl bg-white border border-gray-100'>
        <Heading level={2} className='mb-8'>¿Qué deseas hacer?</Heading>
        <LinkStyled buttonStyle className='' href={routes.auth.login}>Iniciar sesión</LinkStyled>
        <LinkStyled buttonStyle className='' href={routes.auth.register}>Registrarse</LinkStyled>
        <LinkStyled buttonStyle className='' href={routes[appPath].dashboard}>Ir a la aplicación</LinkStyled>
      </div>
      <Footer />
    </div>
  </>;
};

export default RootPage;