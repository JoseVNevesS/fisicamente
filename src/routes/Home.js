import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo_2.png";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const playerName = localStorage.getItem("NomeJogador");
  const playerType = localStorage.getItem("tipoPersonagem");

  const bothFieldsExist = playerName && playerType;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 300);
  },[])

  if (isLoading) {
    return (
      <div id="preloader"></div>
    )
  } else {
    return (
      <div className="homePage">



        <div className="homeContent">
          <img src={logo} className="logo" />
          {bothFieldsExist ? (
            <Link className="btnHome" to={"selectFases"}>
              Iniciar
            </Link>
          ) : (
            <Link className="btnHome" to={"playerinfo/new"}>
              Iniciar
            </Link>
          )}
          <Link className="btnHome" to={"playerinfo/edit"}>
            Configurações
          </Link>
        </div>
        {/* <div className="backgroundImage"></div> */}
      </div>
    );
  }

}
