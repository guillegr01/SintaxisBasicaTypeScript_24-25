/**
 * *Tipos simples: number, string, boolean, undefined, null y any
 * *Tipos complejos: arrays, set, object(combinacion clave valor)
 * *Los tipos simples son valores y los complejos son referencias.
 * *Ejemplo:
 * *arr1 = [1,2,3]
 * *arr2 = arr1 (por lo tanto apuntan a lo mismo)
 * *arr2[0] = 9 entonces arr1 = [9,2,3] = arr2
 * *arr3 = [9,2,3] (aunque tenga los mismos valores que arr1 y arr2 y sea tambien un array, 
 * *no estan apuntando a la misma dirección de memoria)
 */

//declaración de variable
const _a:number = 5;
const _b:string = "hola";

//correcto
const c:number = 5;
const _d:number = c;

//correcto
const arrayNum:number[] = [1,2,3,4,5];
arrayNum.push(6);
arrayNum[1] = 3

const arrayConstante:number[] = [1,2,3];
//e es un array de numeros y apuntara al mismo sitio que arrayconstante
let e = arrayConstante
e.push(7);//se puede
arrayConstante.push(8);//se puede

//ahora let al no ser constante puede hacer esto pero deja de apuntar al mismo sitio que array constante
e = [1,2];

console.log("Hola Mundo");


