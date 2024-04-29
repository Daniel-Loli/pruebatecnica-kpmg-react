import React from 'react';
import '../../../App.css';
const Footer = () => {
  return (
    <footer className="bg-grayLight py-8 text-white text-center">
      <div className="container mx-auto">
        <p className="text-sm">&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p>
        <p className="text-xs mt-2">Creado con <span className="text-purple-800">&hearts;</span>React</p>
      </div>
    </footer>
  );
};

export default Footer;
