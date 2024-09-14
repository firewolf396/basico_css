alert('Hola pepe');
console.log("pepe");
console.error('pepe 2');
// comentario
/**
 * definicion de variables
 * var, let, const
 */
var nombre = 'pepe';//String
let apellido = '';// string
apellido='gomes';
let combreCompleto = nombre + " " + apellido;
combreCompleto=`Nombre completo: ${nombre} ${apellido} `;
const a= 2; //number
let salario = 12.36 //number
let mayorEdad = true; //boolean
mayorEdad = false; //boolean
let pares = new Array(5);

pares[0] = 2;
pares[1] = 4;
pares[2] = 6;
pares[3] = 8;
pares[4] = 10;
console.log(pares);
let impares = [1,3,4,5,6,8,9];
console.log(impares);

/**
 * condicionales - operadores
 * && and
 * || or
 * ! negacion 
 * > mayor que
 * < menor que 
 * >=mayor o igual 
 * <= menor o igual 
 * != diferente 
 * == igual de valor y no de tipo de dato
 * === igual de valor y tipo de dato
 */
const c='1';
const d=1;
console.log(c==d);
console.log(c===d);

if(c===d){
    //bloque
} else if(c==d){
    //bloque
}else{
    //Bloque
}

let categotia = "a";
switch(categotia){
    case "a":
        //bloque
        break;
    case "b":
        //bloque
        break;
    default:
        //bloque
        break;
}
/**console.log('ciclos------------------------------');
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
for(let index=0; index<numeros.length; index++){
    console.log(numeros[index]);
 }
 console.log('For in------------------------------');
 for(let index in numeros){
     console.log(numeros[index]);
  }
  console.log('For of------------------------------');
  for(let numero of numeros){
    console.log(numero);
 }
 console.log('while------------------------------');
  let index=0;
  while(index<numeros.length){
    console.log(numeros[index]);
    index++;
  }
  console.log('do while------------------------------');
    index=0;
  do{
    console.log(numeros[index]);
    index++;
  }while(index<numeros.length)
    
    console.log('foreach------------------------------');
    numeros.forEach((numero, pos)=>{
        console.log(`${pos}: ${numero}`);
    });
**/

console.log('punto uno-');

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
for(let index=0; index<numeros.length; index++){
    if(numeros[index] % 2 == 0){
    console.log(numeros[index]);
    break;
    }
 }
 console.log('punto dos-');

 for(let index=0; index<numeros.length; index++){
    if(numeros[index] % 2 == 1){
    console.log(numeros[index]);
    }
 }
 console.log('punto tres-');

 const numeros_2 = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
 const listaCombinada = numeros.concat(numeros_2);
 console.log(listaCombinada);
 console.log('punto cuatro-');

 for(let pos=listaCombinada.length-1; pos>=0;pos--){
    console.log(listaCombinada[pos])
 }
 console.log('punto cinco-');

 const lista_2 =[50]
 const lista_50 = lista_2.concat(listaCombinada )
 for(let index=0; index<lista_50.length; index++){
 
    console.log(lista_50[index]);
 }
/** solucion del profesor 
 console.log("//imprimir el primer numero par de numeros")
 const par = numeros.find((vuelve)=>{
return vuele % 2 ==1;
 })
 console.log(par)
 console.log("//imprimir todos los numeros impares de numeros");
 const imparesDos = numeros.filter((vuelve)=>{
    return vuelve % 2 ==1;
 });
 console.log(imparesDos);
 console.log("//[20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]");
 const comb = numeros.concat([20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]);
 console.log(comb);

 console.log("ordenar mayor a menor");
comb.sort((a,b)=>{
    return b-a;
})
    
*/
console.log(comb);
console.log("//agregar el numero 50 al comienso del array");
comb.unshift(50);
console.log(comb);
comb.push(100);
console.log(comb);
comb.reverse();
console.log (comb);
comb.pop();
console.log (comb);
comb.shift();
console.log (comb);
comb.splice(4,3);
console.log (comb);
const une = comb.map((value)=>{
    const p = value % 2 === 0 ? "par" : "Impar";
    return `${value} es${p}`   
});
console.log(une);
console.log(une.join('...'));
console.log(une.join('...'));
function saludar(nombre){
    console.log(`hola ${nombre}`);
}
saludar('Pepe');

function saludo (nombre,a) {
    return "hola "+ nombre;
}
console.log(saludo('pepe',12));
const saludarDos = function (nombre){
    console.log(`hola ${nombre}`);
}
saludarDos();
const saludarTres = (nombre)=> {
    console.log(`hola ${nombre}`);
}
 saludarDos = (nombre) =>{
    return `hola ${nombre}`;
}

const personaDos = {
    nombre: '',
    edad: 26,
    cadaso: false,
    jobs: ['a','b','c'],
    materiales: [
        {nombre: 'Programacion', codigo:213431},
        {nombre:'Programacion 1', codigo:213124},
    ]
};
personaDos.nombre="pepe"

