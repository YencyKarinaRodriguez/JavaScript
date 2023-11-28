//aqui se crea la espera de alguna tecla
window.addEventListener("keydown",(e)=>{
    //aqui se realiza la accion de que si oprimen (+) es xq se va a sumar o incrementar
    if(e.key=="+"){
        incremento()
    }
    //aqui es lo contrario si orpimen (-) es xq el valor se va a restar o decrementar 
    else if(e.key=="-"){
        decremento()
    }
})

//aqui se crea el contador que inicia en 0
let contador = 0
//aqui es donde el valor va mostrando los cambios
const valor = document.getElementById("valor")

//aqui se crea la funcion de sumar la accion o tecnicamente incrementar
function incremento(){
    //aqui se utiliza para que cuando el usuario oprima la tecla (+) sumara o incrementa 1
    contador += 1;
    //aqui es donde se va observar el valor
    valor.innerHTML = contador;
}

//aqui se crea la funcion de restar o de decrementar
function decremento(){
    //aqui se crea la condicion para el contador de que si es mayor a 0
    if(contador>0){
        //signnifica que el contador se decrementa cada vez que el usurio oprima (-) 
        contador -= 1;
        //aqui es donde se va observar el valor
        valor.innerHTML = contador;
    }else{
        //aqui se crea otra condicion donde es de lo contrario el contador se quedara intacto
        contador = 0;
        //aqui es donde se va observar el valor
        valor.innerHTML = contador
    }
}


//y aqui se crea la funcion de resetear
function resetear(){
    //lo que significa que el contador pasa a 0 al oprimir el boton
    contador = 0;
    //aqui es donde se va observar el valor
    valor.innerHTML = contador
}