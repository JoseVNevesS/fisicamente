// Player tipo 1
import base1 from "./1/protagonista-serio.png"
import waitingLeft1 from "./1/protagonista-serio-olhando-esquerda.png"
import waitingRight1 from "./1/protagonista-serio-olhando-direita.png"
import waitingBlink1 from "./1/protagonista-serio-piscando.png"

import mad1 from "./1/protagonista-perdendo.png"
import madLeft1 from "./1/protagonista-perdendo-olhando-esquerda.png"
import madRight1 from "./1/protagonista-perdendo-olhando-direita.png"

import happy1 from "./1/protagonista.png"
import happyRight1 from "./1/protagonista-olhando-direita.png"
import happyLeft1 from "./1/protagonista-olhando-esquerda.png"
import happyBlink1 from "./1/protagonista-piscando.png"


// Player tipo 2
import base2 from "./2/protagonista-f-seria.png"
import waitingLeft2 from "./2/protagonista-f-seria-olhando-esquerda.png"
import waitingRight2 from "./2/protagonista-f-seria-olhando-direita.png"
import waitingBlink2 from "./2/protagonista-f-seria-piscando.png"

import mad2 from "./2/protagonista-f-perdendo.png"
import madLeft2 from "./2/protagonista-f-perdendo-olhando-esquerda.png"
import madRight2 from "./2/protagonista-f-perdendo-olhando-direita.png"
import madBlink2 from "./2/protagonista-f-perdendo-piscando.png"

import happy2 from "./2/protagonista-f.png"
import happyRight2 from "./2/protagonista-f-olhando-direita.png"
import happyLeft2 from "./2/protagonista-f-olhando-esquerda.png"
import happyBlink2 from "./2/protagonista-f-piscando.png"


console.log()
const player1 = {
    base: base1,
    happy: {
        idle: happy1,
        left: happyLeft1,
        right: happyRight1,
        blink: happyBlink1
    },
    mad: {
        idle: mad1,
        left: madLeft1,
        right: madRight1,
    },
    waiting: {
        idle: base1,
        left: waitingLeft1,
        right: waitingRight1,
        blink: waitingBlink1
    }
}
const player2 = {
    base: base2,
    happy: {
        idle: happy2,
        left: happyLeft2,
        right: happyRight2,
        blink: happyBlink2
    },
    mad: {
        idle: mad2,
        left: madLeft2,
        right: madRight2,
        blink: madBlink2
    },
    waiting: {
        idle: base2,
        left: waitingLeft2,
        right: waitingRight2,
        blink: waitingBlink2
    }
}

export let playerSprites = localStorage.getItem('tipoPersonagem') == 1 ? player1 : player2;