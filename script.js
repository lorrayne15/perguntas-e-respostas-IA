const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é o objetivo principal do vôlei?",
        alternativas: [
            {
                texto: "Marcar pontos ao derrubar a bola no chão do adversário.",
                afirmacao: "O objetivo principal do vôlei é fazer com que a bola toque o chão do time adversário para marcar pontos."
            },
            {
                texto: "Evitar que a bola toque o chão do seu próprio lado",
                afirmacao: "Para vencer no vôlei, é crucial impedir que a bola caia no seu próprio lado da quadra."
            }
        ]
    },
    {
        enunciado: "Qual é o número de jogadores em cada time durante uma partida de vôlei?",
        alternativas: [
            {
                texto: "Seis jogadores por time",
                afirmacao: "Em uma partida de vôlei, cada equipe é composta por seis jogadores que se revezam nas posições de ataque e defesa."
            },
            {
                texto: " Quatro jogadores por time",
                afirmacao: "O vôlei com quatro jogadores por time não é a regra padrão, mas é uma variação conhecida como vôlei de praia em algumas competições."
            }
        ]
    },
    {
        enunciado: "O que caracteriza uma bomba no vôlei?",
        alternativas: [
            {
                texto: " Um ataque forte e rápido",
                afirmacao: "Uma bomba no vôlei refere-se a um ataque poderoso e rápido que dificulta a defesa do time adversário."
            },
            {
                texto: "Um bloqueio bem-sucedido",
                afirmacao: "O termo bomba não é geralmente usado para descrever um bloqueio, mas sim um ataque forte."
            }
        ]
    },
    {
        enunciado: "Qual é a função principal do levantador em um time de vôlei?",
        alternativas: [
            {
                texto: "Organizar as jogadas e preparar os ataques",
                afirmacao: "O levantador é responsável por organizar as jogadas e fornecer passes precisos para os atacantes."
            },
            {
                texto: "Defender e receber os ataques adversários",
                afirmacao: "A principal função de defender e receber ataques adversários não é do levantador, mas dos jogadores de defesa."
            }
        ]
    },
    {
        enunciado: "Qual é o propósito do toque de dedos no vôlei?",
        alternativas: [
            {
                texto: "Realizar passes precisos e controlar a bola",
                afirmacao: "O toque de dedos é usado para fazer passes precisos e controlar a trajetória da bola durante o jogo."
            },
            {
                texto: "Atacar diretamente o adversário",
                afirmacao: "O toque de dedos não é usado para atacar diretamente, mas para passar e organizar o jogo."
            }
        ]
    },
   
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
