const Footer = () => {
  return <footer>
    <div className="text-xs flex flex-col gap-4 text-center text-gray-600 mt-16">
      <p>© {new Date().getFullYear()} Gestor de Tareas</p>
      <p>Creado por Fernando Mallet 🚀</p>
    </div>
  </footer>;
};

export default Footer;