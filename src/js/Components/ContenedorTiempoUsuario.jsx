import React, { useEffect, useState } from "react";

const ContenedorTiempoUsuario = ({ tiempo }) => {
  const [tiempoUsuario, setTiempoUsuario] = useState(0);

  //Ejecutamos un useeffect para consguir el tiempo apenas se renderize el componente
  useEffect(() => {
    setInterval(() => {
      setTiempoUsuario((prevTiempoUsuario) => prevTiempoUsuario + 1);
    }, 1000);
  }, []);

  return (
    <div className="contenedor-individual border rounded bg-black border-white row">
      <div className="col-12 text-center align-content-start">
        <span className="fw-bold text-white">Tiempo del usuario</span>
      </div>
      <div className="col-12 align-content-start text-center">
        <span className="tiempo-usuario text-white">{tiempoUsuario}s</span>
      </div>
    </div>
  );
};

export default ContenedorTiempoUsuario;
