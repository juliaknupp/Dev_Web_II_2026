function limparElementos(nomeDaClasse){
    let display = document.querySelectorAll(nomeDaClasse)
    for(const elemento of display){
        elemento.textContent = "";
    }
}

function exibirErro(elementDOM, msg, tempoDeExibicao){
    elementDOM.textContent = msg;
    setTimeout(() => elementDOM.textContent = '', tempoDeExibicao);
}

export {exibirErro, limparElementos}