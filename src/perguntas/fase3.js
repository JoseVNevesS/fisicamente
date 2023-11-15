// ########################
//     Calorimetria
// ########################

import base from "../assets/jose_black-sprites/joseph-black.png";
import happyLeft from "../assets/jose_black-sprites/joseph-black-olhando-esquerda.png";
import happyRight from "../assets/jose_black-sprites/joseph-black-olhando-direita.png";
import happyBlink from "../assets/jose_black-sprites/joseph-black-piscando.png";
import mad from "../assets/jose_black-sprites/joseph-black-perdendo.png";
import madBlink from "../assets/jose_black-sprites/joseph-black-perdendo-piscando.png";
import madLeft from "../assets/jose_black-sprites/joseph-black-perdendo-olhando-esquerda.png";
import madRight from "../assets/jose_black-sprites/joseph-black-perdendo-olhando-direita.png";
import waiting from "../assets/jose_black-sprites/joseph-black-desanimado.png";
import introSong from "../assets/sounds/joseph-intro.mp3";
// import waitingLeft from '../assets/jose_black-sprites/joseph-black-serio-olhando-esquerda.png'
// import waitingRight from '../assets/jose_black-sprites/joseph-black-serio-olhando-direita.png'
// import waitingBlink from '../assets/jose_black-sprites/joseph-black-serio-piscando.png'

