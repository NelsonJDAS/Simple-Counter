import React, { useEffect, useState } from "react";
import { createSwapy } from "swapy";
import Contador from "../Components/Contador";
import Cronometro from "../Components/Cronometro";
import ContenedorValores from "../Components/ContenedorValores";
import ContenedorTiempoUsuario from "../Components/ContenedorTiempoUsuario";
import { Toaster, toast } from "sonner";

//create your first component
const Home = () => {
  //Todo lo necesario para la libreria swapy
  useEffect(() => {
    const container = document.querySelector(".container");
    const swapy = createSwapy(container, {
      animation: "dynamic", // or spring or none
    });
  }, []);

  const [tiempo, setTiempo] = useState("s"); // medida de tiempo, puede ser s, min, h, d

  return (
    <div className="align-content-center contenedor-pagina w-100 text-center">
      <Toaster position="top-center" richColors />
      {/* Toaster libreria para alertas personalizadas */}
      <div className="text-center fw-bold text-white">
        <h1>Widgets Interactivos</h1>
      </div>
      <div class="container text-center">
        <div className="row w-100">
          {/* Cada section ejecuta un cuadrado interactivo con cada componente */}
          <div
            class="section-1 contenedor-componente fondo border border-dark rounded col-4 m-3"
            data-swapy-slot="foo"
          >
            <div class="content-a" data-swapy-item="a">
              <Contador tiempo={tiempo} />
            </div>
          </div>

          <div
            class="section-2 contenedor-componente border border-dark rounded fondo col-7 m-3 "
            data-swapy-slot="bar"
          >
            <div class="content-b" data-swapy-item="b">
              <div class="handle" data-swapy-handle>
                <ContenedorValores tiempo={tiempo} funcion={setTiempo} />
              </div>
            </div>
          </div>

          <div
            class="section-3 contenedor-componente border border-dark rounded fondo col-7 m-3"
            data-swapy-slot="baz"
          >
            <div class="content-c" data-swapy-item="c">
              <ContenedorTiempoUsuario tiempo={tiempo} />
            </div>
          </div>
          <div
            class="section-4 contenedor-componente border border-dark rounded fondo col-4 m-3"
            data-swapy-slot="nar"
          >
            <div class="content-d" data-swapy-item="d">
              <Cronometro tiempo={tiempo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
