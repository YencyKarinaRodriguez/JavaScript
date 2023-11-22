//aqui se crea la funcion de calcular pedido
function calcularTotal(cantidad, valor) {
    return cantidad * valor;
}

//aqui se crea ka funcion para realizar la orden
function mostrarOrden() {
    //aqui se muestra el valor de los platos, cantidad o tipo
    let cantidad = parseInt(documento.getElementById("cantidad").valor);
    let valor = parseInt(document.getElementById("valor").valor);
    let tipo = documento.getElementById("tipo").valor;

    if (cantidad  > 0 && valor > 0 &&  tipo !== "Tipo de Plato") {
        //aqui se calcula el total del pedido
        let total = calcularTotal(cantidad, valor);
        //aqui se muestra el total del pedido
        mostrarResultado('Pedido realizado: ${cantidad} platos de  ${tipo}. Total a pagar: $${total}');
    } else {
        //aqui se muestra un mensaje de algun error
        mostrarResultado("Verifique sus datos. Complete la cantidad, valor y tipo de plato correctamente.");
    }
}

//aqui se crea la funcion para mostrar el mensaje
function mostrarResultado(mensaje) {

    let resultadoElemento = documento.getElementById("resultado");
    let respuestaElemento = documento.getElementById("respuesta");

    respuestaElemento.estilo.display = "bloque";

    //aqui se muestra el mensaje
    resultadoElemento.innerHTML = mensaje;

    //aqui se establece el color del texto en verde si es un pedido exitoso, rojo si hay un error
    if (mensaje.includes("Pedido realizado")) {
        resultadoElemento.estilo.color = "verde";
    } else {
        resultadoElemento.estilo.color = "rojo";
    }
}