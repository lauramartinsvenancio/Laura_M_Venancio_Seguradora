function calcularSeguro() {
    let idade = parseInt(document.getElementById("idade").value);
    let estadoCivil = document.getElementById("estadoCivil").value;
    let motoristasAdicionais = parseInt(document.getElementById("motoristasAdicionais").value);
    let classeVeiculo = document.getElementById("classeVeiculo").value;
    let valorBase;
 
    if (idade > 18 && idade < 27) {
        valorBase = 380;
    } else if (idade >= 28 && idade <= 50) {
        valorBase = 180;
    } else {
        valorBase = 200;
    }
 
    if (estadoCivil === "solteiro") {
        valorBase += 60;
    }
 
    if (motoristasAdicionais > 0) {
        valorBase += valorBase * 0.18 * motoristasAdicionais;
    }
 
    let fatorPericulosidade;
 
    if (classeVeiculo === "A") {
        fatorPericulosidade = 0.10;
    } else if (classeVeiculo === "B") {
        fatorPericulosidade = 0.20;
    } else {
        fatorPericulosidade = 0.38;
    }
 
    let valorSeguro = valorBase + (valorBase * fatorPericulosidade);
    document.getElementById("resultado").innerText =
        `O valor do seguro para ${document.getElementById("nome").value} é R$ ${valorSeguro.toFixed(2)}`;
}