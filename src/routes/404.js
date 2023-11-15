// NotFound.js
import React from 'react';
import "../styles/globals.css"
import "../styles/Home.css"
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Página não encontrada</h1>
      <p style={{ paddingLeft: '10px' }}>A página que você está procurando não existe.</p>
      <Link className="btnHome" to={"selectFases"}>Voltar Para o Jogo</Link>
    </div>

  );
};

export default NotFound;
