const form = document.getElementById('form-contato');
const contatos = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNome = document.getElementById('nome-contato');
    const inputTelefone = document.getElementById('telefone-contato');

    // Evitar duplicatas
    if (contatos.some(c => c.nome === inputNome.value.trim())) {
        alert(`O contato "${inputNome.value}" já foi cadastrado.`);
    } else {
        contatos.push({
            nome: inputNome.value.trim(),
            telefone: inputTelefone.value.trim()
        });

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
