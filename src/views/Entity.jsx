import React from "react";
import entityExample from "/images/entidad-ejemplo.webp";

const Entity = () => {
  return (
    <section className="container flex flex-col justify-evenly items-center mx-auto mb-12">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-semibold text-2xl text-slate-800 text-center mb-4">
          ¿Qué es una Entidad?
        </h1>
        <p className="leading-relaxed max-w-[80ch] text-justify">
          Una entidad es algo similar a un objeto (programación orientada a
          objetos) y representa algo en el mundo real, incluso algo abstracto.
          Tienen atributos que son las cosas que los hacen ser una entidad y por
          convención se ponen en plural.
        </p>
        <hr class="my-6 h-0.5 w-28 mx-auto border-t-0 bg-slate-800/20" />
        <h1 className="font-semibold text-2xl text-slate-800 text-center mb-4">
          Ejemplo de entidad en bases de datos
        </h1>
        <p className="leading-relaxed max-w-[80ch] text-justify mb-8">
          En la imagen puedes observar como ejemplo que la entidad Laptops posee
          diferentes atributos como color, pantalla, año, modelo, etc.
        </p>
        <img
          src={entityExample}
          alt={entityExample}
          className="rounded-md shadow"
        />
      </div>

      <hr class="my-6 h-0.5 w-28 mx-auto border-t-0 bg-slate-800/20" />

      <div className="flex flex-col justify-center items-center">
        <h1 className="font-semibold text-2xl text-slate-800 text-center mb-4">
          ¿Qué es un Atributo?
        </h1>
        <p className="leading-relaxed max-w-[80ch] text-justify">
          Son las características o propiedades que describen a la entidad (se
          encierra en un óvalo). Los atributos se componen de: Los atributos
          compuestos son aquellos que tienen atributos ellos mismos. Los
          atributos llave son aquellos que identifican a la entidad y no pueden
          ser repetidos. <br /> Existen:
        </p>

        <ul className="list-disc mt-2">
          <li>Naturales: son inherentes al objeto como el número de serie</li>
          <li>
            Clave artificial: no es inherente al objeto y se asigna de manera
            arbitraria.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Entity;
