import React, { useEffect, useRef, useState } from "react";
import { TiStopwatch } from "react-icons/ti";
import { Toaster, toast } from "sonner";

const Cronometro = ({ tiempo }) => {
  const [contador, setContador] = useState("---");
  const CronometroRef = useRef(null);
  const InputRef = useRef(null);

  const handleElementoTiempo = (e) => {
    setContador(e.target.value);
    if (e.target.value > 999999999999999999999) {
      toast.error("Juanjo NO... no podras hoy");
      setContador(":(");
      InputRef.current.disabled = true;
    } else if (e.target.value == "" || e.target.value <= 0) {
      setContador("---");
    }

    if (e.key === "Enter") {
      if (e.target.value == "" || e.target.value <= 0) {
        InputRef.current.value = "";
        setContador("---");
        clearInterval(CronometroRef.current);
        toast.error("Pon un valor valido");
      } else {
        InputRef.current.disabled = true;
        InputRef.current.value = "";
        EmpezarCronometro();
      }
    }
  };

  const cronometro = () => {
    CronometroRef.current = setInterval(() => {
      setContador((prevContador) => prevContador - 1);
    }, 1000);
    if (!CronometroRef.current) {
      clearInterval(CronometroRef.current);
    }
  };

  const EmpezarCronometro = () => {
    if (contador > 0) {
      cronometro();
    }
  };

  if (contador === 0) {
    InputRef.current.disabled = false;
    clearInterval(CronometroRef.current);
    toast.success("Cronometro finalizado");
  }

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
              return <div className="num rounded mx-0">{numero}</div>;
            })}
        </div>
      </div>
      <div className="col-12 align-content-center text-center d-flex justify-content-center">
        <input
          ref={InputRef}
          className="form-label text-center rounded-pill "
          placeholder="Enter para iniciar"
          onChange={handleElementoTiempo}
          onKeyDown={handleElementoTiempo}
          type="number"
        />
      </div>
    </div>
  );
};

export default Cronometro;
