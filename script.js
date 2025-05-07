const peso = document.querySelector('.peso');
const altura = document.querySelector('.altura');
const imc = document.querySelector('.imc-calculo');
const imcDiagnostico = document.querySelector('.imc-diagnostico');

function calculo() {
    const valor1 = peso.value.replace(',', '.');
    const valor2 = altura.value.replace(',', '.');
    const resultado = valor1 / (valor2 * valor2);

    /* Diagnósticos */
    if (resultado < 18.5) {
        imcDiagnostico.innerHTML = "Abaixo do peso";
    } else if (resultado > 24.9 && resultado < 30) {
        imcDiagnostico.innerHTML = "sobrepeso";
    }
    else if (resultado > 29.9 && resultado < 35) {
        imcDiagnostico.innerHTML = "obesidade 1";
    }
    else if (resultado > 34.9 && resultado < 40) {
        imcDiagnostico.innerHTML = "obesidade 2";
    }
    else if (resultado > 39.9 && resultado < Infinity) {
        imcDiagnostico.innerHTML = "obesidade 3";
    }
    else if (resultado > 18.4 && resultado < 25) {
        imcDiagnostico.innerHTML = "Normal";
    } else {
        imcDiagnostico.innerHTML = '';
    }

    /* Calculo */
    if (resultado > 0 && resultado < Infinity) {
        imc.innerHTML = resultado.toFixed(2).replace('.', ',');
    }
    else {
        imc.innerHTML = "invalido, insira os valores corretos";
    }
}