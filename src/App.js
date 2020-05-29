import React from "react";
import "./App.css";

import Home  from "./components/Home/Home";

import Filtros from "./components/Filtros/Filtros";
import Home from "./components/Home/Home";
import styled from "styled-components";


const ContainerGeral = styled.div`
  display: flex;
  flex-direction: row;
  background-color: gray;
  width: 100vw;
`;

function App() {
  return (

    <div>
      <Home
      />
    </div>

    <ContainerGeral>
      <Filtros />

      <Home />
    </ContainerGeral>

  );
}

export default App;
