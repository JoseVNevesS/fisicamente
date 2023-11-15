// ########################
// Hidrostática
// ########################

import base from '../assets/pascal-sprites/blaise-pascal.png'
import happyLeft from '../assets/pascal-sprites/blaise-pascal-olhando-esquerda.png'
import happyRight from '../assets/pascal-sprites/blaise-pascal-olhando-direita.png'
import happyBlink from '../assets/pascal-sprites/blaise-pascal-piscando.png'
import mad from '../assets/pascal-sprites/blaise-pascal-perdendo.png'
import madBlink from '../assets/pascal-sprites/blaise-pascal-perdendo-piscando.png'
import madLeft from '../assets/pascal-sprites/blaise-pascal-perdendo-olhando-esquerda.png'
import madRight from '../assets/pascal-sprites/blaise-pascal-perdendo-olhando-direita.png'
import waiting from '../assets/pascal-sprites/blaise-pascal-serio.png'
import waitingLeft from '../assets/pascal-sprites/blaise-pascal-serio-olhando-esquerda.png'
import waitingRight from '../assets/pascal-sprites/blaise-pascal-serio-olhando-direita.png'
import waitingBlink from '../assets/pascal-sprites/blaise-pascal-serio-piscando.png'
import introSong from "../assets/sounds/pascal-intro.mp3"


