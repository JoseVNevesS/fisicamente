import React from 'react'
import '../styles/Creditos.css';
import { useNavigate } from 'react-router-dom';

export default function Creditos() {

    const navigate = useNavigate();
    const playerName = localStorage.getItem("NomeJogador");

    return (
        <div className='bgCreditos'>
            <div className='containerCreditos'>
                <div className='mainTitleContainer'>
                    <h1>Parabéns {playerName ? playerName : ''}! Você chegou ao fim do jogo!</h1>
                    <h3>Agradecemos por jogá-lo</h3>
                </div>
                <div className='namesContainerCreditos'>
                    <h1>Elaboradores do projeto:</h1>
                    <p>Alexsander de Souza Teixeira</p>
                    <p>Jose Vitor Neves Santos</p>
                    <p>Rai Mota</p>

                    <h3>Orientador:</h3>
                    <p>Prof. Dr. Juliano Schimiguel</p>
                </div>
                <div className='buttonContainerCreditos'>
                    <button onClick={() => {navigate(`/selectFases`, { replace: false }); }}>Clique aqui para voltar a seleção de fases</button>
                </div>
            </div>
        </div>
    )
}
