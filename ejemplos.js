// for ( var i = 0; i < 10; i++){
// 	console.log(i);
// }



// function encontrarVocalA(string){
// 	console.log(string.length);//Jhonn
// 	for(var i = 0; i < string.length; i++){	
//         console.log(string[i]);	
//         if(string[i]=== "a"){
//             return "Encontramos la letra a";
//         }   else{
//                 return "La letra a no se encuentra en la palabra";
//             }
// 	}
// }

// encontrarVocalA('Jhonn')

// //Bucle While

// function mientrasMenor6(){
//     var contador = 1;
//     while(contador < 6){//mientras contador 1 < 6 va aumentando su valor
//         console.log("contador es: " + contador);
//         contador++;
//     }
//     return contador;//6 no entra al bucle pero su ultimo valor es 6 cortando el ciclo
// }

// console.log(mientrasMenor6());



// //EJEMPLO DEL SWITCH
// function semaforo(color){
//     switch(color){
//         case "verde": 
//         console.log("Puede avanzar");
//         break;
//         case "amarillo":
//             console.log("avanzar o disminuir la velocidad");
//             break;
//             case "rojo":
//                 console.log("deben detenerse");
//                 break;
//                 default:
//                     console.log("No es un color del semaforo");
//     }
// }

// semaforo("rojo")
// // var numeros = [2,3,4,5]
// // var suma = numeros.reduce(function(acumulador, elemento){
// // 	return acumulador + elemento;
// // },0)

// console.log(suma);


// var numeros = [2,3,4,5]

// function multiplicar(a,b){
// 	return a * b;
// }

// var producto = numeros.reduce(multiplicar);

// console.log(producto);

// var palabras = ["hola", "como", "estas"]
// var frase = palabras.reduce(function(acumulador, elemento){
//     return acumulador + ' ' + elemento
// },"Mi saludo es: ")

// console.log(frase);


// function saludo(...args){
// 	console.log(arguments.length)
// }	


// saludo("Aura", "Sandoval")


// function suma(...args){
// 	console.log(args)
//     var suma = 0;
//     for(var sumador of args){
//         suma = suma + sumador;
//     }
//     return suma;
// }

// console.log(suma(1,2,3));


// var resultadosTest = [1,2,3,4,5];
// function promedioResultadosTest(resultadosTest) {
//     // El parámetro "resultadosTest" es un arreglo de números.
//     // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
//     // Tu código:
    
//  }
//  var promedio = 0
//     for(var index in resultadosTest){
//         promedio += resultadosTest[index];
//     }
//     console.log(promedio/resultadosTest.length);


//     function arguments (...args){
//         console.log(args);
//         var arguments = 0;
//         for (var sumador of args);
//            arguments *= arguments * sumador;
//      }
//      console.log(arguments);

//      var obj = {
//         nombre: "jhonn",
//         edad:23,
//         decirHola: function () {
//             return "Hola " + this.nombre;
//         },
//         estudios: {
//             universi: ["UDO"],
//             profesor: ["Jhonn"],
//             imprimir: function (){
//                 return this.profesor[0];//busca la propiedad del objeto mas cercano
//             }
//         }
        
//     };
//     //estudio es el objeto que tiene el metodo
//     console.log(obj.estudios.imprimir());
    
//     console.log(obj.decirHola());
//     console.log(obj.hasOwnProperty("nombre"));


//     //bucles
//     console.log(obj)

//     for (let prop in obj) {
//         console.log(obj[prop])  
//     }

    // var gato =  {nombre: "Felino", edad: 1, meow:function (){
    //     return "Meow!";
    //  }};
    // //  return gato;

    //  console.log(gato);

// clase constructora
// class Gato {
//     constructor(nombre){
//         this.nombre = nombre;
//     }
//     maullar(){//ponemos el metodo fuera del constructor
//         return "Mi nombre es " + this.nombre + " miau";
//     }
// }
// var jhonn = new Gato("jhonn");//estamos creando un objeto jhonn y este adquiere las caracteristicas de la clase gato
// console.log(jhonn,maullar());

// //creamos la plantilla
// function Usuario(nombre, email){
//     this.nombre = nombre;
//     this.email = email;
// }

// //y afura llamamos a la clase, y accedemos a prototipo
// Usuario.prototype.presentacion = function(){//podemos crear los metodos de la clase que queramos
//     return "Mi nombre es " + this.nombre + " mi email es " + this.email + "." //definimos el metodo
// }

// //ahora hacemos las instancia unsamos new para llamar la Clase Usuario
// var wendy = new Usuario("Wendy", "wendy@gmail.com")
// console.log(wendy.presentacion());

// // esta plantilla me sirve para crear mas objetos
// var david = new Usuario("David", "david@gmail.com")

// console.log(david.presentacion())

//esto es un metodo predeterminado por los desarrolladores del programa JS
//obj es mi objeto de datos es la plantilla de la clase obj
// var obj = {nombre:"Manuel"}

// console.log(obj.hasOwnProperty("nombre"));


// var academia = {
//     nombre: "Henry"
// }
// //para crear el objeto
// var alumno = Object.create(academia, {names: {value: "manuel"}})
// console.log(academia);
// console.log(alumno);
// //con el assign asignamos la propiedad al objeto
// Object.assign(alumno,{namess:"manuel", lastname: "cuevas"})
// console.log(alumno)


//Herecia clasica

// class Persona {//creamos la clase padre
//     constructor(nombre, edad){
//         this.nombre = nombre;
//         this.edad = edad;
//     }
//     saludar(){
//         return "Hola mi nombre es " + this.nombre + " y mi edad es " + this.edad;
//     }
// }

// //ahora la heredamos /le debemos colocar la palabra extends
// class Programador extends Persona {//clase hija hereda de clase padre
//     constructor(nombre, edad, experiencia){
//         super(nombre, edad)//esto es lo que heredo de la clase Persona
//         this.experiencia = experiencia;
//     }
//     codear(){
//         return "Soy " + this.nombre  + " codeo desde hace " + this.experiencia + " años."
//     }
// }

// var Carlos = new Persona("carlos", 55)//creamos un objeto de mi clase persona
// console.log(Carlos.saludar())

// var programador = new Programador("Carlos", 55, 4)//heredamos de la clase programador
// console.log(programador.codear())

function decirHola(usuario){
    return "Hola " + usuario
}

function deciAdios (usuario){
    return "Adios " + usuario
}

function crearSaludo(usuario, cb){//cb es un callback abreviacion
    return cb(usuario)
}
//manuel lo recibe de la funcion crearsaludo
console.log(crearSaludo("Manuel", deciAdios))