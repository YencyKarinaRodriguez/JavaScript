function factura (){

    // Tomar el valor de la cantidad de platos
    var canPlato = parseInt(document.getElementById("canPlato").value)
    // Tomar el valor del plato
    var valPlato = parseInt(document.getElementById("valPlato").value)
    // Tomar del tipo de plato
    var tipoPlato = document.getElementById("tipoPlato").value
    // Calcular el total del pedido
    total = canPlato * valPlato;

    // Mostrar el cuadro oculto cuando se de el resultado final
    var res = document.getElementById("total")
        // Cambiar estado de none a block
        respuesta.style.display = "block"
        // Texto a mostrar en pantalla
        res.innerHTML = `Pedido realizado: \$${canPlato} platos de \$${tipoPlato}. Total a pagar: $${total}`;
        // Texto en color verde
        res.style.color = "green";
}