export const fase4 = {
    nome: "Blaise Pascal",
    intro: introSong,
    bg: "#0a75f0",
    textColor: "#000",
    sprites: {
        base: base,
        happy: {
            left: happyLeft,
            right: happyRight,
            blink: happyBlink
        },
        mad: {
            idle: mad,
            left: madLeft,
            right: madRight,
            blink: madBlink,
        },
        waiting: {
            idle: waiting,
            left: waitingLeft,
            right: waitingRight,
            blink: waitingBlink
        }
    },
    perguntas: [
        {
            "pergunta": 'haha sabe ao menos o que é hidrostática?',
            "erro": "Errouu! A hidrostática é o estudo de fluidos em equilíbrio, ou seja, de fluidos que não estão em movimento.",
            "acerto": "Até que tu manja dos paranaue",
            "respostas": ['Claro !! É o estudo de fluidos em movimento', 'Claro !! É o estudo de fluidos em equilíbrio', 'Claro !! É o estudo de plantas aquáticas', 'Claro !! É o estudo da eletricidade estática.'],
            "respostaCorreta": 1,
            "pontos": 30,
        },

        {
            "pergunta": 'Tá bem, Tá bem, mas qual a unidade de pressão no sistema internacional (SI)? Essa você tem que saber',
            "erro": "Errado, a unidade de pressão no SI é chamada de Pascal (Pa) em minha homenagem. Eu fiz importantes contribuições para a teoria dos fluidos e pressão.",
            "acerto": "Até que tu manja dos paranaue",
            "respostas": ['Pascal (Pa) !!', 'Newton (N)', 'Volt (V)', 'Joule (J)', 'Hertz (Hz)'],
            "respostaCorreta": 0,
            "pontos": 40,
        },

        {
            "pergunta": 'O que acontece com a pressão de um fluido quando você aumenta a profundidade ?',
            "erro": "Tu errou sabixão !! Quando você aumenta a profundidade em um fluido, a pressão aumenta. Isso ocorre porque a pressão em um fluido está relacionada à profundidade, de acordo com meus estudos, que estabelece que a pressão aumenta com a profundidade no fluido devido ao peso das camadas superiores de fluido que exercem pressão sobre as camadas inferiores.",
            "acerto": "Até que tu manja dos paranaue",
            "respostas": ['Aumenta uée', 'Diminui uée', 'Permanece constante uée', 'Torna-se negativa uée', 'Torna-se zero uée'],
            "respostaCorreta": 0,
            "pontos": 30,
        },

        {
            "pergunta": 'Sabe de cor a fórmula para a pressão hidrostática em um fluido incompressível?',
            "erro": "Tu errou ! A fórmula para a pressão hidrostática em um fluido incompressível é P = ρgh, onde: P representa a pressão hidrostática,ρ é a densidade do fluido,g é a aceleração devido à gravidade e h é a profundidade do fluido.",
            "acerto": "Até que tu manja dos paranaue",
            "respostas": ['P = ρgh', 'P = F/A', 'P = mv', 'P = R/V'],
            "respostaCorreta": 0,
            "pontos": 30,
        },

        {
            "pergunta": 'Consegue me falar um princípio fundamental da hidrostática?',
            "erro": "Tu errou sabixão ! Isso aí tava na cara, eu que estudei essas paradas.",
            "acerto": "Até que tu manja dos paranaue",
            "respostas": ['O princípio de Pascal', 'O princípio da relatividade', 'O princípio da aceleração', 'O princípio de conservação de energia', 'O princípio da incerteza'],
            "respostaCorreta": 0,
            "pontos": 30,
        },

        {
            "pergunta": 'Você sabe que no oceano a pressão hidrostática aumenta aproximadamente uma atmosfera a cada 10 m de profundidade, certo ? Se um submarino encontra-se em uma profundidade de 300m de profundidade, qual a diferença da pressão entre o interior e o exterior do submarino ?',
            "erro": "Errado ! Se um submarino está a 300 metros de profundidade, a diferença de pressão entre o interior e o exterior do submarino é de 30 atmosferas. Portanto, a resposta correta é 30 atm.",
            "acerto": "Até que tu manja dos paranaue",
            "respostas": ['30 atm', '19 atm', '21 atm', '300 atm', '20 atm'],
            "respostaCorreta": 0,
            "pontos": 40,
        },

        {
            "pergunta": 'Se a área de superfície de um objeto submerso em um líquido aumentar, o que acontecerá com a força de empuxo exercida sobre ele?',
            "erro": "Tu errou sabixão, se a área de superfície de um objeto submerso em um líquido aumentar, a força de empuxo exercida sobre ele aumentará. Isso ocorre porque o empuxo é diretamente proporcional à área da superfície do objeto imerso no líquido.",
            "acerto": "Até que tu manja dos paranaue",
            "respostas": ['A força de empuxo aumentará', 'A força de empuxo diminuirá', 'A força de empuxo permanecerá a mesma', 'A força de empuxo dependerá da densidade do objeto'],
            "respostaCorreta": 0,
            "pontos": 25,
        },


        {
            "pergunta": 'O Princípio de Pascal afirma que uma mudança na pressão aplicada a um fluido é transmitida igualmente em todas as direções. Como isso se aplica em uma prensa hidráulica?',
            "erro": "Errou ! Se aplica da seguinte maneira: Aumentando a pressão em um pistão menor resulta em um aumento na força exercida em um pistão maior. Isso permite que a prensa hidráulica multiplique a força aplicada, tornando-a uma ferramenta eficaz para levantar ou comprimir objetos pesados. ",
            "acerto": "Até que tu manja dos paranaue",
            "respostas": ['Aumentar a pressão em um pistão menor resulta em um aumento na força em um pistão maior', 'A prensa hidráulica não se baseia no Princípio de Pascal', 'A pressão é inversamente proporcional à área do pistão', 'A pressão não é transmitida igualmente em uma prensa hidráulica'],
            "respostaCorreta": 0,
            "pontos": 40,
        },

        {
            "pergunta": 'Qual é a fórmula para calcular o empuxo que atua em um objeto submerso em um fluido?',
            "erro": "Tu errou sabixão, A fórmula para calcular o empuxo que atua em um objeto submerso em um fluido é E = ρgV, onde: E representa o empuxo, ρ é a densidade do fluido, g é a aceleração devido à gravidade, V é o volume do fluido deslocado pelo objeto.",
            "acerto": "Até que tu manja dos paranaue",
            "respostas": ['E = ρgV', 'E = F/A', 'E = mc²', 'E = W/t'],
            "respostaCorreta": 0,
            "pontos": 50,
        },

        {
            "pergunta": 'O que é um barômetro aneróide usado para medir?',
            "erro": "Tu errou sabixão, serve para medir a pressão atmosférica",
            "acerto": "Até que tu manja dos paranaue",
            "respostas": ['Pressão atmosférica', 'Temperatura da água', 'Velocidade do som', 'Salinidade da água'],
            "respostaCorreta": 0,
            "pontos": 30,
        },


        {
            "pergunta": 'Como a pressão hidrostática varia com a altura em um fluido incompressível?',
            "erro": "ERRADO ! A pressão hidrostática em um fluido incompressível que aumenta com a altura. sso ocorre devido ao aumento do peso das camadas de fluido acima, exercendo pressão sobre as camadas inferiores.",
            "acerto": "Até que tu manja dos paranaue",
            "respostas": ['A pressão aumenta com a altura', 'A pressão diminui com a altura', 'A pressão não depende da altura', 'A pressão permanece constante com a altura.'],
            "respostaCorreta": 0,
            "pontos": 25,
        },


        {
            "pergunta": 'Qual é a fórmula para calcular a pressão manométrica?',
            "erro": "ERROU ! A fórmula para calcular a pressão manométrica é P = P₀ + ρgh, onde: P representa a pressão manométrica, P₀ é a pressão atmosférica (ou pressão de referência), ρ é a densidade do fluido, g é a aceleração devido à gravidade, h é a altura do fluido acima do ponto de referência.",
            "acerto": "Até que tu manja dos paranaue",
            "respostas": ['P = P₀ + ρgh', 'P = F/A', 'P = V/T', 'P = mc²'],
            "respostaCorreta": 0,
            "pontos": 30,
        },

        {
            "pergunta": 'O que é pressão atmosférica?',
            "erro": "Errado ! A pressão atmosférica é a pressão exercida pela atmosfera terrestre. Ela é a pressão que a coluna de ar na atmosfera exerce sobre a superfície da Terra e é responsável por muitos fenômenos climáticos e físicos.",
            "acerto": "Até que tu manja dos paranaue",
            "respostas": ['A pressão exercida pela atmosfera terrestre', 'A pressão exercida por objetos na atmosfera.', 'A pressão no interior de uma bolha de ar.', 'A pressão de um fluido em repouso.'],
            "respostaCorreta": 0,
            "pontos": 25,
        },

        {
            "pergunta": 'Qual é o nome do dispositivo usado para medir a pressão atmosférica?',
            "erro": "O dispositivo usado para medir a pressão atmosférica é chamado de 'barômetro'",
            "acerto": "Até que tu manja dos paranaue",
            "respostas": ['Barômetro', 'Manômetro', 'Termômetro', 'Higrômetro'],
            "respostaCorreta": 0,
            "pontos": 40,
        },

        {
            "pergunta": 'O que é manômetro?',
            "erro": "Errado ! Manômetro é um instrumento usado para medir a pressão de um fluido",
            "acerto": "Até que tu manja dos paranaue",
            "respostas": ["É um instrumento usado para medir a pressão de um fluido", "É um instrumento usado para medir a densidade de um fluido", "É um instrumento usado para medir a força de empuxo sobre um corpo imerso em um fluido", "É um instrumento usado para medir o volume de um fluido"],
            "respostaCorreta": 0,
            "pontos": 30,
        },

        {
            "pergunta": 'O que é densímetro?',
            "erro": "Errado ! É um instrumento usado para medir a densidade de um fluido. Um densímetro é constituído por um tubo graduado com pesos na base e uma boia na parte superior, que indica a densidade do fluido na escala.",
            "acerto": "Até que tu manja dos paranaue",
            "respostas": ["É um instrumento usado para medir a densidade de um fluido", "É um instrumento usado para medir a pressão de um fluido", "É um instrumento usado para medir a força de empuxo sobre um corpo imerso em um fluido", "É um instrumento usado para medir o volume de um fluido"],
            "respostaCorreta": 0,
            "pontos": 30,
        },


        {
            "pergunta": 'O que é o princípio de Arquimedes? ',
            "erro": "Errado ! É o princípio que afirma que todo corpo imerso em um fluido sofre uma força vertical para cima, igual ao peso do fluido deslocado pelo corpo. O princípio de Arquimedes explica o fenômeno da flutuação e da submersão dos corpos.",
            "acerto": "Até que tu manja dos paranaue",
            "respostas": ["É o princípio que afirma que todo corpo imerso em um fluido sofre uma força vertical para cima, igual ao peso do fluido deslocado pelo corpo", "É o princípio que afirma que todo corpo imerso em um fluido sofre uma força vertical para baixo, igual ao peso do fluido deslocado pelo corpo", "É o princípio que afirma que todo corpo imerso em um fluido sofre uma força horizontal, igual à diferença entre as pressões exercidas pelo fluido nas extremidades do corpo", "É o princípio que afirma que todo corpo imerso em um fluido sofre uma força horizontal, igual à soma das pressões exercidas pelo fluido nas extremidades do corpo"],
            "respostaCorreta": 0,
            "pontos": 30,
        },
        {
            "pergunta": "O que é o teorema de Stevin?",
            "erro": "Errado ! É o teorema que afirma que a diferença entre as pressões em dois pontos situados na mesma profundidade em um fluido em equilíbrio é nula. O teorema de Stevin explica por que a pressão atmosférica é a mesma em qualquer ponto de uma mesma altitude.",
            "acerto": "Até que tu manja dos paranaue",
            "respostas": ["É o teorema que afirma que a diferença entre as pressões em dois pontos situados na mesma profundidade em um fluido em equilíbrio é nula", "É o teorema que afirma que a diferença entre as pressões em dois pontos situados na mesma altura em um fluido em equilíbrio é nula", "É o teorema que afirma que a diferença entre as alturas dos pontos onde se mede as pressões em dois vasos comunicantes contendo o mesmo fluido em equilíbrio é nula", " É o teorema que afirma que a diferença entre as densidades dos fluidos contidos em dois vasos comunicantes em equilíbrio é nula"],
            "respostaCorreta": 0,
            "pontos": 30,
        },
        {
            "pergunta": "O que é um fluido?",
            "erro": "Errado ! Um fluido é um material que pode se deformar facilmente sob a ação de uma força, assumindo o formato do recipiente que o contém.",
            "acerto": "Até que tu manja dos paranaue",
            "respostas": ["Um material que tem forma e volume variáveis", "Um material que tem forma e volume fixos", "Um material que não tem forma nem volume"],
            "respostaCorreta": 0,
            "pontos": 30,
        },
        {
            "pergunta": 'O que é viscosidade?',
            "erro": "Errado ! A viscosidade é uma medida da dificuldade que um fluido tem para se deformar quando submetido a uma força tangencial1. Quanto maior a viscosidade, mais “grosso” ou “pegajoso” é o fluido2. A viscosidade depende da temperatura e da natureza do fluido.",
            "acerto": "Até que tu manja dos paranaue",
            "respostas": ["É a propriedade que mede a resistência de um fluido ao escoamento, devido ao atrito interno entre suas camadas", "É a propriedade que mede a resistência de um fluido ao escoamento, devido ao atrito externo entre o fluido e as superfícies", "É a propriedade que mede a resistência de um fluido ao escoamento, devido à coesão entre as moléculas do fluido", "É a propriedade que mede a resistência de um fluido ao escoamento, devido à adesão entre as moléculas do fluido e as moléculas da parede do tubo"],
            "respostaCorreta": 0,
            "pontos": 30,
        },
        {
            "pergunta": 'O que é o teorema de Torricelli?',
            "erro": "Errado ! O teorema de Torricelli é uma aplicação do princípio de Bernoulli e pode ser usado para determinar a velocidade de saída de um fluido por um orifício.",
            "acerto": "Até que tu manja dos paranaue",
            "respostas": ["É o teorema que afirma que a velocidade com que um fluido sai por um orifício em um recipiente é igual à velocidade que ele teria se caísse livremente da superfície livre do fluido até o nível do orifício", "É o teorema que afirma que a vazão com que um fluido sai por um orifício em um recipiente é igual ao produto entre a área do orifício e a velocidade do fluido na superfície livre do recipiente", "É o teorema que afirma que a altura da coluna líquida em um recipiente aberto depende apenas da pressão atmosférica externa e da densidade do líquido", " É o teorema que afirma que a pressão exercida por uma coluna líquida em um recipiente fechado depende apenas da altura da coluna líquida e da densidade do líquido"],
            "respostaCorreta": 0,
            "pontos": 30,
        },
        {
            "pergunta": 'O que é o tubo de Pitot?',
            "erro": "Errado ! É um instrumento usado para medir a velocidade de um fluido. Um tubo de Pitot é constituído por dois tubos concêntricos, sendo o interno voltado para a direção do fluxo do fluido e o externo dotado de orifícios laterais. A diferença entre as pressões medidas pelos tubos permite calcular a velocidade do fluido.",
            "acerto": "Até que tu manja dos paranaue",
            "respostas": ["É um instrumento usado para medir a velocidade de um fluido", "É um instrumento usado para medir a densidade de um fluido", "É um instrumento usado para medir a pressão estática de um fluido", "É um instrumento usado para medir a pressão dinâmica de um fluido"],
            "respostaCorreta": 0,
            "pontos": 30,
        },
        {
            "pergunta": "O que é o efeito Venturi?",
            "erro": "Errado ! É o efeito que ocorre quando um fluido em movimento passa por uma região de menor seção transversal, aumentando sua velocidade e diminuindo sua pressão. O efeito Venturi é uma consequência do princípio de Bernoulli e pode ser usado para medir a vazão de um fluido.",
            "acerto": "Até que tu manja dos paranaue",
            "respostas": ["É o efeito que ocorre quando um fluido em movimento passa por uma região de menor seção transversal, aumentando sua velocidade e diminuindo sua pressão", "É o efeito que ocorre quando um fluido em movimento passa por uma região de maior seção transversal, aumentando sua velocidade e diminuindo sua pressão", "É o efeito que ocorre quando um fluido em movimento passa por uma região de maior seção transversal, diminuindo sua velocidade e aumentando sua pressão", "É o efeito que ocorre quando um fluido em movimento passa por uma região de menor seção transversal, diminuindo sua velocidade e aumentando sua pressão"],
            "respostaCorreta": 0,
            "pontos": 30,
        },
        {
            "pergunta": 'Qual é a pressão atmosférica ao nível do mar?',
            "erro": "Errado ! A pressão atmosférica ao nível do mar é de aproximadamente 1 atmosfera (atm)",
            "acerto": "Até que tu manja dos paranaue",
            "respostas": ["1 atm", "1 Pa", "1 bar", "1 N/m²"],
            "respostaCorreta": 0,
            "pontos": 30,
        },
        {
            "pergunta": "Qual é a relação entre a pressão e a temperatura de um gás ideal?",
            "erro": "Errado ! Segundo a lei de Gay-Lussac, a pressão de um gás ideal é diretamente proporcional à sua temperatura absoluta, se o volume e a massa do gás forem mantidos constantes.",
            "acerto": "Até que tu manja dos paranaue",
            "respostas": ["Diretamente proporcional", "Inversamente proporcional", "Constante", "Não sei"],
            "respostaCorreta": 0,
            "pontos": 30,
        },
        {
            "pergunta": "O que é um fluido incompressível?",
            "erro": "Errado ! Um fluido incompressível é aquele cuja densidade é constante, independentemente da pressão aplicada sobre ele3. Os líquidos são aproximadamente incompressíveis, enquanto os gases são altamente compressíveis.",
            "acerto": "Até que tu manja dos paranaue",
            "respostas": ["Um fluido que não muda de volume quando submetido a uma pressão externa", "Um fluido que muda de volume quando submetido a uma pressão externa", "Um fluido que não muda de forma quando submetido a uma força externa", "Um fluido que muda de forma quando submetido a uma força externa"],
            "respostaCorreta": 0,
            "pontos": 30,
        },
        {
            "pergunta": "O que é o princípio da continuidade?",
            "erro": "Errado !  O princípio da continuidade estabelece que, para um fluido incompressível e com densidade constante, o produto entre a área da seção transversal e a velocidade do fluido é igual em qualquer ponto do escoamento.",
            "acerto": "Até que tu manja dos paranaue",
            "respostas": ["É o princípio que afirma que a vazão de um fluido em escoamento é conservada ao longo do tempo", "É o princípio que afirma que a massa de um fluido em escoamento é conservada ao longo do tempo", "É o princípio que afirma que a energia de um fluido em escoamento é conservada ao longo do tempo", "É o princípio que afirma que a velocidade de um fluido em escoamento é conservada ao longo do tempo"],
            "respostaCorreta": 0,
            "pontos": 30,
        },
        {
            "pergunta": "Qual é a relação entre a densidade e a flutuação de um corpo?",
            "erro": "Errado ! A flutuação de um corpo depende da relação entre o seu peso e o peso do fluido deslocado por ele, que é determinado pela força de empuxo. Quanto menor for a densidade do corpo em relação à densidade do fluido, maior será o volume de fluido deslocado e, consequentemente, maior será a força de empuxo e a flutuação",
            "acerto": "Até que tu manja dos paranaue",
            "respostas": ["Quanto menor a densidade do corpo, maior a flutuação", "Quanto maior a densidade do corpo, maior a flutuação", "Quanto maior a densidade do fluido, maior a flutuação", "Quanto menor a densidade do fluido, maior a flutuação"],
            "respostaCorreta": 0,
            "pontos": 30,
        },
        {
            "pergunta": 'O que é o princípio da incompressibilidade dos líquidos?',
            "erro": "Errado ! O princípio da incompressibilidade dos líquidos é uma aproximação válida para muitos casos práticos, pois os líquidos apresentam uma variação muito pequena de volume em função da pressão aplicada2. Esse princípio é utilizado no funcionamento das prensas hidráulicas, por exemplo.",
            "acerto": "Até que tu manja dos paranaue",
            "respostas": ["É o princípio que afirma que os líquidos não mudam seu volume quando submetidos à pressão externa", " É o princípio que afirma que os líquidos mudam seu volume quando submetidos à pressão externa", "É o princípio que afirma que os líquidos não mudam sua forma quando submetidos à força externa", "É o princípio que afirma que os líquidos mudam sua forma quando submetidos à força externa"],
            "respostaCorreta": 0,
            "pontos": 30,
        },
        {
            "pergunta": "O que é o efeito sifão?",
            "erro": "Errado ! O efeito sifão é um fenômeno pelo qual um fluido contido em um recipiente aberto pode ser transferido para outro recipiente situado em um nível mais baixo, utilizando-se de um tubo flexível que ultrapassa a altura do recipiente original3. O efeito sifão é uma consequência do princípio da conservação da energia mecânica para um fluido ideal",
            "acerto": "Até que tu manja dos paranaue",
            "respostas": ["É o efeito que ocorre quando um fluido em repouso passa por uma região de menor altura, diminuindo sua energia potencial e aumentando sua velocidade", "É o efeito que ocorre quando um fluido em movimento passa por uma região de maior seção transversal, aumentando sua velocidade e diminuindo sua pressão", "É o efeito que ocorre quando um fluido em repouso passa por uma região de maior altura, diminuindo sua energia potencial e aumentando sua pressão"],
            "respostaCorreta": 0,
            "pontos": 30,
        },

    ]
}