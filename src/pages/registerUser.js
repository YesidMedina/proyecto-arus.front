import React from "react";
import Layout from "../components/Layout";
import { useState } from "react";
import Link from "next/link";
import { postUser, getUser } from "../services/User";

const RegisterUser = () => {
  const [datos, setDatos] = useState({
    name: "",
    admin: "",
    email: "",
    support: "",
    surname: "",
  });

  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const saveUser = async (event) => {
    try {
      event.preventDefault();
      const { name, surname, email, admin } = datos;
      const data = {
        name,
        surname,
        email,
        rol: admin === "on" ? "1" : "0",
      };

      const res = await postUser(data);

      if (res) {
        setMessage(res.msg);
        window.location.href =
          admin === "on" ? "/registerServer" : "/listServers";
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <div className="flex justify-end absolute right-0 -mt-28">
        <Link href="/">
          <div className=" flex justify-between">
            <a className=" px-5 py-3 rounded mr-8 transition ease-in-out delay-150 bg-green-300 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-300 duration-300">
              Login
            </a>
          </div>
        </Link>
      </div>

      <div className="md:w-4/5 xl:w-3/5 mx-auto mb-32 px-52 py-6 -mt-28">
        <h2 className="text-4xl text-green-200 text-center my-4 font-bold font-serif">
          Ingrese sus datos
        </h2>
        <div className="flex justify-center mt-5">
          <div className="w-full max-w-lg">
            <form
              className="bg-black rounded shadow-md px-8 pt-6 pb-8 mb-4"
              onSubmit={saveUser}
            >
              <div className="mb-4">
                <label
                  className="blok text-gray-500 text-ms font-serif mb-2"
                  htmlFor="email"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  placeholder="Nombre"
                  name="name"
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-4">
                <label
                  className="blok text-gray-500 text-ms font-serif mb-2"
                  htmlFor="surname"
                >
                  Apellido
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none focus:shadow-outline"
                  id="surname"
                  placeholder="Apellido"
                  name="surname"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="blok text-gray-500 text-ms font-serif mb-2"
                  htmlFor="surname"
                >
                  Correo
                </label>
                <input
                  type="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleInputChange}
                />
              </div>
              <div >
                <label className="text-white px-8 ">Administrador</label>
                <input
                  type="checkbox"
                  name="admin"
                  onChange={handleInputChange}
                />
                <label className="text-white px-8">soporte</label>
                <input
                  type="checkbox"
                  name="support"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <p style={{ color: "black" }}>{message}</p>
              </div>
              <input
                className=" px-5 py-3 rounded mr-8 transition ease-in-out delay-150 bg-green-300 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-100 duration-100 mt-4"
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

export default RegisterUser;
