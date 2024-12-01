import React, { useState } from "react";

const ContenedorValores = () => {
  return (
    <div className="contenedor-individual border rounded bg-black border-white row">
      <div className="col-12 text-center align-content-start">
        <span className="fw-bold text-white">Opciones de Valores</span>
      </div>
      <div className="col-12 align-content-end">
        <p className="fw-bold text-white">
          Puedes elegir el valor del tiempo que desees. Las opciones disponibles
          son las siguientes:
        </p>
      </div>
      <div className="col-12 align-content-center px-0">
        <div className="d-flex justify-content-around">
          <button className="btn boton-valor text-white bg-transparent w-100 rounded-0 fw-bold">
            Seg
          </button>
          <button className="btn boton-valor text-white bg-transparent w-100 rounded-0 fw-bold">
            Min
          </button>
          <button className="btn boton-valor text-white bg-transparent w-100 rounded-0 fw-bold">
            Horas
          </button>
          <button className="btn boton-valor text-white bg-transparent w-100 rounded-0 fw-bold">
            Dias
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContenedorValores;
