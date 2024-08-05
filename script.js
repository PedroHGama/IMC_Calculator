function calcularIMC() {
    const nome = document.getElementById('nome').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const sexo = document.querySelector('input[name="sexo"]:checked').value;

    if (isNaN(peso) || isNaN(altura)) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return false;
    }

    const imc = peso / (altura * altura);
    let condicao = "";
    let pesoIdealMin, pesoIdealMax;

    if (sexo === "feminino") {
        if (imc < 19.1) {
            condicao = "Abaixo do peso";
            pesoIdealMin = 19.1 * altura * altura;
        } else if (imc < 25.8) {
            condicao = "No peso normal";
        } else if (imc < 27.3) {
            condicao = "Marginalmente acima do peso";
        } else if (imc < 32.3) {
            condicao = "Acima do peso ideal";
            pesoIdealMax = 25.8 * altura * altura;
        } else {
            condicao = "Obeso";
            pesoIdealMax = 25.8 * altura * altura;
        }
    } else {
        if (imc < 20.7) {
            condicao = "Abaixo do peso";
            pesoIdealMin = 20.7 * altura * altura;
        } else if (imc < 26.4) {
            condicao = "No peso normal";
        } else if (imc < 27.8) {
            condicao = "Marginalmente acima do peso";
        } else if (imc < 31.1) {
            condicao = "Acima do peso ideal";
            pesoIdealMax = 26.4 * altura * altura;
        } else {
            condicao = "Obeso";
            pesoIdealMax = 26.4 * altura * altura;
        }
    }

    let resultado = `<span class="nome">Nome: ${nome}</span><span class="imc">IMC: ${imc.toFixed(2)}</span><span class="condicao">Condição: ${condicao}</span>`;

    if (pesoIdealMin) {
        resultado += `<span>Você deve ganhar ${Math.round(pesoIdealMin - peso)} Kg para atingir a condição normal.</span>`;
    } else if (pesoIdealMax) {
        resultado += `<span>Você deve perder ${Math.round(peso - pesoIdealMax)} Kg para atingir a condição normal.</span>`;
    }

    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('resultadoContainer').style.display = 'block';
    document.getElementById('imcForm').style.display = 'none';

    return false;
}

function fecharResultado() {
    document.getElementById('resultadoContainer').style.display = 'none';
    document.getElementById('imcForm').style.display = 'block';
}
