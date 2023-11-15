// ########################
//     Leis de Newton
// ########################

import base from "../assets/newton-sprites/issac-newton-base.png";
import happyLeft from "../assets/newton-sprites/issac-newton-contente-olhando-esquerda.png";
import happyRight from "../assets/newton-sprites/issac-newton-contente-olhando-direita.png";
import happyBlink from "../assets/newton-sprites/issac-newton-contente-piscando.png";
import mad from "../assets/newton-sprites/issac-newton-perdendo.png";
import madBlink from "../assets/newton-sprites/issac-newton-perdendo-piscando.png";
import waiting from "../assets/newton-sprites/issac-newton-esperando.png";
import waitingLeft from "../assets/newton-sprites/issac-newton-esperando-olhando-esquerda.png";
import waitingRight from "../assets/newton-sprites/issac-newton-esperando-olhando-direita.png";
import waitingBlink from "../assets/newton-sprites/issac-newton-esperando-piscando.png";
import introSong from "../assets/sounds/newton-intro.mp3";

export const fase1 = {
    nome: "Sir Isaac Newton",
    intro: introSong,
    bg: "#6e202d ",
    textColor: "#fff",
    sprites: {
        base: base,
        happy: {
            left: happyLeft,
            right: happyRight,
            blink: happyBlink,
        },
        mad: {
            idle: mad,
            blink: madBlink,
        },
        waiting: {
            idle: waiting,
            left: waitingLeft,
            right: waitingRight,
            blink: waitingBlink,
        },
    },
    perguntas: [
        //Um corpo em repouso permanecerá em repouso a menos que uma força externa o faça mudar de posição. (Fácil)
        {
            "fase": 1,
            "pergunta":
                "'Todo corpo mantém seu estado de repouso ou movimento uniforme em linha reta, a menos que uma força externa aja sobre ele.'\n Vamos ver se você entendeu !! Me dá um exemplo.",
            "erro": "Tu errou sabixão, e sabe o porque? Você não prestou atenção !\nA resposta certa era 'Um corpo em repouso permanecerá em repouso a menos que uma força externa o faça mudar de posição'\n\nEstava no enunciado da questão",
            "acerto": "Você está no caminho certo, sabe muito!",
            "respostas": [
                "Muito Fácilll ! Um corpo em movimento sempre diminuirá sua velocidade ao longo do tempo.",
                "Muito Fácilll ! A aceleração de um corpo é diretamente proporcional à sua massa e inversamente proporcional à força aplicada.",
                "Muito Fácilll ! Um corpo em repouso permanecerá em repouso a menos que uma força externa o faça mudar de posição.",
                "Muito Fácilll ! A velocidade de um corpo em movimento permanecerá constante mesmo sem ação de forças externas.",
            ],
            "respostaCorreta": 2,
            "pontos": 25, // Pontuação para esta pergunta
            "tempoMaximo": 10,
        },

        //Lei da Superposição de Forças (Fácil) - Coloquei com esse nome para dar uma confundida heheheh
        {
            "fase": 1,
            "pergunta":
                "Já falei várias vezes isso cara, espero que você saiba ! “A mudança de movimento é proporcional à força motora imprimida e é produzida na direção de linha reta na qual aquela força é aplicada.”\n Sabe essa ao menos !?",
            "erro": "Você errou, a resposta certa seria: 'Lei da Superposição de Forças'. Agora, vamos entender o motivo: A afirmação 'A mudança de movimento é proporcional à força motora imprimida e é produzida na direção de linha reta na qual aquela força é aplicada' descreve a 'Lei da Superposição de Forças ou Princípio Fundamental da Dinâmica (2° Lei de Newton)'. Esta lei afirma que a mudança de movimento de um objeto é proporcional à força aplicada a ele na mesma direção.",
            "acerto": "Sabe muito jovem !",
            "respostas": [
                "Mas é claro Niltão !! É a Lei da Inércia",
                "Isso é melzinho na chupeta Niltão !! É a Lei da Superposição de Forças",
                "Mas é claro Niltão !! Lei de Coulomb",
                "Muí fácil claro Niltinho !! Lei da Ação e Reação",
            ],
            "respostaCorreta": 1,
            "pontos": 25, // Pontuação para esta pergunta
            "tempoMaximo": 10,
        },

        //Toda ação gera uma reação de intensidade igual e na mesma direção. (Fácil)
        {
            "fase": 1,
            "pergunta":
                "Sabe me dizer um princípio fundamental da Lei da Ação e Reação ? Por enquanto estou pegando leve...",
            "erro": "Na verdade, o princípio fundamental da Lei da Ação e Reação afirma que 'Toda ação gera uma reação de intensidade igual e na mesma direção.' Logo, você errou !",
            "acerto": "Até que tu manja dos paranaue",
            "respostas": [
                "hmm... A velocidade de um objeto é diretamente proporcional à força aplicada sobre ele.",
                "hmm... A energia cinética de um corpo é proporcional ao quadrado de sua velocidade.",
                "hmm... A aceleração de um corpo é inversamente proporcional à sua massa.",
                "hmm... Toda ação gera uma reação de intensidade igual e em direção oposta.",
            ],
            "respostaCorreta": 3,
            "pontos": 25, // Pontuação para esta pergunta
            "tempoMaximo": 10,
        },

        //I - Princípio da Inércia; II - Princípio Fundamental da Dinâmica; III - Lei da Ação e Reação ; (Fácil)

        {
            "fase": 1,
            "pergunta":
                "Dúvido você saber a ordem que formulei cada uma e o que representa I - Primeira Lei\nII - Segunda Lei\nIII - Terceira Lei\n",
            "erro": "A ordem que formulei foi: Princípio da Inércia, Princípio Fundamental da Dinâmica, Lei da Ação e Reação. Não desista você pega o jeito.",
            "acerto": "Prestou atenção nas aulas, muito bom !",
            "respostas": [
                "Mas é claro que sei !! I - Princípio Fundamental da Dinâmica II - Princípio da Inércia III - Lei da Ação e Reação .",
                "Mas é claro que sei !! I - Princípio da Inércia; II - Princípio Fundamental da Dinâmica; III - Lei da Ação e Reação ;",
                "Mas é claro que sei !! I - Princípio da Inércia; II - Lei da Ação e Reação ; III - Princípio Fundamental da Dinâmica",
                "Mas é claro que sei !! I - Lei da Ação e Reação ; II - Princípio Fundamental da Dinâmica; III - Princípio Fundamental da Dinâmica",
            ],
            "respostaCorreta": 1,
            "pontos": 25, // Pontuação para esta pergunta
            "tempoMaximo": 10,
        },

        //2400
        {
            "fase": 1,
            "pergunta":
                "Você aprendeu a calcular certo? Vamos imaginar que um automóvel, com uma massa de 1200 kg, tem uma velocidade de 72 km/h quando os freios são acionados, provocando uma desaceleração constante e fazendo com que o carro pare em 10 s, a força aplicada ao carro pelos freios vale, em newtons hein. cof cof",
            "erro": "De acordo com a Segunda Lei de Newton (F = m * a),  dados: \nMassa: 1200 kg\nVelocidade Inicial: 72 km/h (1km = 1000 metros e 1 hora = 3600 segundos, logo 72000/3600 = 20m/s) \n\nPodemos calcular a aceleração usando a equação do Movimento Uniformemente Variado (MUV):\n\nAceleração (a) = (Velocidade Final - Velocidade Inicial) / Tempo = (0 m/s - 20 m/s) / 10 s = -2 m/s² (negativo porque o carro desacelera).\nAgora, podemos usar( F = m * a) para calcular a força aplicada aos freios:\nForça (F) = 1200 kg * (-2 m/s²) = -2400 N (força de desaceleração).",
            "acerto": "Até que tu manja dos paranaue",
            "respostas": [
                "Você vai se arrepender ! São 3600 Newtons",
                "Não me subestime !! São 2400 Newtons",
                "Oraa seu metido e claro que sei ! São 1800 Newtons",
                "São 900 Newtons",
            ],
            "respostaCorreta": 1,
            "pontos": 35, // Pontuação para esta pergunta
            "tempoMaximo": 10,
        },

        //4 m/s²
        {
            "fase": 1,
            "pergunta":
                "Se um objeto é empurrado por uma força constante e resultante de 20 N. E a sua massa é de 5 kg, qual será sua aceleração? Espero que você tenha aprendido isso !",
            "erro": "Para calcular a aceleração, você precisa rearranjar a fórmula e isolar a aceleração: (F = m * a) para (a = F / m). a = (20 N / 5 kg) = 4 m/s²",
            "acerto": "Você é ótimo, acertou em cheio!",
            "respostas": ["10 m/s² dahh", "2 m/s² dahh", "5 m/s² dahh", "4 m/s² dahh"],
            "respostaCorreta": 3,
            "pontos": 35, // Pontuação para esta pergunta
            "tempoMaximo": 10,
        },

        //Um carro acelerando em uma curva.
        {
            "fase": 1,
            "pergunta":
                "Você que é ligeiro, sabe me dizer um exemplo de forças desequilibradas agindo sobre um objeto?",
            "erro": "Você errou! O certo seria: 'Um carro está acelerando em uma curva'. Isso acontece porque ele está sujeito a forças desequilibradas, como a força centrípeta e a força de atrito, que trabalham em conjunto para manter o carro em sua trajetória curva.",
            "acerto": "Sabe muito jovem !",
            "respostas": [
                "Huum... Um avião em voo constante a uma altitude fixa.",
                "Huum... Uma bicicleta em movimento retilíneo uniforme.",
                "Huum... Uma pedra caindo livremente de uma altura.",
                "Huum... Um carro acelerando em uma curva.",
            ],
            "respostaCorreta": 3,
            "pontos": 40, // Pontuação para esta pergunta
            "tempoMaximo": 10,
        },

        //Terceira Lei de Newton.
        {
            "fase": 1,
            "pergunta":
                "Quando você pula de um barco para a costa, o barco se afasta na direção oposta. Isso ocorre de acordo com qual lei que eu formulei?",
            "erro": "Você errou ! O certo seria a 3° Lei, que diz 'A toda ação há sempre uma reação oposta e de igual intensidade: as ações mútuas de dois corpos um sobre o outro são sempre iguais e dirigidas em sentidos opostos.'",
            "acerto": "Impressionante!",
            "respostas": [
                "Primeira Lei de que você formulou !.",
                "Segunda Lei de que você formulou !.",
                "A Terceira Lei que você formulou !",
                "Que? você formulou uma lei parabéns !!",
            ],
            "respostaCorreta": 2,
            "pontos": 25, // Pontuação para esta pergunta
            "tempoMaximo": 10,
        },
        {
            "fase": 1,
            "pergunta":
                "Dois corpos, A e B, estão em contato. O corpo A exerce uma força de 20 N no corpo B. De acordo com a Terceira Lei de Newton, qual é a força que o corpo B exerce sobre o corpo A?",
            "erro": "A resposta correta era '20 N', e isso se baseia no princípio da ação e reação descrito pela Terceira Lei de Newton.",
            "acerto": "Você é ótimo, acertou em cheio!",
            "respostas": [
                "10 N.",
                "20 N.",
                "40 N.",
                "Não é possível determinar sem saber as massas dos corpos.",
            ],
            "respostaCorreta": 1,
            "pontos": 40, // Pontuação para esta pergunta
            "tempoMaximo": 10,
        },

        //19500 N
        {
            "fase": 1,
            "pergunta":
                "O elevador lá do meu apê possui massa de 1500 kg. Considerando que a aceleração da gravidade igual a 10m/s², a tração no cabo do elevador, quando ele sobe vazio, com uma aceleração de 3m/s², é de ?",
            "erro": "Para calcular a tração no cabo do elevador quando ele sobe vazio com uma aceleração de 3 m/s², utilizamos a Segunda Lei de Newton, que é F = m * a. Primeiro, calculamos o peso do elevador, que é a força devido à gravidade, usando a fórmula Peso = m * g. O peso do elevador é de 15000 N. Em seguida, determinamos a força necessária para a aceleração, que é 4500 N. A tração no cabo é a soma dessas duas forças: Peso + Força de aceleração, resultando em 19500 N. Portanto, a resposta correta é 19500 N.",
            "acerto": "Impressionante ! Você acertou muito bom.",
            "respostas": ["4500 N", "6000 N", "15500 N", "17000 N", "19500 N"],
            "respostaCorreta": 4,
            "pontos": 40, // Pontuação para esta pergunta
            "tempoMaximo": 10,
        },

        // //V-V-F
        // {
        //"fase": 1,   
        //"pergunta": "Um veículo segue em uma estrada horizontal e retilínea e o seu velocímetro registra um valor constante. Referindo-se a essa situação, assinale (V) para as afirmativas verdadeiras ou (F) para as falsas.\n\n( ) A aceleração do veículo é nula.\n( ) A resultante das forças que atuam sobre o veículo é nula.\n( ) A força resultante que atua sobre o veículo tem o mesmo sentido do vetor velocidade.",
        //     "respostas": [
        //         'V-F-F',
        //         'F-V-F',
        //         'V-V-F',
        //         'V-F-V'],
        //     "respostaCorreta": 2,
        //     "pontos": 35, // Pontuação para esta pergunta
        //     "tempoMaximo": 10
        // },

        //300 N
        {
            "fase": 1,
            "pergunta":
                "O peso de um objeto na lua é de 48 N. Determine o peso desse objeto na Terra.\nPara você não ficar chorando que não sabe\n\n\n\nDados: Gravidade da Terra = 10 m/s2;\n\n\n\nGravidade da lua = 1,6 m/s2.",
            "erro": "Para calcular o peso do objeto na Terra, dado o seu peso na Lua de 48 N, usamos a seguinte fórmula: Peso na Terra = Peso na Lua x (Gravidade da Terra / Gravidade da Lua). A gravidade da Terra é 10 m/s², e a gravidade da Lua é 1,6 m/s². Portanto, o cálculo correto é: 48 N x (10 / 1,6) = 300 N. ",
            "acerto": "De fato, é isso mesmo !",
            "respostas": ["É 350 N !!", "É 300 N !!", "É 200 N !!", "É 150 N !!"],
            "respostaCorreta": 1,
            "pontos": 35, // Pontuação para esta pergunta
            "tempoMaximo": 10,
        },

        //inércia
        {
            "fase": 1,
            "pergunta":
                "O cinto de segurança é um dispositivo projetado para proteger os ocupantes de um veículo em caso de colisões e/ou freadas bruscas, impedindo que as pessoas sejam arremessadas para frente devido à ______",
            "erro": "Você errou! A resposta correta é inércia. A inércia, conforme a Primeira Lei de Newton, diz que um objeto permanece em seu estado de movimento ou repouso a menos que seja forçado a mudar por forças externas. O cinto de segurança evita que as pessoas sejam arremessadas devido a essa tendência natural dos objetos.",
            "acerto": "Essa era fácil para você !",
            "respostas": [
                "inércia",
                "burrice do motorista",
                "gravidade",
                "impulsão",
                "força centrífuga.",
            ],
            "respostaCorreta": 0,
            "pontos": 25, // Pontuação para esta pergunta
            "tempoMaximo": 10,
        },

        //Newton
        {
            "fase": 1,
            "pergunta":
                "Qual é o nome da unidade de medida da força no Sistema Internacional (SI)? De dou uma dica, não sou eu !!",
            "erro": "Você acreditou é sério ? A unidade de medida da força no SI é o Newton (Eu Mesmo !)",
            "acerto":
                "hahaha Muito bom, acho que ninguém acredita, mas sim a unidade de medida da força é o Newton (Eu Mesmo !)",
            "respostas": ["Watt", "Pascal", "Newton", "Joule", "Nenhuma das opções"],
            "respostaCorreta": 2,
            "pontos": 25, // Pontuação para esta pergunta
            "tempoMaximo": 10,
        },

        //F = ma
        {
            "fase": 1,
            "pergunta":
                "Qual é a expressão matemática que usei para representar a minha Segunda Lei ?",
            "erro": "O certo é 'F = ma'. Essa é a formulação matemática que descreve como a força aplicada a um objeto é diretamente proporcional à sua massa e à aceleração resultante.",
            "acerto": "Você é ótimo, acertou em cheio!",
            "respostas": [
                "F = m/a",
                "F = ma",
                "F = a/m",
                "Fu = ma",
                "Nenhuma das opções",
            ],
            "respostaCorreta": 1,
            "pontos": 40, // Pontuação para esta pergunta
            "tempoMaximo": 10,
        },

        //Ambas atingem o chão ao mesmo tempo, independente da massa (desprezando a resistência do ar)
        {
            "fase": 1,
            "pergunta":
                "Ao soltar uma pena e uma bola de boliche de uma mesma altura ao mesmo tempo, qual delas atingirá o chão primeiro, desprezando a resistência do ar e por quê?",
            "erro": "Ao Ignorar a resistência do ar, ambas atingem o chão ao mesmo tempo.",
            "acerto": "Sabe muito !",
            "respostas": [
                "A pena, devido à sua forma aerodinâmica.",
                "A bola de boliche, devido à sua maior massa.",
                "Ambas atingem o chão ao mesmo tempo, independente da massa",
                "Nenhuma das opções",
            ],
            "respostaCorreta": 2,
            "pontos": 40, // Pontuação para esta pergunta
            "tempoMaximo": 10,
        },

        //Para a direita.
        {
            "fase": 1,
            "pergunta":
                "Se um objeto está acelerando para a direita, qual é a direção da força resultante que está atuando nele?",
            "erro": "Quando um objeto está acelerando para a direita, a força resultante que atua sobre ele também está na mesma direção, ou seja, para a direita",
            "acerto": "Isso mesmo",
            "respostas": [
                "Para a direita.",
                "Para a esquerda",
                "Para cima",
                "Nenhuma das opções",
            ],
            "respostaCorreta": 0,
            "pontos": 40, // Pontuação para esta pergunta
            "tempoMaximo": 10,
        },

        //Mover-se para trás devido à reação oposta
        {
            "fase": 1,
            "pergunta":
                "Se um astronauta está flutuando no espaço e empurra uma esfera para longe dele, o astronauta irá...",
            "erro": "Tu errou sabixão, e sabe o porque? Pq tu é burro!",
            "acerto": "Até que tu manja dos paranaue",
            "respostas": [
                "Mover-se para trás devido à reação oposta",
                "Mover-se para frente, na direção da esfera",
                "Ficar em repouso",
                "Nada acontece",
            ],
            "respostaCorreta": 0,
            "pontos": 35, // Pontuação para esta pergunta
            "tempoMaximo": 10,
        },

        //Força para cima.
        {
            "fase": 1,
            "pergunta":
                "Um objeto está em repouso sobre uma superfície lisa. Qual é a força resultante que atua perpendicularmente à superfície e contrabalança a força da gravidade?",
            "erro": "A força resultante que atua perpendicularmente à superfície e contrabalança a força da gravidade é a 'força normal', que age para cima",
            "acerto": "É isso aí !",
            "respostas": ["Nenhuma força", "Força para baixo.", "Força para cima."],
            "respostaCorreta": 2,
            "pontos": 35, // Pontuação para esta pergunta
            "tempoMaximo": 10,
        },

        //falta adicionar essas 
        {
            "fase": 1,
            "pergunta": "Um livro está em repouso sobre uma mesa. Qual é a força de reação ao peso do livro ?",
            "erro": "A resposta certa é a força normal que é a reação da mesa que equilibra o peso do livro, permitindo que ele permaneça em repouso. Essa força de reação é a que impede que o livro afunde na mesa, e é uma consequência da Terceira Lei de Newton, que estabelece que toda ação tem uma reação igual e oposta. Portanto, a força normal é a força de contato que mantém o livro em equilíbrio.",
            "acerto": "É isso aí !",
            "respostas": ["É a força normal !", "É a força que o livro exerce sobre a mesa !", "É a força que a terra exerce sobre o livro !", "É a força que o livro exerce sobre a terra !"],
            "respostaCorreta": 0,
            "pontos": 35, // Pontuação para esta pergunta
            "tempoMaximo": 10,
        },

        {
            "fase": 1,
            "pergunta": "Qual é a resultante de duas forças, perpendiculares entre si, uma de módulo 12N e outro de módulo 16N ?",
            "erro": "O módulo do vetor resultante é obtido pela Lei dos Cossenos. Nesse caso, temos uma força de 12N (F1) em uma direção e uma força de 16N (F2) na direção perpendicular. A resultante (R) é a hipotenusa do triângulo retângulo formado por essas duas forças. R² = (F1)² + (F2)² -> R² = (12N)² + (16N)² -> R² = 144N² + 256N² -> R = √(400N²) -> R = 20N",
            "acerto": "É isso aí !",
            "respostas": ["R = 20N", "R = 30N", "R = 22N", "R = 400N", "R = 192N"],
            "respostaCorreta": 0,
            "pontos": 35, // Pontuação para esta pergunta
            "tempoMaximo": 10,
        },

        {
            "fase": 1,
            "pergunta": "Qual o enunciado da Lei da Inércia ?",
            "erro": "Errado ! Todo corpo continua em seu estado de repouso ou de movimento uniforme em uma linha reta, a menos que sobre ele estejam agindo forças com resultante não nula.",
            "acerto": "É isso aí !",
            "respostas": ["Todo corpo continua em seu estado de repouso ou de movimento uniforme em uma linha reta, a menos que sobre ele estejam agindo forças com resultante não nula.", "A aceleração que um corpo adquire é diretamente proporcional à resultante das forças que nele atuam, e tem mesma direção e sentido dessa resultante.", "Qualquer planeta gira em torno do Sol descrevendo uma órbita elíptica, da qual o Sol ocupa um dos focos.", "Quando um corpo exerce uma força sobre outro, este reage sobre o primeiro com uma força de mesma intensidade e direção, mas de sentido contrário."],
            "respostaCorreta": 0,
            "pontos": 35, // Pontuação para esta pergunta
            "tempoMaximo": 10,
        },


        {
            "fase": 1,
            "pergunta": "A Terra atrai um pacote de arroz com uma força de 49N. Pode-se, então, afirmar que o pacote de arroz ...",
            "erro": "ERRADO ! De acordo com a Terceira Lei de Newton, para cada ação, há uma reação igual e oposta. Portanto, se a Terra atrai o pacote de arroz com uma força de 49N, o pacote de arroz atrai a Terra com uma força de mesma magnitude, ou seja, 49N. A atração gravitacional mútua entre dois objetos é sempre de igual magnitude, de acordo com a Lei da Gravitação Universal de Newton.",
            "acerto": "É isso aí !",
            "respostas": ["Atrai a Terra com uma força de 49N", "Atrai a Terra com uma força menor do que 49N", "Não exerce força menor do que 49N", "Repele a Terra com uma força de 49N."],
            "respostaCorreta": 0,
            "pontos": 35, // Pontuação para esta pergunta
            "tempoMaximo": 10,
        },


        {
            "fase": 1,
            "pergunta": "Um corpo de massa 25kg encontra-se em repouso numa superfície horizontal perfeitamente lisa. Num dado instante, passa a agir sobre ele uma força horizontal de intensidade 75N. Após um deslocamento de 96m, qual a velocidade deste corpo ?",
            "erro": "ERROU ! Um corpo de massa 25kg está em repouso em uma superfície lisa. Uma força horizontal de 75N é aplicada ao corpo. Usando a Segunda Lei de Newton (F = m * a), encontramos a aceleração (a) como 3 m/s². Após um deslocamento de 96 metros, usamos a equação de movimento (Vf² = Vi² + 2 * a * d) para encontrar a velocidade final (Vf). A velocidade final é calculada como 24 m/s. Portanto, a velocidade do corpo após o deslocamento é de 24 m/s.",
            "acerto": "É isso aí !",
            "respostas": ["É 24 m/s", "14 m/s", "24 m/s", "192 m/s", "289 m/s", "576 m/s"],
            "respostaCorreta": 0,
            "pontos": 50, // Pontuação para esta pergunta
            "tempoMaximo": 10,
        },

        {
            "fase": 1,
            "pergunta": "Um corpo de 4,0kg está sendo levantado por meio de um fio que suporta tração máxima de 50N. Adotando g = 10m/s2, a maior aceleração vertical que é possível imprimir ao corpo, puxando-o por esse fio, é ...",
            "erro": "Errado ! Para determinar a maior aceleração vertical possível ao puxar um corpo com um fio que suporta uma tração máxima de 50N, você precisa considerar a força gravitacional agindo sobre o corpo. Primeiro, calcule o peso do corpo usando a massa (4,0 kg) e a aceleração da gravidade (10 m/s²), resultando em 40N. Em seguida, subtraia a tração máxima (50N) do peso (40N) e divida pelo peso, o que resulta em uma aceleração máxima de 2,5 m/s². Portanto, a maior aceleração vertical possível para o corpo é de 2,5 m/s².",
            "acerto": "É isso aí !",
            "respostas": ["2,5 m/s2", "2,0 m/s²", "1,5 m/s²", "1,0 m/s²", "0,5 m/s²"],
            "respostaCorreta": 0,
            "pontos": 50, // Pontuação para esta pergunta
            "tempoMaximo": 10,
        },


        {
            "fase": 1,
            "pergunta": "De acordo com as Leis de Newton, um objeto em queda livre próximo à superfície da Terra está sujeito a qual força?",
            "erro": "Errado ! É força normal",
            "acerto": "É isso aí !",
            "respostas": ["Força Normal", "Força Gravitacional", "Força Centrífuga", "Força Eletromagnética"],
            "respostaCorreta": 0,
            "pontos": 25, // Pontuação para esta pergunta
            "tempoMaximo": 10,
        },


        {
            "fase": 1,
            "pergunta": "o que é Força Normal ?",
            "erro": "Errado ! A força normal é como a mão invisível que a superfície coloca em um objeto para evitar que ele caia ou afunde. Por exemplo, quando você coloca um livro em uma mesa, a mesa empurra o livro para cima para mantê-lo no lugar.",
            "acerto": "É isso aí !",
            "respostas": ["Uma força que atua perpendicularmente a uma superfície em contato com um objeto.", "Uma força que atua na mesma direção que a força peso do objeto.", "Uma força que atua na direção oposta à força peso do objeto.", "Uma força que atua sempre na direção vertical."],
            "respostaCorreta": 0,
            "pontos": 45, // Pontuação para esta pergunta
            "tempoMaximo": 10,
        },

        {
            "fase": 1,
            "pergunta": "O que é Força Centrífuga ?",
            "erro": "Errado ! A Força Centrífuga é a sensação que você tem quando gira em um carrossel e parece que está sendo empurrado para fora, mas na verdade, você está sendo empurrado para longe do centro do giro.",
            "acerto": "É isso aí !",
            "respostas": ["Uma força que empurra os objetos para longe do centro de um círculo.", "Uma força que puxa os objetos para o centro de um círculo.", "Uma força que faz os objetos girarem muito rápido.", "Uma força que faz os objetos pularem para cima."],
            "respostaCorreta": 0,
            "pontos": 45, // Pontuação para esta pergunta
            "tempoMaximo": 10,
        },

        {
            "fase": 1,
            "pergunta": "O que é Força Centrípeta ?",
            "erro": "Errado ! A Força Centrípeta é como uma força especial que puxa os objetos para o meio de um círculo quando eles estão girando. Imagine um carro em uma curva - a Força Centrípeta o ajuda a ficar na estrada e não sair voando para fora da curva.",
            "acerto": "É isso aí !",
            "respostas": ["Uma força que mantém os objetos em movimento em um círculo.", "Uma força que faz os objetos girarem muito rápido.", "Uma força que puxa os objetos para fora de um círculo.", "Uma força que faz os objetos pularem para cima."],
            "respostaCorreta": 0,
            "pontos": 45, // Pontuação para esta pergunta
            "tempoMaximo": 10,
        },

    ],
};
