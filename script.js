const button = document.getElementById('calculate');
const resultElement = document.getElementById('result');

button.addEventListener('click', () => {

    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);

    // reset visual
    resultElement.style.transform = "scale(0.8)";
    resultElement.style.transition = "0.2s";

    // validação
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || num1 === 0) {

        resultElement.textContent = "Inválido";
        resultElement.style.color = "#ff4d4d";
        resultElement.style.background = "#ffe6e6";

        setTimeout(() => {
            resultElement.style.transform = "scale(1)";
        }, 100);

        return;
    }

    // cálculo
    const result = (num3 * num2) / num1;

    // formatação brasileira
    const formattedResult = result.toLocaleString("pt-BR", {
        minimumFractionDigits: Number.isInteger(result) ? 0 : 2,
        maximumFractionDigits: 2
    });

    // exibir resultado
    resultElement.textContent = formattedResult;
    resultElement.style.color = "#00cc66";
    resultElement.style.background = "#e6fff2";

    // animação
    setTimeout(() => {
        resultElement.style.transform = "scale(1)";
    }, 100);

});
