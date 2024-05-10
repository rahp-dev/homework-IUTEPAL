import React from "react";
import databasesImg from "/images/databases.png";
import sqlImg from "/images/sql.png";
import mariaDbImg from "/images/mariaDB.png";

const Databases = () => {
  return (
    <>
      <section className="container flex flex-row justify-evenly items-center mx-auto mb-12">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-semibold text-2xl text-slate-800 text-center mb-4">
            Base de Datos
          </h1>
          <p className="leading-relaxed max-w-[80ch] text-justify">
            Se llama base de datos, o también banco de datos, a un conjunto de
            información perteneciente a un mismo contexto, ordenada de modo
            sistemático para su posterior recuperación, análisis y/o
            transmisión. Existen actualmente muchas formas de bases de datos,
            que van desde una biblioteca hasta los vastos conjuntos de datos de
            usuarios de una empresa de telecomunicaciones.
          </p>
          <hr class="my-6 h-0.5 w-28 mx-auto border-t-0 bg-slate-800/20" />
          <p className="leading-relaxed max-w-[80ch] text-justify">
            Las bases de datos son el producto de la necesidad humana de
            almacenar la información, es decir, de preservarla contra el tiempo
            y el deterioro, para poder acudir a ella posteriormente. En ese
            sentido, la aparición de la electrónica y la computación brindó el
            elemento digital indispensable para almacenar enormes cantidades de
            datos en espacios físicos limitados, gracias a su conversión en
            señales eléctricas o magnéticas.
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

      <section className="container mx-auto">
        <h1 className="font-semibold text-2xl text-slate-800 text-center mb-4">
          ¿Qué tipos de bases de datos existen?
          <hr class="my-6 h-0.5 w-28 mx-auto border-t-0 bg-slate-800/20" />
        </h1>
        <p className="text-center">
          ¡Existen dos tipos de bases de datos para cada necesidad!
        </p>

        <div className="container mx-auto flex flex-row items-center justify-around mt-12">
          <div className="flex flex-col items-center">
            <h1 className="font-semibold text-xl text-slate-800 text-center mb-4">
              Base de Datos relacionales
            </h1>
            <p className="leading-relaxed max-w-[80ch] text-justify">
              Una base de datos relacional es una colección de información que
              organiza datos en relaciones predefinidas, en la que los datos se
              almacenan en una o más tablas (o "relaciones") de columnas y
              filas, lo que facilita su visualización y la comprensión de cómo
              se relacionan las diferentes estructuras de datos entre sí. Las
              relaciones son conexiones lógicas entre las diferentes tablas y se
              establecen a partir de la interacción entre ellas.
            </p>
            <img
              src={sqlImg}
              alt="SQL Logo"
              className="object-contain max-w-40 mt-8 drop-shadow-lg"
            />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="font-semibold text-xl text-slate-800 text-center mb-4">
              Base de Datos No relacionales
            </h1>
            <p className="leading-relaxed max-w-[80ch] text-justify">
              Las bases de datos NoSQL están diseñadas específicamente para
              modelos de datos específicos y almacenan los datos en esquemas
              flexibles que se escalan con facilidad para aplicaciones modernas.
              Las bases de datos NoSQL son ampliamente reconocidas porque son
              fáciles de desarrollar, por su funcionalidad y el rendimiento a
              escala. Las bases de datos NoSQL están diseñadas específicamente
              para modelos de datos no relacionales y tienen esquemas flexibles
              para crear aplicaciones modernas.
            </p>
            <img
              src={mariaDbImg}
              alt="MariaDB Logo"
              className="object-contain max-w-lg mt-8 drop-shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Databases;
