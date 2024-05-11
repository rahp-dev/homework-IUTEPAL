import React from "react";

const Cardinalidad = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-semibold text-2xl text-slate-800 text-center mb-4">
          ¿Qué es la cardinalidad en las bases de datos?
        </h1>
        <p className="leading-relaxed max-w-[80ch] text-justify">
          Para definir la cardinalidad, es importante darse cuenta de que, al
          final, las bases de datos son esencialmente hojas de cálculo. Por
          supuesto, pueden ser masivas en términos de puntos de datos y
          complejidad, pero son solo grandes libros de datos.
        </p>
        <p className="leading-relaxed max-w-[80ch] text-justify">
          Dicho esto, la cardinalidad es una forma de comparar el número de
          filas en la hoja con el número de columnas. Específicamente en lo que
          respecta a las bases de datos, la cardinalidad suele ser una medida de
          cuántos valores distintos tienes en una columna en comparación con el
          número de filas.
        </p>
        <hr class="my-6 h-0.5 w-28 mx-auto border-t-0 bg-slate-800/20" />
        <h1 className="font-semibold text-2xl text-slate-800 text-center mb-4">
          Tipos de Cardinalidades
        </h1>
        <p className="leading-relaxed max-w-[80ch] text-justify mb-4">
          Hasta ahora, hemos hablado de cardinalidad en las bases de datos, pero
          el concepto también implica un nivel más profundo. Puedes tener
          cardinalidad en el modelado de datos.
        </p>
        <p className="leading-relaxed max-w-[80ch] text-justify mb-4">
          Esto va de la mano de la cardinalidad que ya hemos explicado. Sigue
          comparando los valores únicos en columnas con el número de filas.
        </p>
        <p className="leading-relaxed max-w-[80ch] text-justify mb-4">
          Pero, cuando consideras el modelado de datos, hay algunas
          clasificaciones de cardinalidad más que cobran importancia. Suelen
          dividirse en cardinalidades uno a uno, uno a muchos y muchos a muchos.
        </p>
        <hr class="my-6 h-0.5 w-28 mx-auto border-t-0 bg-slate-800/20" />

        <ul className="list-disc mt-2 leading-relaxed max-w-[80ch]">
          <p className="text-lg font-semibold mb-2">Ejemplo:</p>
          <li className="mb-4">
            Uno a uno: A nivel teórico, el nombre lo dice todo. Para cualquier
            elemento de una columna, hay exactamente un elemento relacionado en
            otra columna. Esa relación es bidireccional.
          </li>
          <li className="mb-4">
            Uno a muchos : En este caso, tienes una columna con entradas únicas
            (columna A). Cada entrada puede estar relacionada con varias
            entradas en otra columna (columna B). Como tal, cualquier elemento
            en la columna A puede enlazar a varios elementos en la B, pero cada
            elemento en la B solo enlazará a una cosa en la A.
          </li>
          <li>
            Muchos a muchos : Por último, vamos a explicar la relación de muchos
            a muchos. Cualquier elemento en la columna A puede tener varios
            pares en la columna B; y al revés también es cierto.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Cardinalidad;
