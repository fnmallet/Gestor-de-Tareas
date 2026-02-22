import Heading from '@/components/Heading';

const Nav = () => {
  return <nav className="w-2xs bg-white grow shadow-2xl flex flex-col p-4">
    <div className="grow">
      <Heading level={2} className='text-xl'>Gestor de Tareas</Heading>
    </div>
    <div className="text-xs flex flex-col gap-4 text-center text-gray-600">
      <p>© {new Date().getFullYear()} Gestor de Tareas</p>
      <p>Creado por Fernando Mallet 🚀</p>
    </div>
  </nav>;
};

export default Nav;