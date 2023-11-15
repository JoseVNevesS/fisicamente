import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import "./LifeBar.css";

export default function LifeBar({vida, bgColor, labelColor}) {
    // Calcula a porcentagem de vida restante com 2 casas decimais
    const vidaRestante = ((vida / 150) * 100).toFixed(0);
    return (
        <>
            <div className="containerLifeBar">
                <div className="life">{vida}</div>
                <ProgressBar bgColor={bgColor} labelColor={labelColor} baseBgColor="#3d3d3d" completed={vidaRestante} maxCompleted={100} className='header' height='50px' borderRadius='0px' width="'100%" customLabel={" "} />
            </div>
        </>
    );
}
