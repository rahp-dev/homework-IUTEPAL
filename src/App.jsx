import Header from "./components/Header";
import Databases from "./views/Databases";

function App() {
  return (
    <>
      <Header />
      <Databases />

      <section className="container mx-auto">
        <h1 className="font-semibold text-2xl text-slate-800 text-center mb-4">
          ¿Qué tipos de bases de datos existen?
          <hr class="my-6 h-0.5 w-28 mx-auto border-t-0 bg-slate-800/20" />
        </h1>
        <p className="text-center">
          ¡Existen dos tipos de bases de datos para cada necesidad!
        </p>

        <div className="container mx-auto flex flex-row items-center justify-around mt-12">
          <div>
            <h1 className="font-semibold text-xl text-slate-800 text-center mb-4">
              Base de Datos Relacionales
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
          </div>
          <div>
            <h1 className="font-semibold text-xl text-slate-800 text-center mb-4">
              Base de Datos No relacionales
            </h1>
            <p className="leading-relaxed max-w-[80ch] text-justify">
              Las bases de datos NoSQL están diseñadas específicamente para
              modelos de datos específicos y almacenan los datos en esquemas
              flexibles que se escalan con facilidad para aplicaciones modernas.
              Las bases de datos NoSQL son ampliamente reconocidas porque son
              fáciles de desarrollar, por su funcionalidad y el rendimiento a
              escala.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
