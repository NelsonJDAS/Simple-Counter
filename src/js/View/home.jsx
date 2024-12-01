import React, { useEffect } from "react";
import { createSwapy } from "swapy";
import Contador from "../Components/Contador";
import Cronometro from "../Components/Cronometro";
import ContenedorValores from "../Components/ContenedorValores";
import ContenedorTiempoUsuario from "../Components/ContenedorTiempoUsuario";

//create your first component
const Home = () => {
  useEffect(() => {
    const container = document.querySelector(".container");
    const swapy = createSwapy(container, {
      animation: "dynamic", // or spring or none
    });
  }, []);

  return (
    <div className="align-content-center contenedor-pagina w-100 text-center">
      <div className="text-center fw-bold text-white">
        <h1>Widgets Interactivos</h1>
      </div>
      <div class="container text-center">
        <div className="row w-100">
          <div
            class="section-1 contenedor-componente fondo border border-dark rounded col-4 m-3"
            data-swapy-slot="foo"
          >
            <div class="content-a" data-swapy-item="a">
              <Contador />
            </div>
          </div>

          <div
            class="section-2 contenedor-componente border border-dark rounded fondo col-7 m-3 "
            data-swapy-slot="bar"
          >
            <div class="content-b" data-swapy-item="b">
              <div class="handle" data-swapy-handle>
                <ContenedorValores />
              </div>
            </div>
          </div>

          <div
            class="section-3 contenedor-componente border border-dark rounded fondo col-7 m-3"
            data-swapy-slot="baz"
          >
            <div class="content-c" data-swapy-item="c">
              <ContenedorTiempoUsuario />
            </div>
          </div>
          <div
            class="section-4 contenedor-componente border border-dark rounded fondo col-4 m-3"
            data-swapy-slot="nar"
          >
            <div class="content-d" data-swapy-item="d">
              <Cronometro />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
