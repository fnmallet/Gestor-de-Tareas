import Heading from '@/components/Heading';
import Image from 'next/image';
import NotFoundImage from '@/assets/images/not-found.jpg';
import LinkStyled from '@/components/LinkStyled';
import { routes } from '@/constants/routes';

const NotFound = () => {
  return <div className='flex flex-col justify-center items-center h-dvh w-full px-4'>
    <Image src={NotFoundImage} alt="" width={256} />
    <div className='flex flex-col gap-2 items-center'>
      <span className='text-8xl font-bold'>404</span>
      <Heading level={1}>Página no encontrada</Heading>
    </div>
    <LinkStyled className="mt-8" href={routes.home}>Volver al inicio</LinkStyled>
  </div>;
};

export default NotFound;