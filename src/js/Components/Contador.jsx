import React, { useState } from "react";
import { IoReload } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { TbNumbers } from "react-icons/tb";

const Contador = () => {
  const [contador, setContador] = useState(0);
  const [parar, setParar] = useState(false);

  const AccionContador = (Accion) => {
    const Contar = setInterval(() => {
      if (Accion == "Empezar") {
        setContador((prevContador) => prevContador + 1000000);
      } else if (Accion == "Reiniciar") {
        clearInterval(Contar);
        setContador(0);
      } else if (Accion == "Parar") {
        setContador(Contador);
      }
    }, 1000);
  };

  return (
    <div className="contenedor-individual border rounded bg-dark border-white row">
      <div className="col-12 text-start align-content-start">
        <span className="fw-bold text-white">
          Contador
          <TbNumbers />
        </span>
      </div>
      <div className="col-12 align-content-start px-0">
        <div className="d-flex justify-content-center border-top border-bottom border-dark">
          {contador
            .toString()
            .split("")
            .map((numero) => {
              return <div className="num">{numero}</div>;
            })}
        </div>
      </div>
      <div className="col-12 align-content-end px-0">
        <div className="d-flex justify-content-around rounded-bottom">
          <button
            className="btn bg-black w-100 boton border-bottom-0 rounded-0 rounded-izquierdo border-start-0 border-end-0 border-dark boton-reiniciar text-danger"
            onClick={() => {
              AccionContador("Reiniciar");
            }}
          >
            <IoReload />
          </button>
          <button
            className="btn bg-black w-100 boton border-bottom-0 rounded-0 border-start-0 border-end-0 border-dark boton-parar text-warning"
            onClick={() => {
              AccionContador("Parar");
            }}
          >
            <FaPause />
          </button>
          <button
            className="btn bg-black w-100 boton border-bottom-0 rounded-0 rounded-derecho border-start-0 border-end-0 border-dark boton-empezar text-success "
            onClick={() => {
              AccionContador("Empezar");
            }}
          >
            <FaPlay />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contador;
