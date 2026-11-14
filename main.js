function CalcularIMC() {
    let altura = parseFloat(document.getElementById("nota1").value);
    let peso = parseFloat(document.getElementById("nota2").value);
    let imc = peso / (altura / 100) ** 2;
    let resultado = document.getElementById("resultado");
    resultado.innerText = "O IMC é: " + imc.toFixed(2);
}