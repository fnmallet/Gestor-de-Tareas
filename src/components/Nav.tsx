import Heading from '@/components/Heading';
import NavLink from '@/components/NavLink';
import { appPath, routes } from '@/constants/routes';
import LogOutButton from '@/features/auth/logout/components/LogOutButton';

const Nav = () => {
  return <nav className="w-3xs bg-white grow shadow-2xl flex flex-col py-8">
    <div className="grow">
      <Heading level={2} className='text-xl text-left px-4'>Gestor de Tareas</Heading>
      <ul className='flex flex-col mt-8'>
        <NavLink href={routes[appPath].dashboard}>Dashboard</NavLink>
        <NavLink href={routes[appPath].boards}>Tableros</NavLink>
        <NavLink href={routes[appPath].account}>Cuenta</NavLink>
      </ul>
      <LogOutButton className='px-6 mt-6' />
    </div>
    <div className="text-xs flex flex-col gap-4 text-center text-gray-600 px-4">
      <p>© {new Date().getFullYear()} Gestor de Tareas</p>
      <p>Creado por Fernando Mallet 🚀</p>
    </div>
  </nav>;
};

export default Nav;