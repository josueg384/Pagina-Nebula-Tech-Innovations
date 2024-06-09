import React from "react";
import ReactDOM from "react-dom/client";

//COMPONENTES
import { Header } from "./components/Header.jsx";
import { Sec1_Inicio } from "./components/Sec1_Inicio.jsx";
import { Sec5_cliente } from "./components/Sec5_clientes.jsx";
import { Sec6_reportes } from "./components/Sec6_reportes.jsx";
import { Sec7_nuestros } from "./components/Sec7_nuestros.jsx";
import { Footer } from "./components/Footer.jsx";
//ESTILOS
import "./css/normalize.css";
import "./css/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Header />
    <main>
      <Sec1_Inicio />
      <Sec5_cliente />
      <Sec6_reportes/>
      <Sec7_nuestros/>
    </main>
    <Footer />
    
  </>
);
