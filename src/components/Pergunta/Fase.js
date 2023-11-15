import React from 'react';
import '../../styles/Fase.css';
import cadeadoGrande from '../../assets/cadeado.png';
import cadeadoPequeno from '../../assets/cadeado_menor.svg'
import portaRetrato from '../../assets/quadro-vintage.png'

function Fase({ fase, onClick, sprite, bgColor, nomeFisico }) {
  const handleClick = () => {
    if (fase.unlocked) {
      onClick(fase.id);
    }
  };

  return (
    <button className={`btnFase ${fase.unlocked ? 'unlocked' : 'locked'}`} onClick={handleClick} disabled={!fase.unlocked}>
      {/* <div className={`fase ${fase.unlocked ? 'unlocked' : 'locked'}`}>
        {fase.title}
        {!fase.unlocked && (
          <>
            <div className="cadeado-overlay-small">
              <img src={cadeadoPequeno} alt="CadeadoPequeno" />
            </div>
            <div className="cadeado-overlay">
              <img src={cadeadoGrande} alt="CadeadoGrande" />
            </div>
          </>
        )}
      </div> */}
      <div className="porta-retrato" style={{ backgroundColor: fase.unlocked ? bgColor : '#666' }}>
        <img src={portaRetrato} className="porta-retrato-vilao-img" />
        {fase.unlocked ?
          <img src={sprite} className="imagem-fisico" />
          :
          <img src={cadeadoGrande} className="imagem-cadeado" />

        }
      </div>
      <p className='nomeFisicoSelect'>
        {fase.unlocked ?
          nomeFisico :
          '???'
        }
      </p>
    </button>
  );
}

export default Fase;
