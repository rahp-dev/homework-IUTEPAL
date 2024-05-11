import React from "react";

const Relations = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-semibold text-2xl text-slate-800 text-center mb-4">
          ¿Qué es una Relación?
        </h1>
        <p className="leading-relaxed max-w-[80ch] text-justify">
          Para saber qué son las relaciones en las bases de datos es necesario
          hablar del tipo de base de datos relacionales. En estas bases de
          datos, la información se almacena en diferentes tablas, distribuida en
          filas y columnas.
        </p>
        <p className="leading-relaxed max-w-[80ch] text-justify">
          La relación de una base de datos es el vínculo que se establece entre
          distintos elementos de las tablas que la conforman. En este tipo de
          relaciones es fundamental el uso de los campos de llave primaria
          (primary key) que son los que se relacionan con otros registros de
          otras tablas.
        </p>
        <hr class="my-6 h-0.5 w-28 mx-auto border-t-0 bg-slate-800/20" />
        <h1 className="font-semibold text-2xl text-slate-800 text-center mb-4">
          ¿Para qué sirven?
        </h1>
        <p className="leading-relaxed max-w-[80ch] text-justify mb-8">
          Las relaciones en las bases de datos son claves para establecer
          concordancias en las asignaciones y garantizar la integridad
          referencial de la información (que los datos no se modifiquen o varíen
          durante el proceso).
        </p>
        <p className="leading-relaxed max-w-[80ch] text-justify mb-8">
          Gracias a las relaciones se mantiene una lógica y consistencia entre
          todos los datos que almacena. Además, las relaciones evitan que se
          dupliquen los registros dentro de una base de datos.
        </p>
      </div>
    </section>
  );
};

export default Relations;
