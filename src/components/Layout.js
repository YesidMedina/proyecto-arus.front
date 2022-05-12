import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Proyecto Servidores</title>
        <link
          href="https://unpkg.com/tailwindcss@^2.0/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>

      <div className="bg-gray-700 min-h-screen pb-2">
        <div className="container mx-auto">
          <Header />
          <main className="mt-20">{children}</main>
        </div>
      </div>
      <div className="bg-black">
        <div className="container mx-auto">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
