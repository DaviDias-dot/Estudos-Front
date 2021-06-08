import "./App.css";
import React from "react";
import Card from "./components/layout/Card";

import Primeiro from "./components/Basico/Primeiro";
import ComParametro from "./components/Basico/ComParametro";
import ComFilhos from "./components/Basico/ComFilhos";
import Repeticao from "./components/Basico/Repeticao";
import Condicional from "./components/Basico/Condicional";
import Pai from "./components/Comunicacao/direta/Pai";
import Super from "./components/Comunicacao/indireta/Super";
import Input from "./components/Form/Input";
import Contador from './components/Contador/Contador'
import Mega from './components/Mega-Sena/Mega'

export default (props) => (
  <div className="App">
    <h1>Fundamentos do React</h1>

    <div className="Cards">
    <Card titulo="#10 Mega Sena" color="#646570">
        <Mega qtdeNumero = {6}></Mega>
      </Card>
        
      <Card titulo="#09 Contador" color="#eebbf5">
        <Contador passo={10} valor={100}></Contador>
      </Card>

      <Card titulo="#08 Input" color="#eebbf5">
        <Input></Input>
      </Card>

      <Card titulo="#07 Comunicação direta" color="#000">
        <Super></Super>
      </Card>

      <Card titulo="#06 Comunicação direta" color="#0ff1ce">
        <Pai></Pai>
      </Card>

      <Card titulo="#05 Condicional" color="#afb5fc">
        <Condicional numero={120}></Condicional>
      </Card>

      <Card titulo="#04 Repetição" color="#9933ff">
        <Repeticao></Repeticao>
      </Card>

      <Card titulo="#03 Com filhos" color="#a020f0">
        <ComFilhos>
          <ul>
            <li>Ana</li>
            <li>Bia</li>
            <li>Carlos</li>
            <li>Daniel</li>
          </ul>
        </ComFilhos>
      </Card>

      <Card titulo="#02 Componente com parametro" color="#65708b">
        <ComParametro titulo="Novo titulo" subtitulo="Sub" />
      </Card>

      <Card titulo="#01 Primeiro conteudo" color="#87ceeb">
        <Primeiro />
      </Card>
    </div>
  </div>
);
