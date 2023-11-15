import React, { useState, useEffect, memo } from 'react';
import Pergunta from '../components/Pergunta/Pergunta';
import { fase1 } from '../perguntas/fase1';
import { fase2 } from '../perguntas/fase2';
import { fase3 } from '../perguntas/fase3';
import { fase4 } from '../perguntas/fase4';
import { useParams, useNavigate } from "react-router";


import acertoEffect from "../assets/sounds/acerto.mp3"
import erroEffect from "../assets/sounds/erro.mp3"
import bgSong from "../assets/sounds/bg-sound.mp3"


import "../styles/Jogo.css"
import ResultsScreen from '../components/ResultsScreen/ResultsScreen';
import axios from 'axios';

export default memo(function Jogo() {

  const [isLoading, setIsLoading] = useState(false)
  const [playerLife, setPlayerLife] = useState(150);
  const [enemyLife, setEnemyLife] = useState(150);
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [perguntasRespondidas, setPerguntasRespondidas] = useState([]);
  const [jogadorGanhou, setJogadorGanhou] = useState(false);
  const [jogadorPerdeu, setJogadorPerdeu] = useState(false);
  const [emotionEnemy, setEmotionEnemy] = useState("waiting");
  const [emotionPlayer, setEmotionPlayer] = useState("waiting");
  const [errou, setErrou] = useState(null)
  const [perguntas, setPerguntas] = useState(null)

  const navigate = useNavigate();

  let { fase } = useParams();
  // let perguntas;
  let sprites;
  let nome_fisico;
  let introSong;
  let bgColor;
  let textColor;

  switch (fase) {
    case "1":
      // setPerguntas(fase1.perguntas);
      sprites = fase1.sprites;
      nome_fisico = fase1.nome
      introSong = fase1.intro
      bgColor = fase1.bg
      textColor = fase1.textColor
      break;
    case "2":
      // setPerguntas(fase2.perguntas);
      sprites = fase2.sprites;
      nome_fisico = fase2.nome
      introSong = fase2.intro
      bgColor = fase2.bg
      textColor = fase2.textColor
      break;
    case "3":
      // setPerguntas(fase3.perguntas);
      sprites = fase3.sprites;
      nome_fisico = fase3.nome
      introSong = fase3.intro
      bgColor = fase3.bg
      textColor = fase3.textColor
      break;
    default:
      // setPerguntas(fase4.perguntas);
      sprites = fase4.sprites;
      nome_fisico = fase4.nome
      introSong = fase4.intro
      bgColor = fase4.bg
      textColor = fase4.textColor
      break;
  }

  async function buscarPerguntas(fase) {
    setIsLoading(true)
    await axios.get(`https://jogo-tcc-api.jusezinhu.repl.co/api/perguntas/${fase}`, { timeout: 5000 })
      .then(res => {
        let perguntas = res.data
        for (const pergunta of perguntas) {
          shuffleAnswers(pergunta)
        }
        shuffleArray(perguntas)
        setPerguntas(perguntas)
        setTimeout(() => {
          setIsLoading(false)
        }, 500);
      })
      .catch(e => {
        console.log("Erro", e)
      });

  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function shuffleAnswers(pergunta) {
    let respostaCorreta = pergunta.respostas[[pergunta.respostaCorreta]]
    shuffleArray(pergunta.respostas);

    pergunta.respostaCorreta = pergunta.respostas.indexOf(respostaCorreta);
  }

  useEffect(() => {
    if (playerLife <= 0) {
      setJogadorPerdeu(true);
    }

    if (enemyLife <= 0) {
      setJogadorGanhou(true)
    }
  }, [playerLife, enemyLife]);

  async function randomizarPerguntas(faseId) {
    let perguntas = await buscarPerguntas(1)
    console.log(perguntas)
    for (const pergunta of perguntas) {
      shuffleAnswers(pergunta)
    }
    shuffleArray(perguntas)
    setPerguntas(perguntas)
    return (perguntas)
  }

  useEffect(() => {
    let fases = JSON.parse(localStorage.getItem('fases'))
    if (!fases[parseInt(fase) - 1]?.unlocked) {
      navigate('/selectFases')
      return;
    }

    switch (fase) {
      case "1":
        buscarPerguntas(1)
        break;
      case "2":
        buscarPerguntas(2)
        break;
      case "3":
        buscarPerguntas(3)
        break;
      default:
        buscarPerguntas(4)
        break;
    }

    let introAudio = new Audio(introSong);
    introAudio.currentTime = 0;
    let bgAudio = new Audio(bgSong);
    bgAudio.currentTime = 0;

    introAudio.volume = 0.1;
    bgAudio.volume = 0.01;
    bgAudio.loop = true;



    introAudio.addEventListener('ended', () => {
      bgAudio.play();
      let volume = 0.01
      let fadeInInterval = setInterval(() => {
        if (volume < 0.1) {
          volume += 0.0075
          bgAudio.volume = volume
        } else {
          clearInterval(fadeInInterval)
        }
      }, 300);
    });

    introAudio.play();
    return () => {
      introAudio.pause();
      introAudio.currentTime = 0;
      bgAudio.pause();
      bgAudio.currentTime = 0;
    };
  }, [])

  function tempoEsgotado() {
    console.log('Tempo esgotado! Resposta errada.');
    const novaVida = playerLife - 10; //resposta errada desconta uns pontos (Decidir se vai valer o valor da pergunta)
    setPlayerLife(novaVida);
    setPerguntasRespondidas([...perguntasRespondidas, perguntaAtual]);
    setPerguntaAtual(perguntaAtual + 1);
  }

  function handleRespostaClick(index) {

    const pergunta = perguntas[perguntaAtual];
    console.log(index)
    console.log(pergunta.respostaCorreta)

    if (index === pergunta.respostaCorreta) {
      const clickSound = new Audio(acertoEffect)
      clickSound.volume = 0.5;
      clickSound.play()
      setEmotionEnemy('mad');
      setEmotionPlayer("happy")
      setErrou(false)
      const novaVida = enemyLife - pergunta.pontos;
      setEnemyLife(novaVida);
    } else {
      const clickSound = new Audio(erroEffect)
      clickSound.volume = 0.5;
      clickSound.play()
      setEmotionEnemy('happy');
      setEmotionPlayer("mad")
      setErrou(true)
      const novaVida = playerLife - pergunta.pontos;
      setPlayerLife(novaVida);
    }

    // // Adiciona o índice da pergunta atual como perguntas que já foram feitas
    setPerguntasRespondidas([...perguntasRespondidas, perguntaAtual]);
    // próxima pergunta
  }

  function handleContinuar() {
    setErrou(null)
    const proximaPergunta = perguntaAtual + 1;
    setPerguntaAtual(proximaPergunta);
  }

  sessionStorage.setItem("Nome_Fisico", nome_fisico);


  if (isLoading) {
    return (<div id="preloader"></div>)
  }
  else if (perguntas) {
    return (
      <div className="Jogo">

        {jogadorGanhou || jogadorPerdeu ? (
          <ResultsScreen jogadorGanhou={jogadorGanhou} jogadorPerdeu={jogadorPerdeu} />
        ) : (
          <div className="lifeBarsDiv">
            {/* <LifeBar title={"Sua Vida"} style={"player"} vida={playerLife} />
          <LifeBar title={nome_fisico} style={"enemy"} vida={enemyLife} /> */}

            <Pergunta
              fisico={nome_fisico}
              bgColor={bgColor}
              textColor={textColor}
              enemySprites={sprites}
              enemyLife={enemyLife}
              pergunta={perguntas[perguntaAtual]}
              onRespostaClick={handleRespostaClick}
              tempoEsgotado={tempoEsgotado}
              emotionEnemy={emotionEnemy}
              emotionPlayer={emotionPlayer}
              playerLife={playerLife}
              errou={errou}
              handleContinuar={handleContinuar}
            />


          </div>
        )}
      </div>
    );
  }
}
)