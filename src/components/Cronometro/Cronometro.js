import React, { memo, useEffect, useState } from "react"
import ProgressBar from "@ramonak/react-progress-bar";

export default memo(function Cronometro({ tempoEsgotado, tempoMaximo, reset, setReset }) {
    const [tempoRestante, setTempoRestante] = useState(tempoMaximo)

    let timeout;

    async function cronometrar() {
        await new Promise(resolve => {
            timeout = setTimeout(resolve, 1000);
        });
        setTempoRestante(tempoRestante - 1)
    }

    useEffect(() => {
        cronometrar()
        if (tempoRestante === 0) {
            console.log(tempoMaximo)
            setTempoRestante(tempoMaximo)
            tempoEsgotado()
            clearTimeout(timeout)
        }
        if (reset) {
            setTempoRestante(tempoMaximo)
            setReset(false)
            clearTimeout(timeout)
            cronometrar()
        }
    }, [tempoRestante])

    return (
        <div className="cronometro">
            <div className="cronometro-content">
                <ProgressBar completed={tempoRestante} bgColor={"#ccc"} baseBgColor="transparent" maxCompleted={tempoMaximo} className='header' height='5px' borderRadius='0px' width="'100%" customLabel={" "} transitionTimingFunction={"linear"}/>
            </div>
        </div>
    )
})