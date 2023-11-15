import React, { useEffect, useState } from "react";
import "../styles/playerInfo.css";
import playerTipo1 from "../assets/player-sprites/1/protagonista.png";
import playerTipo2 from "../assets/player-sprites/2/protagonista-f.png";
import { useParams } from "react-router-dom";

export default function PlayerInfo() {
  const [playerName, setPlayerName] = useState("");
  const [playerType, setPlayerType] = useState("");
  const [color, setColor] = useState("");

  let { editar } = useParams();

  const handleNameChange = (e) => {
    setPlayerName(e.target.value);
  };

  const handleGenderChange = (e) => {
    setPlayerType(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  useEffect(() => {
    if (editar === 'edit') {
      let nomeJogador = localStorage.getItem("NomeJogador");
      let tipoPersonagem = localStorage.getItem("tipoPersonagem");
      let corFavorita = localStorage.getItem("corFavorita");
      setPlayerName(nomeJogador)
      setPlayerType(tipoPersonagem)
      setColor(corFavorita)
    }
  }, [])


  const startGame = () => {
    if (playerName && playerType && color) {
      localStorage.setItem("NomeJogador", playerName);
      localStorage.setItem("tipoPersonagem", playerType);
      localStorage.setItem("corFavorita", color);
      localStorage.setItem("corTexto", color === "#ff0" || color === "#56c53b" ? "black" : "white");
      if (editar === 'edit') {
        window.location.href = "/";
      } else {
        window.location.href = "/selectFases";
      }
    } else {
      alert("Por favor, preencha todas as informações.");
    }
  };

  return (
    <div className="homePage">
      <div className="homeContent">
        <div className="modal-background">
          <div className="modal"
            style={{
              borderColor: color
            }}
          >
            <h2 className="playerInfoTitle">Insira as informações do jogador</h2>
            <label>Nome</label>
            <input style={{border: '2px solid', borderColor: color, width: '85%' }}
              type="text"
              placeholder="Digite seu nome"
              value={playerName}
              onChange={handleNameChange}
            />

            <label>Escolha seu Personagem</label>
            <div className="gender-select">
              <label className={playerType === "1" ? "selected" : ""}>
                <input
                  type="radio"
                  name="gender"
                  value="1"
                  onChange={handleGenderChange}
                />
                <img src={playerTipo1} alt="1" />
              </label>
              <label className={playerType === "2" ? "selected" : ""}>
                <input
                  type="radio"
                  name="gender"
                  value="2"
                  onChange={handleGenderChange}
                />
                <img src={playerTipo2} alt="2" />
              </label>
            </div>










            <label>Escolha sua cor favorita</label>
            <div className="color-select">
              <label className={color === "#f0f" ? "selected" : ""}>
                <input
                  type="radio"
                  name="colors"
                  value="#f0f"
                  onChange={handleColorChange}
                />
                <div className="quadrado">
                  <div className="corSquare" style={{ backgroundColor: "#f0f" }}></div>
                </div>
              </label>
              <label className={color === "#ff0" ? "selected" : ""}>
                <input
                  type="radio"
                  name="colors"
                  value="#ff0"
                  onChange={handleColorChange}
                />
                <div className="quadrado">
                  <div className="corSquare" style={{ backgroundColor: "#ff0" }}></div>
                </div>
              </label>
              <label className={color === "#56c53b" ? "selected" : ""}>
                <input
                  type="radio"
                  name="colors"
                  value="#56c53b"
                  onChange={handleColorChange}
                />
                <div className="quadrado">
                  <div className="corSquare" style={{ backgroundColor: "#56c53b" }}></div>
                </div>
              </label>
              <label className={color === "#b50909" ? "selected" : ""}>
                <input
                  type="radio"
                  name="colors"
                  value="#b50909"
                  onChange={handleColorChange}
                />
                <div className="quadrado">
                  <div className="corSquare" style={{ backgroundColor: "#b50909" }}></div>
                </div>
              </label>
            </div>





            <button className="btnFinishPlayer" onClick={startGame} style={{
              backgroundColor: color,
              color: color === "#ff0" || color === "#0ff" ? "black" : "white"
            }}>
              {editar === 'edit' ?
              'Concluir'
              :
              'Vamos Lá !'
            }
             
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
