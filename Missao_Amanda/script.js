const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-pergunta");
const caixaAlternativas = document.querySelector(".caixa-alternativa");
const caixaResultados = document.querySelector(".texto-resultado");
const imagemPergunta = document.querySelector(".imagem-pergunta");

const perguntas = [
    {
        enunciado: "A produção de alimentos no campo paranaense não tem impacto direto na vida das pessoas que vivem na cidade.",
        imagem: "img/1.jpeg",  // Corrigido: nome da imagem
        alternativas: [
            {
                texto: "b) Esses eventos são apenas festas e não influenciam na relação entre campo e cidade.",
                afirmacao: "falso"
            },
            {
                texto: "a) O que é produzido no campo não influencia a rotina urbana.",
                afirmacao: "verdadeiro"
            }
        ]
    },
    {
        enunciado: "As feiras livres e festas agrícolas são formas importantes de aproximar quem vive na cidade da cultura e dos produtos do campo.",
        imagem: "img/2.webp",  // Corrigido: nome da imagem
        alternativas: [
            {
                texto: "a) Esses eventos permitem o contato com os produtores e fortalecem a cultura rural.",
                afirmacao: "verdadeiro"
            },
            {
                texto: "b) Esses eventos são apenas festas e não influenciam na relação entre campo e cidade.",
                afirmacao: "falso"
            }
        ]
    },
    {
        enunciado: "No Paraná, a cidade e o campo vivem de maneira completamente separada, sem troca de produtos ou saberes.",
        imagem: "img/3.webp",  // Corrigido: nome da imagem
        alternativas: [
            {
                texto: "b) Há uma troca constante de produtos, serviços e conhecimentos entre campo e cidade.",
                afirmacao: "verdadeiro"
            },
            {
                texto: "a) Cada um vive de forma isolada, sem influenciar o outro.",
                afirmacao: "falso"
            }
        ]
    },
    {
        enunciado: "Valorizar o trabalho do agricultor paranaense é uma forma de fortalecer a economia local e garantir alimentos de qualidade.",
        imagem: "img/4.jpg",  // Corrigido: nome da imagem
        alternativas: [
            {
                texto: "a) Reconhecer o papel do agricultor traz benefícios econômicos e sociais para todos.",
                afirmacao: "verdadeiro"
            },
            {
                texto: "b) O trabalho do agricultor não tem grande influência na economia do estado.",
                afirmacao: "falso"
            }
        ]
    },
    {
        enunciado: "Produtos artesanais, como queijos, compostos e pães caseiros, vendidos nas feiras do interior do Paraná, não têm valor para quem vive nas cidades.",
        imagem: "img/5.jpg",  // Corrigido: nome da imagem
        alternativas: [
            {
                texto: "b) Muitos consumidores urbanos valorizam e buscam esses produtos pela qualidade e tradição.",
                afirmacao: "verdadeiro"
            },
            {
                texto: "a) Esses produtos são simples demais para o consumo urbano.",
                afirmacao: "falso"
            }
        ]
    }
];



