const dataCasamento = new Date("2030-10-12T16:00:00");

function atualizarContagem() {
    const agora = new Date();
    const diferenca = dataCasamento - agora;

    if (diferenca <= 0) {
        document.getElementById("contagem").innerHTML =
            "<h2>Chegou o nosso grande dia!</h2>";

        return;
    }

    const dias = Math.floor(
        diferenca / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (diferenca / (1000 * 60 * 60)) % 24
    );

    const minutos = Math.floor(
        (diferenca / (1000 * 60)) % 60
    );

    const segundos = Math.floor(
        (diferenca / 1000) % 60
    );

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

atualizarContagem();
setInterval(atualizarContagem, 1000);