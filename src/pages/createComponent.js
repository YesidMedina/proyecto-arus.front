import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import { getComponent, postComponent } from "../services/Component";

const CreateComponent = () => {
  const [datos, setDatos] = useState({
    addComponents: "",
    capacity: "",
    alert: "",
  });

  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const saveComponent = async (event) => {
    event.preventDefault();
    const { addComponents, capacity, alert } = datos;

    console.log(datos);
    const res = await postComponent(datos);

    // setMessage(res.msg);
  };

  return (
    <Layout>
      <div className="flex justify-end absolute right-0 -mt-16">
        <Link href="/createServer">
          <div className=" flex justify-between">
            <a className=" px-5 py-3 rounded mr-8 transition ease-in-out delay-150 bg-green-300 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-300 duration-300">
              Servidores
            </a>
          </div>
        </Link>
      </div>

      <div className="md:w-4/5 xl:w-3/5 mx-auto">
        <h2 className="text-4xl text-green-200 text-center my-4 -mt-40 font-bold font-serif py-4 ">
          Agregar componentes
        </h2>
        <div className="flex justify-center">
          <div className="w-full max-w-lg">
            <form
              className="bg-gray-800 shadow-md px-8 pt-8 pb-8 "
              onSubmit={saveComponent}
            >
              <div className="mb-4">
                <label
                  className="blok text-gray-500 text-ms font-serif mb-2"
                  htmlFor="ip"
                >
                  Nuevo componente
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none focus:shadow-outline"
                  id="addComponents"
                  placeholder="Nuevo componente"
                  name="addComponents"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="blok text-gray-500 text-ms font-serif mb-2"
                  htmlFor="nameServer"
                >
                  Capacidad
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none focus:shadow-outline"
                  id="capacity"
                  placeholder="Capacidad"
                  name="capacity"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="blok text-gray-500 text-ms font-serif mb-2"
                  htmlFor="client"
                >
                  Alerta
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none focus:shadow-outline"
                  id="alert"
                  placeholder="Alerta"
                  name="alert"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <p style={{ color: "green" }}>{message}</p>
              </div>

              <input
                className="px-5 py-3 rounded mr-8 transition ease-in-out delay-150 bg-green-300 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-50 duration-50"
                type="submit"
                value="Agregar"
              />
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateComponent;
