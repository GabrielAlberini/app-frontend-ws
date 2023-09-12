import {logo} from "../../assets/index"

const Navbar = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} />
        <nav>
          <ul className="flex space-x-4">
            <li className="hover:text-gray-400 hover:cursor-pointer">Inicio</li>
            <li className="hover:text-gray-400 hover:cursor-pointer">Acerca</li>
            <li className="hover:text-gray-400 hover:cursor-pointer">Servicios</li>
            <li className="hover:text-gray-400 hover:cursor-pointer">Contacto</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export {Navbar};
