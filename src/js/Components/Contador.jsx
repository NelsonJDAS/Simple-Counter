import React, { useRef, useState } from "react";
import { IoReload } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { TbNumbers } from "react-icons/tb";

const Contador = () => {
  //Contador base del componente
  const [contador, setContador] = useState("---");

  //Referencias para poder cambiar elementos sin actualizar en componente entero
  const ContadorRef = useRef(null);
  const BtnPausaRef = useRef(null);
  const BtnEmpezarRef = useRef(null);
  const BtnReiniciarRef = useRef(null);

  const Contador = () => {
    //ejecuta el contador al 0 si tiene el valor incial
    if (contador === "---") {
      setContador(0);
    }

    //creamos el intervalo del contador
    ContadorRef.current = setInterval(() => {
      setContador((prevContador) => prevContador + 1);
    }, 1000);

    //evitamos crear doble intervalo, es decir que cuente dos veces seguidas
    if (!ContadorRef.current) {
      clearInterval(ContadorRef.current);
    }
  };

  const Empezar = () => {
    BtnEmpezarRef.current.disabled = true;
    Contador();
  };

  const Reiniciar = () => {
    setContador("---");
    BtnEmpezarRef.current.disabled = false;
    //limpiamos el intervalo
    clearInterval(ContadorRef.current);
  };

  const Pausar = () => {
    BtnEmpezarRef.current.disabled = false;
    clearInterval(ContadorRef.current);
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
          {contador //convertimos el numero en string para poder hacerle un split y nos devuelva una lista para realizar el map
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
              Reiniciar();
            }}
            ref={BtnReiniciarRef}
          >
            <IoReload />
          </button>
          <button
            className="btn bg-black w-100 boton border-bottom-0 rounded-0 border-start-0 border-end-0 border-dark boton-parar text-warning"
            onClick={() => {
              Pausar();
            }}
            ref={BtnPausaRef}
          >
            <FaPause />
          </button>
          <button
            className="btn bg-black w-100 boton border-bottom-0 rounded-0 rounded-derecho border-start-0 border-end-0 border-dark boton-empezar text-success "
            onClick={() => {
              Empezar();
            }}
            ref={BtnEmpezarRef}
          >
            <FaPlay />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contador;
