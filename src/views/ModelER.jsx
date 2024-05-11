import React from "react";
import erdExample from "/erd-example.svg";

const ModelER = () => {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-semibold text-2xl text-slate-800 text-center ">
          ¿Qué es el modelo Entidad/Relación?
        </h1>

        <hr class="my-6 h-0.5 w-28 mx-auto border-t-0 bg-slate-800/20" />

        <p className="leading-relaxed max-w-[80ch] text-justify">
          Un diagrama entidad-relación, también conocido como modelo entidad
          relación o ERD, es un tipo de diagrama de flujo que ilustra cómo las
          "entidades", como personas, objetos o conceptos, se relacionan entre
          sí dentro de un sistema. Los diagramas ER se usan a menudo para
          diseñar o depurar bases de datos relacionales en los campos de
          ingeniería de software, sistemas de información empresarial, educación
          e investigación. También conocidos como los ERD o modelos ER, emplean
          un conjunto definido de símbolos, tales como rectángulos, diamantes,
          óvalos y líneas de conexión para representar la interconexión de
          entidades, relaciones y sus atributos. Son un reflejo de la estructura
          gramatical y emplean entidades como sustantivos y relaciones como
          verbos.
        </p>

        <img src={erdExample} alt="" className="drop-shadow max-w-lg mt-8" />
      </div>
    </section>
  );
};

export default ModelER;
