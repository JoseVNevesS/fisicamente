import "./style.css"

import enemySprite from "../../assets/newton.png"
// import image from "../../../public/mc.png"
function Pergunta({playerLife, setPlayerLife, pergunta}) {
  // console.log(pergunta)
  return (
    <>
      <div className="container">
        <div className="header">
          <p className="nome">Fulaninho 2000</p>
          {/* <div style={{position: "absolute", left: 0, top: 0, width: "100%", height: "30%", backgroundColor: "red", zIndex: 10}}></div> */}
        </div>
        <div className="body">


          <div className="chatContent">
            <p className="text">
              {pergunta.pergunta}
            </p>
            <div className="groupButton">
              {pergunta.respostas.map(resp => {
                return <button className="botao">{resp}</button>
              })}
            </div>
          </div>



          <img src={enemySprite} className="imagem"></img>
        </div>
      </div>
    </>
  )
}
export default Pergunta;