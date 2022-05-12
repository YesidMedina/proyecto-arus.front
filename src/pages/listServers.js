import React, { useEffect, useState, useId } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { alterServer, getServer } from "../services/Server";

const ListServers = () => {
  const id = useId();
  const [listServer, setListServers] = useState([]);

  const getAllServer = async () => {
    const allServers = await getServer();
    console.log(allServers);
    setListServers(allServers);
  };

  useEffect(() => {
    getAllServer();
  }, []);

  const altServer = async (client) => {
    const altServer = await alterServer(client);
    console.log();
  };

  // const getServer = await listServers()
  // const listServers = [data, setData];
  // getServer.map((data) => data);

  return (
    <Layout>
      <div>
        <div className="flex justify-end absolute right-0 -mt-32">
          <Link href="/">
            <div className=" flex justify-between">
              <a className=" px-5 py-3 rounded mr-8 transition ease-in-out delay-150 bg-green-300 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-300 duration-50">
                Inicio
              </a>
            </div>
          </Link>
        </div>

        <h2 className="text-4xl text-green-200 text-center my-4 -mt-20 font-serif">
          Servidores
        </h2>

        <div className="flex justify-center mt-5 ">
          <div className="w-full max-w-screen-sm">
            {listServer.map(({ client, ip, nameServer, disk, memory, cpu }) => (
              <div key={id} className="flex flex-col items-center border ">
                <button
                  className="px-5 py-3 rounded transition ease-in-out delay-150 bg-green-300 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-300 duration-300"
                  onClick={() => altServer(client)}
                >
                  Alterar servidor
                </button>

                <h1 className="text-yellow-300">Nombre: {client}</h1>
                <p className="text-yellow-300">IP: {ip}</p>
                <p className="text-green-200">Nombre Servidor: {nameServer}</p>
                <div>
                  <div>
                    <h2 className="text-white">Disco</h2>
                    <p className="text-green-200">Capacidad: {disk.capacity}</p>
                    <p className="text-green-200">Rendimiento: {disk.performans}</p>
                  </div>

                  <div>
                    <h2 className="text-white">Memoria</h2>
                    <p className="text-green-200">Capacidad: {memory.capacity}</p>
                    <p className="text-green-200">Rendimiento: {memory.performans}</p>
                  </div>
                  <div>
                    <h2 className="text-white">CPU</h2>
                    <p className="text-green-200">Capacidad: {cpu.capacity}</p>
                    <p className="text-green-200">Rendimiento: {cpu.performans}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ListServers;
