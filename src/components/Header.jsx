import React from "react";
import viteLogo from "/vite.svg";

const Header = () => {
  return (
    <header className="bg-slate-50 flex flex-row h-20 w-[95%] mx-auto top-6 rounded-md relative mb-20 shadow">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <ul className="flex flex-row gap-8">
          <li className="navLink">
            <a href="">Base de Datos</a>
          </li>
          <li className="navLink">
            <a href="">Tipos</a>
          </li>
          <li className="navLink">
            <a href="">Gestores</a>
          </li>
          <li className="navLink">
            <a href="">Entidad</a>
          </li>
        </ul>

        <div className="flex flex-row items-center gap-x-2">
          <img src={viteLogo} alt="Vite logo" className="drop-shadow-xl" />
          <h1 className="text-xl font-semibold">rahp-dev</h1>
        </div>

        <ul className="flex flex-row gap-8 ">
          <li className="navLink">
            <a href="">Relacion</a>
          </li>
          <li className="navLink">
            <a href="">Atributos</a>
          </li>
          <li className="navLink">
            <a href="">Cardinalidad</a>
          </li>
          <li className="navLink">
            <a href="">Modelo ER</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
