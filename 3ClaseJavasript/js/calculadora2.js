//aqui se crea la funcion de sumar
function sumar (n1, n2){
    //aqui se crea la suma para los dos numeros
    var resultado = n1 + n2;
    var res = document.getElementById("resultado")
    //aqui se crea una condicion para que no deje sumar los numeros 00
    if (n1 != 0 && n2 != 0){
        //aqui se muestra el resultado
        respuesta.style.display = "block";
        res.innerHTML = `Total: ${resultado}`;
        res.style.color = "green";
    //se crea ptra condicion por si da error
    }else{
        respuesta.style.display = "block";
        res.innerHTML = `Verifique sus datos`;
        res.style.color = "red";
    }
}

//aqui se cre la funcion de restar
function restar (n1, n2){
    //aqui se crea la resta
    var resultado = n1 - n2;
    var res = document.getElementById("resultado")
    //aqui se crea la condicion para que no reste los 0
    if (n1 != 0 && n2 != 0){
        //aqui se muestra el resultado
        respuesta.style.display = "block";
        res.innerHTML = `Total: ${resultado}`;
        res.style.color = "green";
    //se crea otra condicion por si da error
    }else{
        respuesta.style.display = "block";
        res.innerHTML = `Verifique sus datos`;
        res.style.color = "red";
    }
}

//aqui se la funcion de multiplicar
function multiplicar (n1, n2){
    //aqui se crea la multiplicaicon
    var resultado = n1 * n2;
    var res = document.getElementById("resultado")
    //se crea una condicion para los 0
    if (n1 != 0 && n2 != 0){
        //aqui se muestra el resultado
        respuesta.style.display = "block";
        res.innerHTML = `Total: ${resultado}`;
        res.style.color = "green";
    //aqui se crea nuevamente la condiicon por si da error
    }else{
        respuesta.style.display = "block";
        res.innerHTML = `Verifique sus datos`;
        res.style.color = "red";
    }
}

//aqui se crea la funcion dividir
function dividir (n1, n2){
    //aqui se crea la division
    var resultado = n1 / n2;
    var res = document.getElementById("resultado")
    //se crea la condicon para los 0
    if (n1 != 0 && n2 != 0){
        //se muestra el resultado
        respuesta.style.display = "block"
        res.innerHTML = `Total: ${resultado}`;
        res.style.color = "green";
    //se crea nuevamente la condicon por si algun error
    }else{
        respuesta.style.display = "block";
        res.innerHTML = `Verifique sus datos`;
        res.style.color = "red";
    }
}

//aqui se crea la funcion mostrar 
function mostrar(){
    //aqui lee el n1
    let n1 = parseInt(document.getElementById("n1").value)
    //aqui lee el n2
    let n2 = parseInt(document.getElementById("n2").value)
    //aqui lee la opcion
    let opc = parseInt(document.getElementById("opc").value)
    switch(opc){
        case 1:
            sumar(n1, n2)
            break;
        case 2:
            restar(n1, n2)
            break;
        case 3:
            multiplicar(n1, n2)
            break;
        case 4:
            dividir(n1, n2)
            break;
        default:
            alert("Opcion Invalida")
    }
}