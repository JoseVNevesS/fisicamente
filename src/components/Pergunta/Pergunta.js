import React, { memo, useEffect, useState } from "react";
import "./style.css";
// import enemySprite from "../../assets/newton.png"
import Cronometro from "../Cronometro/Cronometro";
import LifeBar from "../LifeBar/LifeBar";
// import jogador_sprites from '../../assets/player-sprites/protagonista-serio.png'

import { playerSprites } from "../../assets/player-sprites/playerSprites";
import porta_retrato from "../../assets/quadro-vintage.png";

export default function Pergunta({
  fisico,
  enemySprites,
  enemyLife,
  pergunta,
  onRespostaClick,
  tempoEsgotado,
  textColor,
  emotionEnemy,
  playerLife,
  emotionPlayer,
  bgColor,
  errou,
  handleContinuar
}) {
  const [reset, setReset] = useState(false);
  const [enemySprite, setEnemySprite] = useState(enemySprites.base);
  const [playerSprite, setPlayerSprite] = useState(playerSprites.base);
  const [perguntaText, setPerguntaText] = useState("");

  const playerName = localStorage.getItem("NomeJogador");

  useEffect(() => {
    console.log(pergunta.respostas[pergunta.respostaCorreta]);
    let prop;
    switch (errou) {
      case null:
        prop = "pergunta";
        break;
      case true:
        prop = "erro";
        break;
      case false:
        prop = "acerto";
        break;
    }
    // Função para cancelar a animação anterior
    const cancelarAnimacao = () => {
      clearTimeout(animationTimeout);
    };

    let animationTimeout; // Declare a variável no escopo do useEffect

    // Reiniciar a animação quando a pergunta muda
    cancelarAnimacao();
    setPerguntaText("");
    let index = 0;
    let tamanhoPergunta = pergunta[prop].length;
    let texto = "";

    const exibirLetra = () => {
      let container = document.querySelector('.pergunta-vilao-texto')
      if (index < tamanhoPergunta) {
        texto += pergunta[prop].charAt(index);
        // console.log(texto)
        index++;
        setPerguntaText(texto);
        if (container) {
          container.scrollTop = container.scrollHeight;
        }
        animationTimeout = setTimeout(exibirLetra, 15);
      }
    };

    // Iniciar a animação
    animationTimeout = setTimeout(exibirLetra, 15);

    // Certifique-se de cancelar a animação anterior quando a pergunta muda novamente
    return cancelarAnimacao;
  }, [pergunta, errou]);

  useEffect(() => {
    let intervalo;

    function animar() {
      /* Animacao Inimigo */
      // armazenando em sprites as imagens de cada emoção do inimigo (olhando pra esquerda, direita, piscando etc)
      const enemySpritesList = Object.values(enemySprites[emotionEnemy]);
      // gerando um numero randomico baseado no tamanho do vetor sprites para sortear uma animação diferente
      let random = Math.floor(Math.random() * enemySpritesList.length);
      // setando a sprite aleatória que foi sorteada
      setEnemySprite(enemySpritesList[random]);

      /* Animacao jogador */
      // armazenando em sprites as imagens de cada emoção do inimigo (olhando pra esquerda, direita, piscando etc)
      const playerSpritesList = Object.values(playerSprites[emotionPlayer]);
      // gerando um numero randomico baseado no tamanho do vetor sprites para sortear uma animação diferente
      random = Math.floor(Math.random() * playerSpritesList.length);
      // setando a sprite aleatória que foi sorteada
      setPlayerSprite(playerSpritesList[random]);
    }

    function startAnimation() {
      // definindo o intervalo de 1 segundo para trocar entre as sprites
      intervalo = setInterval(animar, 1000);
    }

    function stopAnimation() {
      // parando o intervalo
      clearInterval(intervalo);
    }

    stopAnimation(); // Sempre que a emoção do boneco mudar para o intervalo
    animar(); // chamando função animar para mudar instantaneamente a face do boneco
    startAnimation(); // iniciando um novo intervalo para continuar a animação

    return () => {
      // quando o componente desmontar ou quando a emoção mudar para o timer
      stopAnimation();
    };
  }, [emotionEnemy]);

  return (
    <div className="area-jogo">
      {/* Caixa do Vilão */}
      <div className="container-vilao-posicao">
        <div className="container-vilao">
          <div className="vida-inimigo-area">
            <p className="nome-vilao" style={{ color: textColor }}>
              {fisico}
            </p>
            <LifeBar title="vida inimigo" vida={enemyLife} bgColor={bgColor} />
          </div>

          <div className="pergunta-vilao-area">
            <div className="pergunta-vilao">
              <p className="pergunta-vilao-texto">{perguntaText}</p>
            </div>

            <div className="porta-retrato-vilao-posicao">
              <div className="porta-retrato">
                <img src={porta_retrato} className="porta-retrato-vilao-img" />
                <img src={enemySprite} className="imagem-fisico" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Caixa do heroi */}
      <div className="container-heroi-posicao">
        <div className="container-heroi">
          <div className="vida-heroi-area">
            <p
              className="nome-heroi"
              style={{ color: localStorage.getItem("corTexto") }}
            >
              {playerName.toUpperCase()}
            </p>
            <LifeBar
              title="vida heroi"
              vida={playerLife}
              bgColor={localStorage.getItem("corFavorita")}
              labelColor={localStorage.getItem("corTexto")}
            />
            
            {errou === null ? (
              <Cronometro
                tempoEsgotado={tempoEsgotado}
                tempoMaximo={45}
                reset={reset}
                setReset={setReset}
              ></Cronometro>
            ) : (
              <></>
            )}
          </div>

          <div className="alternativas-heroi-posicao">
            <img src={playerSprite} className="imagem-heroi" />
            <ul className="alternativas">
              {errou !== null ? (
                <li
                  className="botao"
                  style={{
                    backgroundColor: localStorage.getItem("corFavorita"),
                    color: localStorage.getItem("corTexto"),
                  }}
                  onClick={() => {
                    handleContinuar();
                  }}
                >
                  Continuar
                </li>
              ) : (
                pergunta.respostas.map((resposta, index) => (
                  <li
                    key={index}
                    className="botao"
                    style={{
                      backgroundColor: localStorage.getItem("corFavorita"),
                      color: localStorage.getItem("corTexto"),
                    }}
                    onClick={() => {
                      setReset(true);
                      onRespostaClick(index);
                    }}
                  >
                    {resposta}
                  </li>
                ))
              )}
            </ul>
          </div>

        </div>
      </div>
        <div style={{height: '50px'}}></div>
    </div>
  );
}
