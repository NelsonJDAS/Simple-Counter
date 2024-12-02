import React, { useState } from "react";

const ContenedorValores = ({ tiempo, funcion }) => {
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
          <button
            className={
              tiempo === "s"
                ? "btn boton-valor text-white bg-transparent w-100 rounded-0 fw-bold btn-activo"
                : "btn boton-valor text-white bg-transparent w-100 rounded-0 fw-bold"
            }
            onClick={() => {
              funcion("s");
            }}
          >
            Seg
          </button>
          <button
            className={
              tiempo == "min"
                ? "btn boton-valor text-white bg-transparent w-100 rounded-0 fw-bold btn-activo"
                : "btn boton-valor text-white bg-transparent w-100 rounded-0 fw-bold"
            }
            onClick={() => {
              funcion("min");
            }}
          >
            Min
          </button>
          <button
            className={
              tiempo == "h"
                ? "btn boton-valor text-white bg-transparent w-100 rounded-0 fw-bold btn-activo"
                : "btn boton-valor text-white bg-transparent w-100 rounded-0 fw-bold"
            }
            onClick={() => {
              funcion("h");
            }}
          >
            Horas
          </button>
          <button
            className={
              tiempo == "d"
                ? "btn boton-valor text-white bg-transparent w-100 rounded-0 fw-bold btn-activo"
                : "btn boton-valor text-white bg-transparent w-100 rounded-0 fw-bold"
            }
            onClick={() => {
              funcion("d");
            }}
          >
            Dias
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContenedorValores;
