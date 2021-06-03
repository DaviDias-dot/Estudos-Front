import React from 'react'
import Header from './Header'
import './App.css';

function App() {
  return (
   <Header name="Teste" links={["Sobre", "Comprar", "Contato", "Login", "Teste"]}></Header>
  );
}

export default App;
