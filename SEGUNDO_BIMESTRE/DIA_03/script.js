function mostrarTabela() {
    let novaImagem = document.createElement("img");
    
    novaImagem.src = "Tabela_Jogos.png";
    novaImagem.alt = "Tabela de Jogos da Copa do Mundo";
    novaImagem.className = "imagem-tabela";


    document.getElementById("conteudo-principal").appendChild(novaImagem);
    
    const btn = document.querySelector(".btn-mostrar");
    btn.disabled = true;
    btn.innerText = "Tabela Exibida Abaixo 👇";
}

function revelar() {

    const imagem = document.getElementById("foto-jogador");
    if (imagem) {
        imagem.src = "_vinicius_junior.png";
    }


    document.getElementById("nome-jogador").innerText = "Vinícius José Paixão de Oliveira Júnior";
    document.getElementById("nascimento-jogador").innerText = "12/07/2000 (25 anos)";
    document.getElementById("altura-jogador").innerText = "1,76 m";
    document.getElementById("posicao-jogador").innerText = "Ponta-esquerda / Atacante";
    document.getElementById("rank-jogador").innerText = "9,5";


    const placeholders = document.querySelectorAll(".placeholder");
    placeholders.forEach(el => {
        el.classList.remove("placeholder");
        el.classList.add("card-text");
    });
}