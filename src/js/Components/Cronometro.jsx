import React, { useState } from "react";
import { TiStopwatch } from "react-icons/ti";

const Cronometro = () => {
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
      <div className="col-12 text-end align-content-start">
        <span className="fw-bold text-white">
          Cronometro <TiStopwatch />
        </span>
      </div>
      <div className="col-12 align-content-start">
        <div className="d-flex justify-content-center rounded">
          {contador
            .toString()
            .split("")
            .map((numero) => {
              return <div className="num rounded mx-1">{numero}</div>;
            })}
        </div>
      </div>
      <div className="col-12 align-content-center text-center">
        <input
          className="form-label text-center rounded-pill "
          placeholder="Coloca tu numero aqui"
        />
      </div>
    </div>
  );
};

export default Cronometro;
