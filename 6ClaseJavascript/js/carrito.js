//aqui se definen las variables con un let
let contador1 = 0;
let contador2 = 0;
let pro1 = 0;
let pro2 = 0;
let totalTodo = 0;
const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");
const subTotal1 = document.getElementById("subTotal1");
const subTotal2 = document.getElementById("subTotal2");
const total = document.getElementById("total");

//aqui se crea la funcion sumar1
function sumar1() {
    //aqui se crea el contador donde la cual va sumando uno en uno
    contador1 += 1;
    //aqui es donde se va observar el valor
    valor1.innerHTML = contador1;
    //aqui se multiplica el precio de un producto por la cantidad
    pro1 = 45000 * contador1;
    //aqui es donde se va observar el valor
    subTotal1.innerHTML = pro1;
    //y aqui se actualiza el total
    calcularTotal();
}

//aqui se crea la funcion restar1
function restar1() {
    //aqui se crea la condicion donde el contador es mayor q 0 
    if (contador1 > 0) {
        //aqui se crea el contador donde la cual va restando uno en uno
        contador1 -= 1;
        //aqui es donde se va a observar el valor 
        valor1.innerHTML = contador1;
        //aqui se resta al subototal
        pro1 -= 45000;
        //aqui se actualiza el total 
        subTotal1.innerHTML = pro1;
    }
    else{
    //aqui se crea una condicion donde dice que de lo contrario el contador y el subtotal permaneceran en 0
        contador1 = 0;
        pro1 = 0;
        valor1.innerHTML = contador1;
        subTotal1.innerHTML = pro1;
    }
    //aqui se actualiza el total
    calcularTotal();
}

//aqui se crea otra funcion que se llama reset1
function reset1() {
    //aqui se crea el contador y el subtotal va a valer cero 
    contador1 = 0;
    pro1 = 0;
    valor1.innerHTML = contador1;
    subTotal1.innerHTML = pro1;
    //aqui se actualiza rle totoal 
    calcularTotal();
}

//aqui se crea la funcion sumar2 
function sumar2() {
    //aqui se crea el contador donde va incrmentando de 1 a 1
    contador2 += 1;
    //aqui es donde se observa el valor 
    valor2.innerHTML = contador2;
    //aqui se multiplica el precio del producto pot la cantidad del contador
    pro2 = 30000 * contador2;
    //aqui se actualiza el subtotal
    subTotal2.innerHTML = pro2;
    //aqui se actualziar el totoal 
    calcularTotal();
}

//aqui se crea la funcion restar2
function restar2() {
    if (contador2 > 0) {
        contador2 -= 1;
        valor2.innerHTML = contador2;
        pro2 -= 30000;
        subTotal2.innerHTML = pro2;
    } else {
        contador2 = 0;
        pro2 = 0;
        valor2.innerHTML = contador2;
        subTotal2.innerHTML = pro2;
    }
    //aqui se actualiza el total
    calcularTotal();
}

//aqui se crea la fncion resetear2 
function resetear2() {
    //aqui el contado ry el subtotal vale 0
    contador2 = 0;
    pro2 = 0;
    valor2.innerHTML = contador2;
    subTotal2.innerHTML = pro2;
    //aqui se actualziar el total
    calcularTotal();
}

//aqui se crea la funcion calcularTotal 
function calcularTotal() {
    //aqui sumamos los productos 
    totalTodo = pro1 + pro2;
    //aqui se observa el valor
    total.innerHTML = totalTodo;
}
