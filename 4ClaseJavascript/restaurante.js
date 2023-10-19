//Total del pedido
function calcularTotal(cantidad, valor) {
    return cantidad * valor;
}

//este es para realizar la orden
function mostrarOrden() {
    //valor de los platos, cantidad o tipo
    let cantidad = parseInt(documento.getElementById("cantidad").valor);
    let valor = parseInt(document.getElementById("valor").valor);
    let tipo = documento.getElementById("tipo").valor;

    if (cantidad  > 0 && valor > 0 &&  tipo !== "Tipo de Plato") {
        //calcular total del pedido
        let total = calcularTotal(cantidad, valor);
        //total del pedido
        mostrarResultado('Pedido realizado: ${cantidad} platos de  ${tipo}. Total a pagar: $${total}');
    } else {
        //mensajes de error
        mostrarResultado("Verifique sus datos. Complete la cantidad, valor y tipo de plato correctamente.");
    }
}

//mensaje
function mostrarResultado(mensaje) {

    let resultadoElemento = documento.getElementById("resultado");
    let respuestaElemento = documento.getElementById("respuesta");

    respuestaElemento.estilo.display = "bloque";

    //mostrar el mensaje
    resultadoElemento.innerHTML = mensaje;

    //aquí se establece el color del texto en verde si es un pedido exitoso, rojo si hay un error
    if (mensaje.includes("Pedido realizado")) {
        resultadoElemento.estilo.color = "verde";
    } else {
        resultadoElemento.estilo.color = "rojo";
    }
}