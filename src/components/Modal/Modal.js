import React from 'react'
import './Modal.css'
import tutorial from '../../assets/tutorial.png'

export default function Modal({ open, setOpen }) {
    function handleClick() {
        localStorage.setItem('tutorial', true)
        setOpen(false);
    }
    return (
        <div className='modalBackdrop' style={{ display: open ? 'flex' : 'none' }}>
            <div className='modalContainer'>
                <div>
                    <h3>Olá, bem vindo ao FisicaMente</h3>
                    <p>Nesse jogo você irá passar por um total de 4 fases incríveis, cada uma com o seu físico e matéria definidos, então se prepare e vamos lá!</p>
                </div>
                <div>
                    <h3>Tutorial de como jogar:</h3>
                    <p>- Para iniciar basta selecionar uma das fases liberadas, na tela assim que fechar esse tutorial. Alguns estarão bloqueados, eles são liberados após ganhar do físico anterior</p>
                    <p>- Dentro do jogo seja rápido! Você terá um tempo limitado para responder cada pergunta.</p>
                    <p>- Após ler a pergunta escolha uma resposta, caso erre você perde vida, caso acerte o físico perde vida. Simples assim!</p>
                    <p>- Reduza os pontos de vida do oponente a zero e você ganha!</p>
                    <p>- Não se esqueça que caso erre o físico lhe explicará a pergunta para que você não erre novamente, então fique esperto.</p>
                    <h4>Guia do jogo:</h4>
                    <img className='imgTutorialModal' src={tutorial}></img>
                </div>

                <button className='btnFecharModal' onClick={() => {handleClick()}}>Fechar</button>
            </div>

        </div>
    )
}
