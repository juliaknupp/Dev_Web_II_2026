import { validarAluno, limparSpans, preencherDados, exibirErro } from './alunoFunc.js';

const formAluno = document.querySelector('#formAluno');
const spanErro = document.querySelector('#spanErro');

formAluno.addEventListener('submit', async e => {
    e.preventDefault();

    limparSpans();

    const aluno = {
        nome: document.querySelector('#nome').value.trim(),
        turma: document.querySelector('#turma').value.trim(),
        nota1: document.querySelector('#nota1').value,
        nota2: document.querySelector('#nota2').value
    };

    let erroValidacao = validarAluno(aluno);
    if (erroValidacao) {
        exibirErro(spanErro, msg, 3000);
        return;
    }

    try {
        let resp = await fetch('processaAluno.php', {
            method: "POST",
            body: JSON.stringify(aluno),
            headers: { "Content-Type": "application/json;charset=UTF-8" }
        });

        let dados = null;

        try {
            dados = await resp.json();
        } catch {
            
        }

        if (!resp.ok) {
            let msg = `Erro ${resp.status}: ${resp.statusText}`;
            if (dados?.erro) msg = dados.erro;
            throw new Error(msg);
        }

        if (!dados) {
            throw new Error('Dados não recebidos.');
        }

        preencherDados(dados);

    } catch (erro) {
        exibirErro(erro.message);
    }
});
