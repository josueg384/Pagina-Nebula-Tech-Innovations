import React from "react";
import ReactDOM from "react-dom/client";

//COMPONENTES
import { Header } from "./components/Header.jsx";
import { Sec1_Inicio } from "./components/Sec1_Inicio.jsx";

//ESTILOS
import "./css/normalize.css";
import "./css/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Header />
    <main>
      <Sec1_Inicio />
    </main>
    
  </>
);
