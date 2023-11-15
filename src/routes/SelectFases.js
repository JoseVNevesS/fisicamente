import React, { useEffect, useState } from "react";
import "../styles/SelectFases.css";
import Fase from "../components/Pergunta/Fase.js";
import { useNavigate } from "react-router-dom";

import newtonImg from '../assets/newton-sprites/issac-newton-base.png'
import faradayImg from '../assets/faraday-sprites/michel-faraday-base.png'
import josephImg from '../assets/jose_black-sprites/joseph-black.png'
import pascalImg from '../assets/pascal-sprites/blaise-pascal.png'

import menuSong from "../assets/sounds/menu-sound.mp3"
import Modal from "../components/Modal/Modal";

function SelectFases() {
  const [isLoading, setIsLoading] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  
  let fases = [
    { id: 1, title: "Fase 1", unlocked: true },
    { id: 2, title: "Fase 2", unlocked: false },
    { id: 3, title: "Fase 3", unlocked: false },
    { id: 4, title: "Fase 4", unlocked: false },
  ];

  const imagens = {
    1: {
      img: newtonImg,
      color: '#6e202d',
      nome: 'Isaac Newton'
    },
    2: {
      img: faradayImg,
      color: '#dfbc67',
      nome: 'Michael Faraday'
    },
    3: {
      img: josephImg,
      color: '#111a36',
      nome: 'Joseph Black'
    },
    4: {
      img: pascalImg,
      color: '#0a75f0',
      nome: 'Blaise Pascal'
    }
  }

  useEffect(() => {
    let bgSong = new Audio(menuSong);
    bgSong.currentTime = 0;

    bgSong.volume = 0.05;
    bgSong.loop = true;

    bgSong.play()

    setTimeout(() => {
      setIsLoading(false)
    }, 300);

    if (!localStorage.getItem('tutorial')) {
      setModalOpen(true)
    }

    return () => {
      bgSong.pause();
      bgSong.currentTime = 0;
    }
  }, [])

  let fasesLocal = localStorage.getItem("fases");
  if (!fasesLocal) {
    localStorage.setItem("fases", JSON.stringify(fases));
  } else {
    fases = JSON.parse(fasesLocal);
  }

  const navigate = useNavigate();

  const handleFaseClick = (faseId) => {
    // console.log(`Clicou na fase ${faseId}`);
    navigate(`/jogo/${faseId}`, { replace: false });
  };

  if (isLoading) {
    return (
      <div id="preloader"></div>
    )
  } else {
    return (
      <>
        <Modal open={modalOpen} setOpen={setModalOpen}/>
        <div className="jogo">
          <button className="btnAbrirTutorial" onClick={() => {setModalOpen(true)}}>Tutorial</button>

          {fases.map((fase) => (
            <Fase key={fase.id} fase={fase} sprite={imagens[fase.id].img} bgColor={imagens[fase.id].color} nomeFisico={imagens[fase.id].nome} onClick={handleFaseClick} />
          ))}
        </div>
      </>
    );
  }

}

export default SelectFases;