export const fase3 = {
  nome: "Joseph Black",
  intro: introSong,
  bg: "#111a36",
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
      left: madLeft,
      right: madRight,
      blink: madBlink,
    },
    waiting: {
      idle: waiting,
      // left: waitingLeft,
      // right: waitingRight,
      // blink: waitingBlink
    },
  },
  perguntas: [
    {
      "fase": 3,
      "pergunta": "Essa é Fácil até sua vó sabe hahahah ! O que é calor?",
      "erro": "Calor é a energia transmitida entre corpos que se encontram em diferentes temperaturas. Ou seja a resposta Energia térmica em trânsito",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": [
        "Energia térmica em trânsito",
        "Uma unidade de medida da temperatura",
        "O estado físico de uma substância",
        "A capacidade de um objeto de reter calor",
        "Uma forma de eletricidade",
      ],
      "respostaCorreta": 0,
      "pontos": 30,
    },

    {
      "fase": 3,
      "pergunta": "Vamos ver se você sabe essa !! O que é calor sensível?",
      "erro": "Tu errou sabixão. O calor sensível é o calor que faz com que algo esquente ou esfrie, mas não cause uma mudança na sua forma física. Por exemplo, quando você coloca uma panela no fogão e aquece a água para fazer macarrão, o calor sensível é a energia térmica que faz a temperatura da água aumentar.",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": [
        "Variação da temperatura, alterando ou não as dimensões de corpo !",
        "Mudança de fase sólido para líquido !",
        "É a unidade de medida da temperatura !",
        "É um tipo de energia luminosa !",
      ],
      "respostaCorreta": 0,
      "pontos": 30,
    },

    {
      "fase": 3,
      "pergunta":
        "Hmm, será que você sabe essa? Já ouviu falar sobre o conceito de calor específico?",
      "erro": "o calor específico indica o quão 'teimoso' um material é em relação às mudanças de temperatura quando você adiciona ou remove calor. Por exemplo, a água tem um alto calor específico, o que significa que é difícil aquecê-la ou resfriá-la rapidamente.",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": [
        "Mas é claro que sei ! É a quantidade de calor que uma substância precisa para aumentar sua temperatura",
        "Sim Sim ! É uma medida de resistência elétrica.",
        "É a quantidade de calor que uma substância absorve do ambiente",
        "Essa é Fácil é a quantidade de calor liberada durante a fusão de um material",
      ],
      "respostaCorreta": 0,
      "pontos": 50,
    },

    {
      "fase": 3,
      "pergunta":
        "Essa eu sei que você sabe ! Mas por via das dúvidas... O que é Calor Latente ?",
      "erro": "O calor latente é a quantidade de calor que uma substância absorve ou libera durante uma mudança de fase, como a fusão (mudança do sólido para o líquido) ou a vaporização (mudança do líquido para o vapor), sem que a temperatura da substância mude.",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": [
        "É a quantidade de calor absorvida ou liberada por um corpo quando ocorre uma mudança em seu estado físico.",
        "Calor latente? Isso é quando as coisas esquentam muito!",
        "é quando o calor some durante o dia",
        "Ahh isso é quando uma substância derrete ao calor",
        "Hmm acho que é calor que aumenta a temperatura de um objeto",
        "É quando a temperatura muda rapidamente",
      ],
      "respostaCorreta": 0,
      "pontos": 30,
    },

    {
      "fase": 3,
      "pergunta":
        "Estou realizando um experimento com 500 g de uma substância a 20 °C. Para aquecê-la a 70 °C, eu usei 4000 calorias de energia térmica. Qual é o valor da capacidade térmica (C) e do calor específico (c) dessa substância, pode fazer isso ?",
      "erro": "Capacidade Térmica (C) -> C = Q / ΔT -> C = 4000 cal / 50°C = 80 cal/°C (80 calorias por grau Celsius) e Calor Específico (c) -> c = Q / (m * ΔT) -> c = 4000 cal / (500 g * 50°C) = 0,16 cal/(g·°C) (0,16 calorias por grama por grau Celsius)",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": [
        "Pelos meus cálculos a Capacidade térmica de 80 cal/°C e calor específico de 0,16 cal/g°C",
        "Pelos meus cálculos a Capacidade térmica de 8 cal/ °C e calor específico de 0,08 cal/g°C",
        "Pelos meus cálculos a Capacidade térmica de 90 cal/ °C e calor específico de 0,09 cal/g°C",
        "Pelos meus cálculos a Capacidade térmica de 95 cal/ °C e calor específico de 0,15 cal/g°C",
      ],
      "respostaCorreta": 0,
      "pontos": 70,
    },

    {
      "fase": 3,
      "pergunta":
        "Você também acha que um cobertor tem a capacidade de esquentar?",
      "erro": "Não jovem, o que o coberto faz e reter o calor do corpo",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": [
        "Não ! O que o cobertor faz é reter o calor do corpo, isolando o corpo do ambiente frio",
        "Claro !! O cobertor o gera calor por si só",
        "Sim, o cobertor é capaz de aumentar a temperatura ambiente",
        "Não, o cobertor produz calor através de reações químicas",
      ],
      "respostaCorreta": 0,
      "pontos": 60,
    },

    {
      "fase": 3,
      "pergunta":
        "Qual a quantidade de calor recebido por um líquido de 20 g que não variou sua temperatura, sabendo que seu calor latente é de 30 cal/g ?",
      "erro": "A quantidade de calor (Q) recebida pelo líquido de 20 g que não variou sua temperatura, com um calor latente de 30 cal/g, é calculada multiplicando a massa pela quantidade de calor latente: Q = 20 g x 30 cal/g = 600 cal.",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": [
        "Manda uma mais difícil !! Q = 600 cal",
        "Manda uma mais difícil !! Q = 620 cal",
        "Manda uma mais difícil !! Q = 500 cal",
        "Manda uma mais difícil !! Q = 700 cal",
        "Manda uma mais difícil !! Q = 300 cal",
      ],
      "respostaCorreta": 0,
      "pontos": 40,
    },

    {
      "fase": 3,
      "pergunta":
        "Essa é Fácil Guri ! Quais as formas de transferência de calor ?",
      "erro": "hahahaha o certo seria: Condução, convecção e irradiação",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": [
        "Haa só isso? É Condução, convecção e irradiação",
        "Ora é evaporação e fusão",
        "Calor só se transmite por radiação dahh",
        "Uée a única forma de transferência de calor é através de correntes de ar",
      ],
      "respostaCorreta": 0,
      "pontos": 50,
    },

    {
      "fase": 3,
      "pergunta":
        "Um dia desses estava perto da fogueira, sabe para ficar quentinho. Sabe me dizer qual o principal tipo processo de transferência de calor que me manteve aquecido ?",
      "erro": "A principal forma de transferência de calor que me manteve aquecido perto da fogueira é a irradiação. Isso ocorre quando o calor é transmitido na forma de ondas eletromagnéticas, como a luz e o calor do fogo, aquecendo objetos, mesmo sem contato direto com a fonte de calor.",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": [
        "Ah essa eu sei ! Irradiação",
        "Por Condução é claro !!",
        "Evaporação dahh",
        "Convecção Velhote !",
      ],
      "respostaCorreta": 0,
      "pontos": 70,
    },

    {
      "fase": 3,
      "pergunta":
        "Eu tenho um bloco de gelo que estava a -10°C e antes de sair coloquei em uma sala a 25°C. O que está acontecendo com o bloco de gelo durante esse tempo?",
      "erro": "Tu errou sabixão, o que está acontecendo é a transferência de calor da sala para o gelo, porém essa transferência de calor não resulta em uma mudança imediata na temperatura do gelo, mas sim na fusão do gelo, transformando-o em água líquida",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": [
        "O gelo está absorvendo calor, mas sua temperatura permanece inalterada",
        "O gelo está liberando calor, aumentando sua temperatura",
        "O gelo está liberando calor, aumentando sua temperatura",
        "O gelo está sublimando diretamente para o estado sólido",
        "O gelo está evaporando diretamente para o estado gasoso",
      ],
      "respostaCorreta": 0,
      "pontos": 60,
    },

    {
      "fase": 3,
      "pergunta":
        "Quando você segura uma colher de metal em uma xícara de café quente, você começa a sentir o cabo da colher esquentando após algum tempo. Esse processo é um exemplo de qual forma de transferência de calor?",
      "erro": "ERRADO. É um exemplo de condução, porque o calor é transferido através do contato direto entre o metal da colher e sua mão, sem movimento de fluidos ou radiação envolvidos.",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": [
        "É Condução",
        "É Convecção !!",
        "Irradiação !!",
        "Evaporação",
      ],
      "respostaCorreta": 0,
      "pontos": 50,
    },

    {
      "fase": 3,
      "pergunta":
        "Durante o verão, você observa que o ar quente sobe do asfalto aquecido pelo sol. Esse movimento de ar é um exemplo de qual processo de transferência de calor?",
      "erro": "ERROU ! Esse movimento de ar quente que sobe do asfalto aquecido pelo sol é um exemplo de convecção, porque envolve o deslocamento de ar devido às diferenças de densidade causadas pelo aquecimento. O ar próximo ao asfalto aquecido se torna menos denso e, portanto, mais leve, o que o faz subir, enquanto o ar mais frio ocupa o espaço vago, criando um movimento de convecção ascendente.",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": ["Convecção", "Evaporação", "Irradiação", "Condução"],
      "respostaCorreta": 0,
      "pontos": 50,
    },

    {
      "fase": 3,
      "pergunta": "Em um radiador de carro, o fluido aquecido sobe do motor para o radiador e depois volta ao motor. Esse movimento do fluido é um exemplo de qual forma de transferência de calor?",
      "erro": "Esse movimento do fluido aquecido no radiador do carro é um exemplo de convecção, pois envolve a transferência de calor através do deslocamento do fluido devido a diferenças de temperatura.",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": ["Convecção", "Evaporação", "Irradiação", "Condução"],
      "respostaCorreta": 0,
      "pontos": 50,
    },

    {
      "fase": 3,
      "pergunta": "O que é condução de calor?",
      "erro": "Tu errou sabixão, A condução de calor é a transferência de calor por contato direto entre partículas.",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": [
        "A transferência de calor por contato direto entre partículas",
        "A transferência de calor por meio do movimento de fluidos",
        "A transferência de calor por mudanças de fase",
        "A transferência de calor por meio de ondas eletromagnéticas",
      ],
      "respostaCorreta": 0,
      "pontos": 20,
    },

    {
      "fase": 3,
      "pergunta": "Quando você segura uma barra de chocolate em uma extremidade e a outra extremidade está sobre uma superfície quente, qual é o processo de transferência de calor que faz com que o chocolate derreta na extremidade que você está segurando?",
      "erro": "Tu errou sabixão ! Quando você segura uma barra de chocolate em uma extremidade e a outra extremidade está sobre uma superfície quente, o processo de transferência de calor que faz o chocolate derreter é a condução, pois o calor é transmitido da parte quente para a parte fria da barra de chocolate através do contato direto entre as partículas do chocolate.",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": ["Condução", "Convecção", "Evaporação", "Irradiação"],
      "respostaCorreta": 0,
      "pontos": 20,
    },

    {
      "fase": 3,
      "pergunta": "Como a energia térmica do Sol chega até a Terra, mesmo sem um meio material para a transferência?",
      "erro": "Precisa estudar mais heinn, a energia térmica do Sol chega até a Terra por meio da 'irradiação', que envolve a transferência de calor na forma de ondas eletromagnéticas, como a luz e o calor do Sol, através do espaço vazio, sem a necessidade de um meio material.",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": ["Irradiação", "Evaporação", "Condução", "Convecção"],
      "respostaCorreta": 0,
      "pontos": 20,
    },

    {
      "fase": 3,
      "pergunta": "Em um dia ensolarado, quando você sente o calor do Sol atingindo sua pele, qual processo de transferência de calor está ocorrendo?",
      "erro": "Errado,o processo de transferência de calor que está ocorrendo é a 'irradiação'. Isso ocorre porque o calor do Sol é transmitido para a Terra na forma de radiação eletromagnética, como a luz e o calor, atravessando o espaço vazio sem a necessidade de um meio material.",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": ["Irradiação", "Evaporação", "Condução", "Convecção"],
      "respostaCorreta": 0,
      "pontos": 20,
    },

    {
      "fase": 3,
      "pergunta": "Qual é a principal fonte de energia para a Terra, que chega até nós por meio da irradiação?",
      "erro": "Errou, a principal fonte de energia para a terra é a solar",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": ["Solar", "Geotérmica", "Eólica", "Nuclear"],
      "respostaCorreta": 0,
      "pontos": 20,
    },

    {
      "fase": 3,
      "pergunta": "O que acontece quando um corpo aquecido emite calor na forma de ondas eletromagnéticas?",
      "erro": "Errado, o certo é a Irradiação, pois o calor é transmitido na forma de radiação eletromagnética, como a luz e o calor, sem a necessidade de um meio material para a transferência.",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": ["Irradiação", "Evaporação", "Condução", "Convecção"],
      "respostaCorreta": 0,
      "pontos": 20,
    },


    {
      "fase": 3,
      "pergunta": "Qual é o processo de transferência de calor que ocorre em fluidos (líquidos e gases) devido às diferenças de densidade?",
      "erro": "ERRADO ! A convecção que é o processo de transferência de calor que ocorre em fluidos devido às diferenças de densidade, resultando no movimento das massas fluidas mais quentes para cima e das mais frias para baixo.",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": ["Convecção", "Condução", "Radiação", "Refração"],
      "respostaCorreta": 0,
      "pontos": 35,
    },

    {
      "fase": 3,
      "pergunta": "Qual é a unidade de medida da densidade?",
      "erro": "ERRADO ! A unidade de medida da densidade é quilogramas por metro cúbico (kg/m³).",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": ["kg/m³", "J/kg", "m/s²", "g/mL"],
      "respostaCorreta": 0,
      "pontos": 30,
    },

    {
      "fase": 3,
      "pergunta": "O que acontece com a densidade de um material quando ele é aquecido?",
      "erro": "ERRADO ! Quando um material é aquecido, suas partículas tendem a se expandir, o que resulta em uma diminuição da densidade.",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": ["A densidade diminui", "A densidade aumenta", "A densidade permanece a mesma", "A densidade se torna negativa"],
      "respostaCorreta": 0,
      "pontos": 30,
    },

    {
      "fase": 3,
      "pergunta": "O que é a capacidade térmica de um objeto?",
      "erro": "ERRADO ! A capacidade térmica de um objeto é a quantidade de calor que ele pode armazenar.",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": ["A quantidade de calor que um objeto pode armazenar", "A quantidade de calor necessária para elevar sua temperatura em 1 grau Celsius", "A capacidade de conduzir calor", "A quantidade de calor que um objeto emite"],
      "respostaCorreta": 0,
      "pontos": 30,
    },


    {
      "fase": 3,
      "pergunta": "O que é eletromagnetismo?",
      "erro": "ERRADO ! O eletromagnetismo é o ramo da Física que unifica os conceitos de eletricidade e magnetismo.",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": ["É a área da Física que estuda a relação entre os fenômenos elétricos e magnéticos", "É a área da Física que estuda a relação entre os fenômenos elétricos e térmicos", "É a área da Física que estuda a relação entre os fenômenos magnéticos e mecânicos", "É a área da Física que estuda a relação entre os fenômenos térmicos e mecânicos"],
      "respostaCorreta": 0,
      "pontos": 30,
    },

    {
      "fase": 3,
      "pergunta": "O que são as linhas de força de um ímã?",
      "erro": "ERRADO ! As linhas de força são uma forma de visualizar o campo magnético produzido por um ímã ou por uma corrente elétrica. Elas saem do polo norte do ímã e entram no polo sul. Quanto mais próximas as linhas estiverem, maior será a intensidade do campo magnético naquela região.",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": ["São as linhas imaginárias que representam o sentido e a intensidade do campo magnético gerado pelo ímã", "São as linhas reais que conectam os polos norte e sul do ímã", "São as linhas imaginárias que representam o sentido e a intensidade da corrente elétrica gerada pelo ímã", " São as linhas reais que conectam os ímãs entre si"],
      "respostaCorreta": 0,
      "pontos": 30,
    },

    {
      "fase": 3,
      "pergunta": "O que é um ímã?",
      "erro": "ERRADO ! Um ímã é um corpo que possui a propriedade de atrair outros corpos ferromagnéticos. Ele pode ser encontrado na natureza, como a magnetita, ou ser fabricado artificialmente. Um ímã possui dois polos opostos: norte e sul. Esses polos não podem ser separados e seguem a regra de que polos iguais se repelem e polos opostos se atraem",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": [" É um corpo magnético dipolo, ou seja, possui dois polos: norte e sul", "É um corpo magnético monopolo, ou seja, possui apenas um polo: norte ou sul", "É um corpo magnético multipolo, ou seja, possui vários polos: norte, sul, leste e oeste", "É um corpo magnético neutro, ou seja, não possui polos."],
      "respostaCorreta": 0,
      "pontos": 30,
    },

    {
      "fase": 3,
      "pergunta": "O que é magnetismo?",
      "erro": "ERRADO ! O magnetismo é gerado a partir da movimentação de partículas negativas, ou os elétrons",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": ["É o fenômeno de atração ou repulsão entre corpos que possuem propriedades magnéticas", "É o fenômeno de atração ou repulsão entre corpos que possuem cargas elétricas", "É o fenômeno de atração ou repulsão entre corpos que possuem massa", "É o fenômeno de atração ou repulsão entre corpos que possuem temperatura"],
      "respostaCorreta": 0,
      "pontos": 30,
    },

    {
      "fase": 3,
      "pergunta": "O que causa o magnetismo ?",
      "erro": "ERRADO ! O magnetismo é causado pelo movimento dos elétrons, especificamente pelo seu “spin” e pela órbita dos elétrons ao redor do núcleo do átomo.",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": ["Movimento de elétrons", "Movimento de fótons", "Movimento de prótons", "Movimento de nêutrons"],
      "respostaCorreta": 0,
      "pontos": 35,
    },

    {
      "fase": 3,
      "pergunta": "O que é a indução magnética?",
      "erro": "ERRADO ! A indução magnética é o fenômeno pelo qual uma variação no campo magnético produz uma força eletromotriz (fem) em um circuito fechado ou uma diferença de potencial em um condutor aberto",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": ["O processo de criar um campo elétrico a partir de um campo magnético", "O processo de criar um campo magnético a partir de um campo elétrico", "O processo de criar um campo magnético em um material não magnético", "O processo de criar um campo elétrico em um material não condutor"],
      "respostaCorreta": 0,
      "pontos": 40,
    },

    {
      "fase": 3,
      "pergunta": "O que é um eletroímã?",
      "erro": "ERRADO ! Um eletroímã é um tipo de ímã temporário que é criado quando uma corrente elétrica passa por um fio enrolado em torno de um material ferromagnético, como o ferro",
      "acerto": "Até que tu manja dos paranaue",
      "respostas": ["Um ímã que é feito de enrolar um fio condutor em torno de um núcleo de ferro", "Um ímã que é feito de metal", "Um ímã que é feito de eletricidade", "Um ímã que é feito de colocar um ímã permanente dentro de uma bobina"],
      "respostaCorreta": 0,
      "pontos": 40,
    },


  ],
};
