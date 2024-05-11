import React from "react";
import viteLogo from "/vite.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-800 flex flex-row h-20 w-[95%] mx-auto top-6 rounded-md relative mb-20 shadow">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <ul className="flex flex-row gap-8">
          <li className="navLink">
            <Link to="/">Base de Datos</Link>
          </li>
          <li className="navLink">
            <Link to="/entidad">Entidades y Atributos</Link>
          </li>
        </ul>

        <div className="flex flex-row items-center gap-x-2">
          <img src={viteLogo} alt="Vite logo" className="drop-shadow-xl" />
          <h1 className="text-xl font-semibold text-white">rahp-dev</h1>
        </div>

        <ul className="flex flex-row gap-8">
          <li className="navLink">
            <Link to="/relacion">Relación</Link>
          </li>
          <li className="navLink">
            <Link to="/cardinalidad">Cardinalidad</Link>
          </li>
          <li className="navLink">
            <Link to="/modelo-er">Modelo ER</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
