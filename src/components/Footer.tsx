const Footer = () => {
  return  <footer 
    className='w-full px-16 py-8 text-center text-sm text-gray-500 inset-shadow-sm border-t border-t-gray-100 flex justify-between'
  >
    <p>© {new Date().getFullYear()} Gestor de Tareas</p>
    <p>Creado por Fernando Mallet 🚀</p>
  </footer>;
};

export default Footer;