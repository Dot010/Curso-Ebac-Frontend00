const form = document.getElementById('form-solicitar');
const valorMin = document.getElementById('valor-Min');
const valorMax = document.getElementById('valor-Max');

const errorMin = document.querySelector('.error-Min');
const errorMax = document.querySelector('.error-Max');
const mensagemFinal = document.querySelector('.mensagem-final');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const min = parseFloat(valorMin.value);
    const max = parseFloat(valorMax.value);

    
    errorMin.style.display = 'none';
    errorMax.style.display = 'none';
    mensagemFinal.textContent = '';
    mensagemFinal.style.color = '';

    const minValido = min >= 1000;
    const maxValido = max <= 999999;

    if (!minValido) {
        errorMin.style.display = 'block';
    }

    if (!maxValido) {
        errorMax.style.display = 'block';
    }

    if (minValido && maxValido) {
        if (max > min) {
            mensagemFinal.textContent = "Sua solicitação entrará em análise.";
            mensagemFinal.style.color = 'green';
        } else {
            mensagemFinal.textContent = "Formulário inválido: O valor máximo deve ser maior que o mínimo.";
            mensagemFinal.style.color = 'red';
        }
    }
});
