// Definimos las variables tipo let
let pension = 0;
let jornada = 0;
let ruta = 0;
let restaurante = 0;
let totalf = 0;
let total = document.getElementById("total");

// Definimos la funcion para seleccionar el grado
function selGrado() {

    // Tomamos la opcion seleccionada
    let selGrado = parseInt(document.getElementById("selGrado").value);

    // Segun la opcion seleccionada el valor de la variable cambiara
    switch (selGrado) {
        case 1:
            pension = 150000;
            break;
        case 2:
            pension = 145000;
            break;
        case 3:
            pension = 140000;
            break;
        case 4:
            pension = 135000;
            break;
        case 5:
            pension = 130000;
            break;
        case 6:
            pension = 125000;
            break;
        case 7:
            pension = 120000;
            break;
        case 8:
            pension = 115000;
            break;
        case 9:
            pension = 110000;
            break;
        case 10:
            pension = 105000;
            break;
        case 11:
            pension = 100000;
            break;
    }

    // Actualizamos el Total
    calcularTotal();
}

// Definimos la funcion para seleccionar la jornada
function selJornada() {

    // Tomamos la opcion seleccionada
    let selJornada = parseInt(document.getElementById("selJornada").value);

    // Segun la opcion seleccionada el valor de la variable cambiara
    switch (selJornada) {
        case 1:
            jornada = 0;
            break;
        case 2:
            jornada = 25000;
            break;
        case 3:
            jornada = 50000;
            break;
    }

    // Actualizamos el Total
    calcularTotal();
}

// Definimos la funcion para seleccionar el servicio de ruta
function selRuta() {
    
    // Tomamos la opcion seleccionada
    let selTransporte = parseInt(document.getElementById("selRuta").value);

    // Segun la opcion seleccionada el valor de la variable cambiara
    switch (selTransporte) {
        case 1:
            ruta = 125000;
            break;
        case 2:
            ruta = 0;
            break;
    }

    // Actualizamos el Total
    calcularTotal();
}

// Definimos la funcion para seleccionar el servicio de restaurante
function selRestaurante() {
    
    // Tomamos la opcion seleccionada
    let selRestaurante = parseInt(document.getElementById("selRestaurante").value);

    // Segun la opcion seleccionada el valor de la variable cambiara
    switch (selRestaurante) {
        case 1:
            restaurante = 200000;
            break;
        case 2:
            restaurante = 0;
            break;
    }

    // Actualizamos el Total
    calcularTotal();
}

// Definimos la funcion resetear para dejar todas las variables en 0
function resetear(){
    pension = 0;
    jornada = 0;
    ruta = 0;
    restaurante = 0;
    totalf = 0;

    // Mostrmoa 0 en pantalla
    total.innerHTML = totalf;
}

// Definimos la funcion para calcular la pension
function calcularTotal() {

    // Sumamos variables
    totalf = pension + jornada + ruta + restaurante;

    // Mostramos el total en pantalla
    total.innerHTML = totalf;
}