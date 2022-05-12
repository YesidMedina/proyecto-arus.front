import React from "react";
import Layout from "../components/Layout";

const Support = () => {
  return (
    <Layout>
      <div >
        <h1 className="text-4xl text-green-200 text-center my-4 font-bold font-serif">Soporte</h1>
        <h1 className="text-yellow-300"> Disco </h1>
        <div className="w-full max-w-lg">
        <p className="text-white">
          El disco estaba en 25%, se llevo al 200% borrando, informacion
          necesaria
        </p>
        <h1 className="text-yellow-300"> Memoria </h1>
        <p className="text-white">
          Memoria en optimas condiciones
        </p >
        <h1 className="text-yellow-300">CPU</h1>
        <p className="text-white">
          CPU en optimas condiciones
        </p>
      </div>
      </div>
    </Layout>
  );
};

export default Support;
