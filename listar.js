'use strict';
import { exibirErro, limparElementos } from "../util.js";
const divFilmes = document.querySelector('#divFilmes');
const spanErro = document.querySelector('#erro');
//funçoes auto invocaveis + defer

(()=>{
    fetch('filmes.json')
    .then(resp =>{
        console.log(resp)
        if(!resp.ok)
            throw new Error(`Erro: ${resp.status} - ${resp.statusText}`)
        return resp.json();
    })
    .then( dados => {
        console.log(dados)
        console.log(dados.filmes)
        montarListaDeFilmes(dados.filmes)
    })
    .catch( erro => exibirErro(spanErro, erro.message, 3000))
})();

function montarListaDeFilmes(filmes){
    //alert('entrei')
    while(divFilmes.firstChild)
        divFilmes.removeChild(divFilmes.firstChild);
    filmes.forEach(filme => {
        const{id, titulo, resumo, generos, elenco, lancamento} = filme;

        
        const ulFilme = document.createElement('ul');
        const liId = document.createElement('li');
        const liTitulo = document.createElement('li');
        const liResumo = document.createElement('li');
        const liGeneros = document.createElement('li');
        
        const liElenco = document.createElement('li');
        const liLancamento = document.createElement('li');

        liId.innerHTML = `<strong>Id:</strong>${id}`;
        liTitulo.innerHTML = `<strong>Titulo:</strong>${titulo}`;
        liResumo.innerHTML = `<strong>Resumo:</strong>${resumo}`;
        liElenco.innerHTML = `<strong>Elenco:</strong>`;

        const ulElenco = document.createElement('ul');
        liElenco.appendChild(ulElenco);
        elenco.forEach( pessoa =>{
            const li = document.createElement('li');
            li.textContent = pessoa.ator;
            ulElenco.appendChild(li);

        })
        liLancamento.innerHTML = `<strong>${lancamento.dia} (${lancamento.pais}</strong>`;
        liGeneros.innerHTML = `<strong>Genero:</strong>`;

        const ulGeneros = document.createElement('ul');
        liGeneros.appendChild(ulGeneros);
        generos.forEach(genero=>{
            const li = document.createElement('li');
            li.textContent = genero;
            ulGeneros.appendChild(li);
        })
    

        const linha = document.createElement('hr');

        ulFilme.append(liId, liTitulo, liResumo, liGeneros, liElenco, liLancamento, linha);
        divFilmes.appendChild(ulFilme);
    });
}