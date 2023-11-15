import React, { memo, useEffect, useState } from "react";
import { TypeAnimation } from 'react-type-animation';

import "./ResultsScreen.css"
import { useNavigate, useParams, Link } from "react-router-dom";

export default memo(function ResultsScreen({ jogadorGanhou, jogadorPerdeu }) {
    const navigate = useNavigate();
    const { fase } = useParams();
    const fisico = sessionStorage.getItem("Nome_Fisico")

    let titulo;
    if (jogadorGanhou) {
        titulo = "Parabéns você conseguiu!"
    }
    else if (jogadorPerdeu) {
        titulo = "Não foi dessa vez :("
    }

    function voltarSelectFases() {
        if (jogadorGanhou && parseInt(fase) <= 3) {
            const fasesArmazenadas = JSON.parse(localStorage.getItem('fases'));
            fasesArmazenadas[parseInt(fase)].unlocked = true;
            localStorage.setItem('fases', JSON.stringify(fasesArmazenadas));
        }
        navigate('/selectFases')
    }

    return (
        <div className="resultPosition">

            <div className="resultsContainer">

                <TypeAnimation

                    sequence={[
                        '',
                        400,
                        titulo,
                    ]}
                    wrapper="h1"
                    cursor={true}
                    repeat={0}
                    speed={10}
                    className="resultsTitle"
                    style={{ display: 'inline-block', backgroundColor: jogadorGanhou ? "green" : "red" }}
                />


                <div className="resultsContent">
                    {
                        jogadorPerdeu &&
                        <>
                            <p>Não se preocupe, sempre é possível tentar novamente!</p>
                            <p>Então se prepare e aperte no botão "tentar novamente" para irmos a uma nova tentativa</p>
                        </>
                    }
                    {
                        jogadorGanhou &&
                        <>
                            <p>Parabéns, o {fisico} foi derrotado!</p>
                            {(fase != 4 && jogadorGanhou) &&
                                <p>Vamos para o próximo?</p>
                            }
                        </>

                    }
                    {(fase == 4 && jogadorGanhou) ?
                        <>
                            <div className="buttonRow">
                                <button onClick={() => { window.location.href = `/credits` }}>
                                    Continuar
                                </button>
                            </div>
                        </>

                        :
                        <div className="buttonRow">
                            <button onClick={() => { voltarSelectFases() }}>Voltar para a seleção de fases</button>
                            {jogadorPerdeu && (
                                <button onClick={() => { window.location.href = `/jogo/${parseInt(fase)}` }}>
                                    Tentar Novamente
                                </button>
                            )}
                            {jogadorGanhou && (
                                <button onClick={() => {
                                    const fasesArmazenadas = JSON.parse(localStorage.getItem('fases'));
                                    fasesArmazenadas[parseInt(fase)].unlocked = true;
                                    localStorage.setItem('fases', JSON.stringify(fasesArmazenadas));

                                    if (parseInt(fase) <= 4) {
                                        window.location.href = `/jogo/${parseInt(fase) + 1}`
                                    } else {
                                        navigate('/selectFases');
                                    }
                                }}>
                                    Próxima fase
                                </button>
                            )}
                        </div>


                    }



                </div>


            </div>
        </div >

    )
})