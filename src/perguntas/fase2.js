// ########################
//       Magnetismo
// ########################

import base from "../assets/faraday-sprites/michel-faraday-base.png";
import happyLeft from "../assets/faraday-sprites/michel-faraday-olhando-esquerda.png";
import happyRight from "../assets/faraday-sprites/michel-faraday-olhando-direita.png";
import happyBlink from "../assets/faraday-sprites/michel-faraday-piscando.png";
import mad from "../assets/faraday-sprites/michel-faraday-perdendo.png";
import madBlink from "../assets/faraday-sprites/michel-faraday-perdendo-piscando.png";
import madLeft from "../assets/faraday-sprites/michel-faraday-perdendo-olhando-esquerda.png";
import madRight from "../assets/faraday-sprites/michel-faraday-perdendo-olhando-direita.png";
import waiting from "../assets/faraday-sprites/michel-faraday-serio.png";
import waitingLeft from "../assets/faraday-sprites/michel-faraday-serio-olhando-esquerda.png";
import waitingRight from "../assets/faraday-sprites/michel-faraday-serio-olhando-direita.png";
import waitingBlink from "../assets/faraday-sprites/michel-faraday-serio-piscando.png";
import introSong from "../assets/sounds/faraday-intro.mp3";

export const fase2 = {
  nome: "Michael Faraday",
  intro: introSong,
  bg: "#dfbc67",
  textColor: "#000",
  sprites: {
    base: base,
    happy: {
      left: happyLeft,
      right: happyRight,
      blink: happyBlink,
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
      blink: waitingBlink,
    },
  },
  perguntas: [
    {
      "fase": 2,
      "pergunta":
        "A Terra é considerada um imã gigantesco, que tem as seguintes características:",
      "erro": "O polo norte magnético está próximo ao polo sul geográfico, e o polo sul magnético está próximo ao sul geográfico. Os polos magnéticos e geográficos não se coincidem.",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": [
        "O polo Norte geográfico está exatamente sobre o polo sul magnético, e o Sul geográfico está na mesma posição que o norte magnético.",
        "O polo Norte geográfico está exatamente sobre o polo norte magnético, e o Sul geográfico está na mesma posição que o sul magnético.",
        "O polo norte magnético está próximo do polo Sul geográfico, e o polo sul magnético está próximo do polo Norte geográfico.",
        "O polo norte magnético está próximo do polo Norte geográfico, e o polo sul magnético está próximo do polo Sul geográfico.",
        "O polo Norte geográfico está defasado de um ângulo de 45° do polo sul magnético, e o polo Sul geográfico está defasado de 45° do polo norte magnético.",
      ],
      "respostaCorreta": 2,
      "pontos": 30,
      "tempoMaximo": 45,
    },

    {
      "fase": 2,
      "pergunta":
        "Um pequeno ímã é colocado nas proximidades de uma barra de ferro. Sobre a situação descrita, sabe dizer o que acontece?",
      "erro": "De acordo com Newton em sua 3ª lei, não é possível exercer força sobre um corpo sem receber dele uma força de reação. Portanto, o ímã e a barra de ferro atraem-se mutuamente.",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": [
        "O ímã atrai a barra de ferro com a mesma intensidade que a barra de ferro atrai o ímã.",
        "A força que o ímã exerce sobre a barra de ferro é maior que a força que o ferro exerce sobre o ímã.",
        "O ímã atrai a barra de ferro.",
        "A barra de ferro atrai o ímã.",
        "A força que a barra de ferro exerce sobre o ímã é maior que a força que o ímã exerce sobre a barra de ferro.",
      ],
      "respostaCorreta": 0,
      "pontos": 25,
      "tempoMaximo": 45,
    },

    {
      "fase": 2,
      "pergunta":
        "Quando quebramos um ímã permanente ao meio, devemos esperar o que?",
      "erro": "Quando você quebra um ímã permanente ao meio, você obtém dois ímãs menores, cada um com seus próprios polos norte e sul.",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": [
        "que os seus pedaços fiquem desmagnetizados.",
        "que um dos seus pedaços seja o polo norte, e o outro, polo sul.",
        "que cada um de seus pedaços torne-se um ímã menor.",
        "nada ué",
      ],
      "respostaCorreta": 2,
      "pontos": 25,
      "tempoMaximo": 45,
    },

    {
      "fase": 2,
      "pergunta":
        "A respeito do desenvolvimento dos estudos relacionados com o magnetismo, é verdade que os primeiros estudos realizados na área do magnetismo foram feitos por Aristóteles no século VI a.C ?",
      "erro": "Esta afirmação é FALSA. Os primeiros estudos sobre magnetismo remontam a séculos antes de Aristóteles, e a magnetita já era conhecida por atrair objetos.",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": ["É verdade !", "É mentira !"],
      "respostaCorreta": 1,
      "pontos": 40,
      "tempoMaximo": 45,
    },

    {
      "fase": 2,
      "pergunta":
        "A respeito do desenvolvimento dos estudos relacionados com o magnetismo, é verdade que a utilização da bússola provavelmente foi a primeira aplicação prática do magnetismo.",
      "erro": "",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": ["É verdade !", "É mentira !"],
      "respostaCorreta": 0,
      "pontos": 30,
      "tempoMaximo": 45,
    },

    {
      "fase": 2,
      "pergunta":
        "A respeito do desenvolvimento dos estudos relacionados com o magnetismo, é verdade que a relação entre magnetismo e eletricidade só foi aceita no século XX com os meus estudos ?",
      "erro": "Esta afirmação é FALSA. A relação entre magnetismo e eletricidade foi estabelecida no século XIX, principalmente através dos meus estudos",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": ["É verdade !", "É mentira !"],
      "respostaCorreta": 1,
      "pontos": 40,
      "tempoMaximo": 45,
    },

    {
      "fase": 2,
      "pergunta":
        "A respeito do desenvolvimento dos estudos relacionados com o magnetismo, é verdade que o experimento de Oersted, realizado no século XIX, abriu caminho para os estudos relacionados ao eletromagnetismo.",
      "erro": "Você errou ! O experimento de Oersted, realizado em 1820, demonstrou a relação entre eletricidade e magnetismo, abrindo caminho para o estudo do eletromagnetismo.",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": ["É verdade !", "É mentira !"],
      "respostaCorreta": 0,
      "pontos": 25,
      "tempoMaximo": 45,
    },

    {
      "fase": 2,
      "pergunta":
        "É verdade que a primeira aplicação prática do magnetismo foi a bússola desenvolvida pelos chineses ?",
      "erro": "O primeiro uso na prática do magnetismo foi feito pelos chineses há aproximadamente 2.000 (antes de Cristo). A bússola, que se baseia na relação do campo magnético de um imã (a agulha da bússola) com o campo magnético terrestre.",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": ["É verdade !", "É mentira !"],
      "respostaCorreta": 0,
      "pontos": 30,
      "tempoMaximo": 45,
    },

    {
      "fase": 2,
      "pergunta":
        "É verdade que as denominações polo norte e polo sul foram dadas por Pierre Pelerin de Maricourt.",
      "erro": "Era Verdade... Pierre Pelerin de Maricourt escreveu o primeiro tratado existente sobre as propriedades dos ímãs. Seu trabalho se destaca ainda pela primeira descrição detalhada de uma bússola.",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": ["É verdade !", "É mentira !"],
      "respostaCorreta": 0,
      "pontos": 25,
      "tempoMaximo": 45,
    },

    {
      "fase": 2,
      "pergunta":
        "É verdade que os estudos sobre magnetismo iniciaram-se a partir da percepção de que materiais atritados poderiam atrair-se mutuamente.",
      "erro": "Era Mentira... A atração magnética foi observada em minerais como a magnetita muito antes de se entender a natureza do magnetismo.",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": ["É verdade !", "É mentira !"],
      "respostaCorreta": 1,
      "pontos": 40,
      "tempoMaximo": 45,
    },

    //Parei aqui

    {
      "fase": 2,
      "pergunta":
        "Se você tentar juntar dois lados iguais de dois ímãs, o que vai acontecer?",
      "erro": "Errado ! Caso você tente juntar ímãs com dois lados iguais ele vão se repelir, se iguais vão se atrair, Portanto o certo seria: 'Vão se repelir'",
      "acerto": "Muito bem !",
      "respostas": [
        "Vão se atrair",
        "Vão se repelir",
        "Nada vai acontecer",
        "Os ímãs vão se partir",
      ],
      "respostaCorreta": 1,
      "pontos": 35,
      "tempoMaximo": 45,
    },

    {
      "fase": 2,
      "pergunta":
        "Cite três exemplos de objetos em sua casa que utilizam ímãs para funcionar.",
      "erro": "Você poderia ter dito: 'Geladeira, alto-falante, fechadura magnética' ",
      "acerto": "Sabe muito!",
      "respostas": [
        "Lâmpada, mesa, cadeira",
        "Geladeira, alto-falante, fechadura magnética",
        "Tapete, cortina, espelho",
        "Rádio, caneta, copo",
      ],
      "respostaCorreta": 1,
      "pontos": 35,
      "tempoMaximo": 45,
    },

    {
      "fase": 2,
      "pergunta":
        "Como as bússolas utilizam o magnetismo da Terra para indicar a direção norte-sul?",
      "erro": "Você errou ! Elas reagem ao campo magnético terrestre",
      "acerto": "Parabéns, mas... Essa estava fácil !",
      "respostas": [
        "Detectam o calor do sol",
        "Alinham-se com os raios cósmicos",
        "Apontam para a constelação Ursa Maior",
        "Reagem ao campo magnético terrestre",
        "Bruxaria",
      ],
      "respostaCorreta": 3,
      "pontos": 25,
      "tempoMaximo": 45,
    },

    {
      "fase": 2,
      "pergunta":
        "Como a ressonância magnética (MRI) utiliza campos magnéticos para obter imagens internas do corpo humano?",
      "erro": "Você errou porque a ressonância magnética (MRI) não utiliza ondas sonoras ou campos elétricos. Ela obtém imagens detalhadas das estruturas internas do corpo humano através do uso de campos magnéticos fortes e ondas de rádio.",
      "acerto": "Boa!",
      "respostas": [
        "Emitindo ondas sonoras",
        "Criando campos elétricos",
        "Usando campos magnéticos fortes e ondas de rádio para criar imagens detalhadas das estruturas internas",
        "Nenhuma das opções",
      ],
      "respostaCorreta": 2,
      "pontos": 40,
      "tempoMaximo": 45,
    },

    {
      "fase": 2,
      "pergunta":
        "Qual desses animais têm a capacidade de detectar o campo magnético para se orientar ou migrar",
      "erro": "As pombas, em particular, são conhecidas por seu uso do campo magnético da Terra para navegação durante migrações.",
      "acerto": "Muito bem !",
      "respostas": [
        "Leão",
        "Elefante",
        "Golfinho",
        "Pomba",
        "Isso é pegadinha !! Nenhum animal consegue fazer isso",
      ],
      "respostaCorreta": 3,
      "pontos": 25,
      "tempoMaximo": 45,
    },


    {
      "fase": 2,
      "pergunta": "O que uma bússola aponta quando está em repouso?",
      "erro": "Uma bússola aponta para o norte magnético da Terra, não o norte geográfico (Polo Norte). O norte magnético é a direção em que a agulha da bússola se alinha devido ao campo magnético da Terra",
      "acerto": "Acertou !",
      "respostas": [
        "Para o sul magnético da Terra.",
        "Para o norte verdadeiro da Terra.",
        "Para o norte geográfico da Terra.",
        "Para o norte magnético da Terra.",
      ],
      "respostaCorreta": 3,
      "pontos": 30,
      "tempoMaximo": 45,
    },

    {
      "fase": 2,
      "pergunta":
        "Qual é a diferença fundamental entre magnetismo estático e magnetismo induzido?",
      "erro": "A diferença fundamental entre magnetismo estático e magnetismo induzido é que o magnetismo estático é inerente a ímãs permanentes, enquanto o magnetismo induzido ocorre temporariamente quando um material é exposto a um campo magnético externo.",
      "acerto": "Impressionante !",
      "respostas": [
        "O magnetismo estático ocorre apenas em ímãs permanentes, enquanto o magnetismo induzido acontece em ímãs temporários.",
        "O magnetismo estático é o resultado da disposição permanente dos átomos, enquanto o magnetismo induzido ocorre temporariamente quando um material é colocado em um campo magnético externo.",
        "O magnetismo estático é mais forte do que o magnetismo induzido.",
        "O magnetismo estático não tem relação com o campo magnético externo.",
      ],
      "respostaCorreta": 1,
      "pontos": 35,
      "tempoMaximo": 45,
    },

    {
      "fase": 2,
      "pergunta":
        "Por que a ressonância magnética (MRI) é uma técnica útil em medicina?",
      "erro": "Ih rapaz você errou ! Estude mais",
      "acerto": "Isso aí meu caro !",
      "respostas": [
        "Ela utiliza campos magnéticos e ondas de rádio para criar imagens detalhadas do interior do corpo humano, ajudando a diagnosticar várias condições médicas.",
        "Ela gera campos magnéticos fortes para eliminar bactérias do corpo humano.",
        "Ela utiliza ondas sonoras para visualizar órgãos internos.",
        "Ela mede a pressão sanguínea de forma precisa.",
      ],
      "respostaCorreta": 0,
      "pontos": 35,
      "tempoMaximo": 45,
    },

    {
      "fase": 2,
      "pergunta":
        "Como um material paramagnético difere de um material ferromagnético?",
      "erro": "ERROU ! Para você entender, aqui vai um exemplo: O alumínio é um exemplo de material paramagnético que é fracamente atraído por campos magnéticos e não mantém propriedades magnéticas após a remoção do campo, enquanto o ferro é um exemplo de material ferromagnético, sendo fortemente atraído por campos magnéticos e mantendo seu magnetismo após o campo ser removido.",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": [
        "Os materiais paramagnéticos são fortemente atraídos por campos magnéticos externos, enquanto os ferromagnéticos não são.",
        "Os materiais paramagnéticos são permanentemente magnetizados, enquanto os ferromagnéticos não são.",
        "Os materiais paramagnéticos são fracamente atraídos por campos magnéticos externos e não retêm seu magnetismo quando o campo é removido, enquanto os ferromagnéticos são fortemente atraídos e retêm algum magnetismo após a remoção do campo.",
        "Os materiais paramagnéticos não respondem a campos magnéticos, enquanto os ferromagnéticos sim.",
      ],
      "respostaCorreta": 2,
      "pontos": 25,
      "tempoMaximo": 45,
    },

    {
      "fase": 2,
      "pergunta":
        "Quando um material é exposto a um campo magnético, o que ocorre com um material diamagnético?",
      "erro": "Materiais diamagnéticos têm uma fraca resposta magnética oposta à direção do campo magnético aplicado, o que resulta em uma repulsão !",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": [
        "Ele se torna fortemente magnetizado.",
        "Ele mantém sua magnetização após o campo ser removido.",
        "Ele é repelido pelo campo magnético.",
        "Ele atrai o campo magnético.",
      ],
      "respostaCorreta": 2,
      "pontos": 25,
      "tempoMaximo": 45,
    },

    {
      "fase": 2,
      "pergunta":
        "Qual é uma característica distintiva dos materiais ferromagnéticos?",
      "erro": "Errado. Os materiais ferromagnéticos têm domínios magnéticos que podem se alinhar com um campo magnético externo e manter sua magnetização mesmo após a remoção desse campo. Isso os diferencia de outros materiais magnéticos.",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": [
        "Eles sempre se opõem a campos magnéticos externos.",
        "Seus momentos magnéticos são sempre desordenados.",
        "Eles possuem domínios magnéticos organizados e mantêm a magnetização após a remoção do campo magnético externo.",
        "Eles são incapazes de gerar magnetismo.",
      ],
      "respostaCorreta": 2,
      "pontos": 30,
      "tempoMaximo": 45,
    },

    {
      "fase": 2,
      "pergunta":
        "Os materiais __________ possuem momentos magnéticos individuais que podem se alinhar temporariamente com um campo magnético externo, mas não mantêm a magnetização quando o campo é removido.",
      "erro": "O certo seria Paramagnéticos, pois eles possuem momentos magnéticos individuais que podem se alinhar temporariamente com um campo magnético externo, mas não mantêm a magnetização quando o campo é removido.",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": [
        "Diamagnéticos",
        "Antiferromagnéticos",
        "Ferromagnéticos",
        "Paramagnéticos",
      ],
      "respostaCorreta": 3,
      "pontos": 25,
      "tempoMaximo": 45,
    },

    {
      "fase": 2,
      "pergunta":
        "Os materiais __________ são caracterizados por átomos ou íons com momentos magnéticos que se alinham em pares adjacentes, mas com orientações magnéticas opostas, resultando em uma magnetização líquida nula.",
      "erro": "O certo seria 'Antiferromagnéticos', pois esses materiais são caracterizados por átomos ou íons com momentos magnéticos que se alinham em pares adjacentes, mas com orientações magnéticas opostas, resultando em uma magnetização líquida nula.",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": [
        "Diamagnéticos",
        "Ferromagnéticos",
        "Antiferromagnéticos ",
        "Paramagnéticos",
      ],
      "respostaCorreta": 2,
      "pontos": 40,
      "tempoMaximo": 45,
    },

    {
      "fase": 2,
      "pergunta":
        "O material __________ possui domínios magnéticos bem organizados e pode manter sua magnetização mesmo após a remoção de um campo magnético externo.",
      "erro": "O certo seria 'Ferromagnético'",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": [
        "Diamagnético",
        "Antiferromagnético",
        "Ferromagnético",
        "Paramagnético",
      ],
      "respostaCorreta": 2,
      "pontos": 25,
      "tempoMaximo": 45,
    },

    {
      "fase": 2,
      "pergunta":
        "Os materiais __________ possuem momentos magnéticos que se opõem ao campo magnético aplicado, resultando em uma fraca repulsão do campo magnético.",
      "erro": "Errou ! o Certo seria 'Diamagnéticos'",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": [
        "Diamagnéticos",
        "Antiferromagnéticos",
        "Ferromagnéticos",
        "Paramagnéticos",
      ],
      "respostaCorreta": 0,
      "pontos": 30,
      "tempoMaximo": 45,
    },

    {
      "fase": 2,
      "pergunta":
        "Quando um material é exposto a um campo magnético, o material diamagnético é __________ pelo campo magnético.",
      "erro": "Errou ! O certo seria repelido",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": ["repelido", "atraído", "magnetizado", "desmagnetizado"],
      "respostaCorreta": 0,
      "pontos": 40,
      "tempoMaximo": 45,
    },

    {
      "fase": 2,
      "pergunta": "Um estudante dispõe de um kit com quatro placas metálicas carregadas eletricamente. Ele observa que, quando aproximadas sem entrar em contato, as placas A e C se atraem, as placas A e B se repelem, e as placas C e D se repelem. Se a placa D possui carga elétrica negativa, ele conclui que as placas A e B são, respectivamente ...",
      "erro": "Errou ! Pensa comigo... Placas A e C se atraem, o que indica que uma delas é positiva e a outra é negativa. Placas A e B se repelem, o que significa que ambas devem ter cargas do mesmo sinal. Placas C e D se repelem, e sabemos que a placa D tem carga negativa. Logo, as placas A e B são respectivamente positiva e positiva.",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": ["positiva e positiva", "positiva e negativa", "negativa e positiva.", "negativa e negativa.", "neutra e neutra."],
      "respostaCorreta": 0,
      "pontos": 50,
      "tempoMaximo": 45,
    },

    {
      "fase": 2,
      "pergunta": "Dois corpos de materiais diferentes, quando atritados entre si, são eletrizados. Em relação a esses corpos, se essa eletrização é feita de forma isolada do meio, é correto afirmar que ...",
      "erro": "Errado ! Quando dois corpos de materiais diferentes são atritados entre si, a eletrização ocorre devido à transferência de elétrons de um corpo para o outro. Um corpo ganha elétrons (ficando eletrizado negativamente) enquanto o outro perde elétrons (ficando eletrizado positivamente). Logo a resposta mais aceitavel seria: um fica eletrizado positivamente e o outro negativamente.",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": ["um fica eletrizado positivamente e o outro negativamente.", "um fica eletrizado negativamente e o outro permanece neutro.", "um fica eletrizado positivamente e o outro permanece neutro.", "ambos ficam eletrizados negativamente.", "ambos ficam eletrizados positivamente."],
      "respostaCorreta": 0,
      "pontos": 50,
      "tempoMaximo": 45,
    },

    {
      "fase": 2,
      "pergunta": "Um corpo possui 5·1019 prótons e 4·1019 elétrons. Considerando a carga elementar igual a 1,6·10–19 C, este corpo está ...",
      "erro": "Errado ! Para determinar o estado de carga do corpo, precisamos calcular a carga líquida total. A carga líquida é a diferença entre o número de prótons (cargas positivas) e o número de elétrons (cargas negativas). Carga líquida = (5 × 10^19 - 4 × 10^19) × (1,6 × 10^(-19) C) -> (1 × 10^19) × (1,6 × 10^(-19) C)  = 1,6 × 10^0 C, Logo: Está carregado positivamente com uma carga igual a 1,6 C",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": ["Essa eu sei ... Está carregado negativamente com uma carga igual a 1·10–19C.", "Essa eu sei ... Está neutro", "Essa eu sei ... Está carregado positivamente com uma carga igual a 1,6 C.", "Essa eu sei ... Está carregado negativamente com uma carga igual a 1,6 C.", "Essa eu sei ... Está carregado positivamente com uma carga igual a 1·10–19 C."],
      "respostaCorreta": 2,
      "pontos": 50,
      "tempoMaximo": 45,
    },

    {
      "fase": 2,
      "pergunta": "Me diga qual material pode ser facilmente magnetizado e desmagnetizado?",
      "erro": "Errado ! O ferro é um material que pode ser facilmente magnetizado e desmagnetizado.",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": ["Ferro", "Alumínio", "Madeira", "Vidro"],
      "respostaCorreta": 0,
      "pontos": 35,
      "tempoMaximo": 45,
    },

  ],
};
