import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import { getServer, postServer } from "../services/Server";

const RegisterServer = () => {
  const [datos, setDatos] = useState({
    ip: "",
    nameServer: "",
    client: "",
    disk: "",
    memory: "",
    cpu: "",
  });

  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const saveServer = async (event) => {
    event.preventDefault();
    const { ip, nameServer, client, disk, memory, cpu } = datos;
    const data = {
      ip,
      nameServer,
      client,
      disk: { capacity: disk, performans: 25 },
      memory: { capacity: memory, performans: 25 },
      cpu: { capacity: cpu, performans: 25 },
    };

    console.log(datos);
    const res = await postServer(data);

    // setMessage(res.msg);
  };

  return (
    <Layout>
      <div className="flex justify-end absolute right-0 -mt-16">
        <Link href="/listServers">
          <div className=" flex justify-between">
            <a className=" px-5 py-3 rounded mr-8 transition ease-in-out delay-150 bg-green-300 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-300 duration-300">
              Servidores
            </a>
          </div>
        </Link>
      </div>

      <div className="md:w-4/5 xl:w-3/5 mx-auto">
        <h2 className="text-4xl text-green-200 text-center my-4 -mt-40 font-bold font-serif py-4 ">
          Ingrese el registro del servidor
        </h2>
        <div className="flex justify-center">
          <div className="w-full max-w-lg">
            <form
              className="bg-gray-800 shadow-md px-8 pt-8 pb-8 "
              onSubmit={saveServer}
            >
              <div className="mb-4">
                <label
                  className="blok text-gray-500 text-ms font-serif mb-2"
                  htmlFor="ip"
                >
                  IP del servidor
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none focus:shadow-outline"
                  id="ip"
                  placeholder="IP"
                  name="ip"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="blok text-gray-500 text-ms font-serif mb-2"
                  htmlFor="nameServer"
                >
                  Nombre del Servidor
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none focus:shadow-outline"
                  id="nameServer"
                  placeholder="Nombre del Servidor"
                  name="nameServer"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="blok text-gray-500 text-ms font-serif mb-2"
                  htmlFor="client"
                >
                  Cliente
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none focus:shadow-outline"
                  id="client"
                  placeholder="Cliente"
                  name="client"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="blok text-gray-500 text-ms font-serif mb-2"
                  htmlFor="client"
                >
                  Disco
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none focus:shadow-outline"
                  id="disk"
                  placeholder="Soporte"
                  name="disk"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="blok text-gray-500 text-ms font-serif mb-2"
                  htmlFor="client"
                >
                  Memoria
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none focus:shadow-outline"
                  id="memory"
                  placeholder="Memoria"
                  name="memory"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="blok text-gray-500 text-ms font-serif mb-2"
                  htmlFor="client"
                >
                  CPU
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none focus:shadow-outline"
                  id="cpu"
                  placeholder="CPU"
                  name="cpu"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <p style={{ color: "green" }}>{message}</p>
              </div>

              <input
                className="px-5 py-3 rounded mr-8 transition ease-in-out delay-150 bg-green-300 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-50 duration-50"
                type="submit"
                value="registrar"
              />
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterServer;
