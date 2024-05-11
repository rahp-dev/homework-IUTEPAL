import React from "react";
import databasesImg from "/images/databases.png";
import sqlImg from "/images/sql.png";
import mariaDbImg from "/images/mariaDB.png";
import microsoftSQL from "/images/microsoft-sql-server-logo.png";
import mongoDB from "/images/mongoDB.png";
import oracleDatabase from "/images/oracle-database.png";
import postgreSQL from "/images/postgresql.png";
import mySQL from "/images/mysql.png";

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

      <section className="container mx-auto mb-16">
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
              Base de Datos no relacionales
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

      <section className="container mx-auto">
        <h1 className="font-semibold text-2xl text-slate-800 text-center mb-4">
          ¿Cuántos gestores de base de datos hay?
          <hr class="my-6 h-0.5 w-28 mx-auto border-t-0 bg-slate-800/20" />
        </h1>

        <div className="flex flex-col items-center">
          <p className="leading-relaxed max-w-[80ch] text-justify">
            Existen muchos gestores de bases de datos diferentes disponibles,
            cada uno con sus propias fortalezas y debilidades. Algunos de los
            gestores de bases de datos más populares incluyen:
          </p>

          <div className="flex flex-row items-center justify-between">
            <img
              src={mySQL}
              className="max-w-sm mr-2 drop-shadow-lg"
              alt="logo mySQL"
            />

            <div className="flex flex-col gap-x-12">
              <h1 className="text-xl font-semibold">MySQL</h1>
              <hr class="my-3 h-0.5 w-20 border-t-0 bg-slate-800/20" />
              <p className="leading-relaxed max-w-[80ch] text-justify">
                MySQL es un gestor de bases de datos relacionales (SGBD) de
                código abierto que es popular por su confiabilidad,
                escalabilidad y facilidad de uso. MySQL es una buena opción para
                aplicaciones web y de pequeña a mediana empresa.
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col gap-x-12">
              <h1 className="text-xl font-semibold">PostgreSQL</h1>
              <hr class="my-3 h-0.5 w-20 border-t-0 bg-slate-800/20" />
              <p className="leading-relaxed max-w-[80ch] text-justify">
                PostgreSQL es otro SGBD de código abierto que es conocido por su
                potente conjunto de funciones y seguridad. PostgreSQL es una
                buena opción para aplicaciones empresariales y aplicaciones que
                requieren funciones de base de datos avanzadas.
              </p>
            </div>

            <img
              src={postgreSQL}
              className="max-w-xs ml-2 drop-shadow-lg"
              alt="logo mySQL"
            />
          </div>

          <div className="flex flex-row items-center justify-between mb-12">
            <img
              src={microsoftSQL}
              className="max-w-xs mr-4 drop-shadow-lg"
              alt={microsoftSQL}
            />

            <div className="flex flex-col gap-x-12">
              <h1 className="text-xl font-semibold">Microsoft SQL Server</h1>
              <hr class="my-3 h-0.5 w-20 border-t-0 bg-slate-800/20" />
              <p className="leading-relaxed max-w-[80ch] text-justify">
                Microsoft SQL Server es un SGBD comercial que es popular entre
                las empresas que utilizan Windows. SQL Server es una buena
                opción para aplicaciones empresariales grandes y complejas.
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center justify-between mb-12">
            <div className="flex flex-col gap-x-12">
              <h1 className="text-xl font-semibold">Oracle Database</h1>
              <hr class="my-3 h-0.5 w-20 border-t-0 bg-slate-800/20" />
              <p className="leading-relaxed max-w-[80ch] text-justify">
                Oracle Database es un SGBD comercial que es conocido por su
                rendimiento y escalabilidad. Oracle Database es una buena opción
                para grandes empresas y aplicaciones que requieren el más alto
                nivel de rendimiento.
              </p>
            </div>

            <img
              src={oracleDatabase}
              className="max-w-xs ml-2 drop-shadow-lg"
              alt="logo mySQL"
            />
          </div>

          <div className="flex flex-row items-center justify-between">
            <img
              src={mongoDB}
              className="max-w-xs mr-4 drop-shadow-lg"
              alt={microsoftSQL}
            />

            <div className="flex flex-col gap-x-12">
              <h1 className="text-xl font-semibold">MongoDB</h1>
              <hr class="my-3 h-0.5 w-20 border-t-0 bg-slate-800/20" />
              <p className="leading-relaxed max-w-[80ch] text-justify">
                MongoDB es una base de datos NoSQL que es popular por su
                flexibilidad y escalabilidad. MongoDB es una buena opción para
                aplicaciones que necesitan almacenar datos no estructurados o
                que necesitan escalar rápidamente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Databases;
