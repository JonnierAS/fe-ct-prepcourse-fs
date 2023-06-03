for ( var i = 0; i < 10; i++){
	console.log(i);
}



function encontrarVocalA(string){
	console.log(string.length);//Jhonn
	for(var i = 0; i < string.length; i++){	
        console.log(string[i]);	
        if(string[i]=== "a"){
            return "Encontramos la letra a";
        }   else{
                return "La letra a no se encuentra en la palabra";
            }
	}
}

encontrarVocalA('Jhonn')

//Bucle While

function mientrasMenor6(){
    var contador = 1;
    while(contador < 6){//mientras contador 1 < 6 va aumentando su valor
        console.log("contador es: " + contador);
        contador++;
    }
    return contador;//6 no entra al bucle pero su ultimo valor es 6 cortando el ciclo
}

console.log(mientrasMenor6());



//EJEMPLO DEL SWITCH
function semaforo(color){
    switch(color){
        case "verde": 
        console.log("Puede avanzar");
        break;
        case "amarillo":
            console.log("avanzar o disminuir la velocidad");
            break;
            case "rojo":
                console.log("deben detenerse");
                break;
                default:
                    console.log("No es un color del semaforo");
    }
}

semaforo("rojo")
// var numeros = [2,3,4,5]
// var suma = numeros.reduce(function(acumulador, elemento){
// 	return acumulador + elemento;
// },0)

console.log(suma);


var numeros = [2,3,4,5]

function multiplicar(a,b){
	return a * b;
}

var producto = numeros.reduce(multiplicar);

console.log(producto);

var palabras = ["hola", "como", "estas"]
var frase = palabras.reduce(function(acumulador, elemento){
    return acumulador + ' ' + elemento
},"Mi saludo es: ")

console.log(frase);


function saludo(...args){
	console.log(arguments.length)
}	


saludo("Aura", "Sandoval")


function suma(...args){
	console.log(args)
    var suma = 0;
    for(var sumador of args){
        suma = suma + sumador;
    }
    return suma;
}

console.log(suma(1,2,3));


var resultadosTest = [1,2,3,4,5];
function promedioResultadosTest(resultadosTest) {
    // El parámetro "resultadosTest" es un arreglo de números.
    // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
    // Tu código:
    
 }
 var promedio = 0
    for(var index in resultadosTest){
        promedio += resultadosTest[index];
    }
    console.log(promedio/resultadosTest.length);


    function arguments (...args){
        console.log(args);
        var arguments = 0;
        for (var sumador of args);
           arguments *= arguments * sumador;
     }
     console.log(arguments);
     