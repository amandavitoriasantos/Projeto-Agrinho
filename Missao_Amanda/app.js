let Atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta (){
    if (Atual >= perguntas.length){
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[Atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    imagemPergunta.src = perguntaAtual.imagem;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}



function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}


function respostaSelecionada (opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + "";
    Atual++;
    mostraPergunta();
}

function mostraResultado (){
    caixaPerguntas.textContent = "Em 2049...";
    imagemPergunta.style.display = "none";
    caixaResultados.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();