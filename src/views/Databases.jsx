import React from "react";
import databasesImg from "/images/databases.png";

const Databases = () => {
  return (
    <section className="container flex flex-row justify-evenly items-center mx-auto mb-12">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-semibold text-2xl text-slate-800 text-center mb-4">
          Base de Datos
        </h1>
        <p className="leading-relaxed max-w-[80ch] text-justify">
          Se llama base de datos, o también banco de datos, a un conjunto de
          información perteneciente a un mismo contexto, ordenada de modo
          sistemático para su posterior recuperación, análisis y/o transmisión.
          Existen actualmente muchas formas de bases de datos, que van desde una
          biblioteca hasta los vastos conjuntos de datos de usuarios de una
          empresa de telecomunicaciones.
        </p>
        <hr class="my-6 h-0.5 w-28 mx-auto border-t-0 bg-slate-800/20" />
        <p className="leading-relaxed max-w-[80ch] text-justify">
          Las bases de datos son el producto de la necesidad humana de almacenar
          la información, es decir, de preservarla contra el tiempo y el
          deterioro, para poder acudir a ella posteriormente. En ese sentido, la
          aparición de la electrónica y la computación brindó el elemento
          digital indispensable para almacenar enormes cantidades de datos en
          espacios físicos limitados, gracias a su conversión en señales
          eléctricas o magnéticas.
        </p>
      </div>

      <div className="flex items-center">
        <img
          src={databasesImg}
          alt="database image"
          className="max-w-xl object-contain shadow-md rounded-md"
        />
      </div>
    </section>
  );
};

export default Databases;
