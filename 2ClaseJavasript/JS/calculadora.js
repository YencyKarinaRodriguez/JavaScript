function calculadora(){

    var operacion = parseInt(prompt("Inserte 1 para sumar,inserte 2 para restar,Inserte 3 paramultiplicar,Inserte4 paraDividir e Inserte 5 para saber número mayor"))

    function sumar() {
        var num1 = parseFloat((prompt("Inserte valor 1:")));
        var num2 = parseFloat((prompt("Inserte valor 2:")));
        var resultado = num1 + num2;
        document.write("El resultado  es igual a "+resultado);
    }
    
    function restar() {
        var num1 = parseFloat((prompt("Inserte valor 1:")));
        var num2 = parseFloat((prompt("Inserte valor 2:")));
        var resultado = num1 - num2;
        document.write("El resultado  es igual a "+resultado);
    }
    
    function multiplicar() {
        var num1 = parseFloat((prompt("Inserte valor 1:")));
        var num2 = parseFloat((prompt("Inserte valor 2:")));
        var resultado = num1 * num2;
        document.write("El resultado  es igual a "+resultado);
    }
    
    function dividir() {
        var num1 = parseFloat((prompt("Inserte valor 1:")));
        var num2 = parseFloat((prompt("Inserte valor 2:")));
        var resultado = num1 / num2;
        if (num1 != 0 && num2 != 0){
            document.write("El resultado  es igual a "+resultado);
        }else{
            document.write("No se puede dividir con 0")
        }

        }
        function mayor() {
            var num1 = parseFloat((prompt("Inserte valor 1:")));
            var num2 = parseFloat((prompt("Inserte valor 2:")));
            if (num1 > num2){
                document.write(+num1+" es mayor que "+num2);
            }else{
                document.write(+num2+" es mayor que "+num1)
            }
        }
        
    switch (operacion){
        case 1:
            sumar();
        break;
        case 2:
            restar();
        break;
        case 3:
            multiplicar();
        break;
        case 4:
            dividir();
        break;
        case 5:
            mayor();
        break;
        default:
            alert(Error);
        break;
    }
}