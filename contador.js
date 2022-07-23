var valor= 0;

    const diminuir = document.getElementById("diminuir");
    diminuir.addEventListener("click", function () {
        valor = -1;
        atualizarContador();
    });

    const redefinir = document.getElementById("redefinir");
    redefinir.addEventListener("click", function () {
        valor = 0;
        atualizarContador();
    });

    const aumentar = document.getElementById("aumentar");
    aumentar.addEventListener("click", function () {
        valor = +1;
        atualizarContador();
    });

    function atualizarContador() {
        getElementById("placar").innerHTML = valor; 
    }