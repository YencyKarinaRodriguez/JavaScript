//La funcion prompt cuyo valor por defecto es un tipo string, capture los nombres y la edad de la persona
var nombres=prompt("Ingresa tu nombre");

nacimiento = parseInt(prompt("Ingresa tu año de Nacimiento"))
const fecha = new Date();
const fechaActual = fecha.getFullYear();
let edad = fechaActual - nacimiento;

//Para capturar un valor entero es necesario cambiarlo por eso se recomienda utilizar parseInt

//var Edad=parseInt(prompt("Ingresa la edad"));

//La funcion para mostrar en la pagina es document.write y concatenandolo con las variables

if(edad<=8){
    document.write("Bienvenido niñ@ "+nombres+" usted tiene "+edad+" años de edad y es un niñ@")
}

else if(edad<=18){
    document.write("Bienvenido joven "+nombres+" usted tiene "+edad+" años de edad y es menor de edad")
}

else{
    document.write("Bienvenido señor(a) "+nombres+" usted tiene "+edad+" años de edad y es mayor de edad")
}

    
