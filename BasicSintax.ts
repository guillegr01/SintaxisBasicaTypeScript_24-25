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
let a:number = 5;
let b:string = "hola";

let arrayNumeros:number[] = [1,2,3,4,5];
arrayNumeros.push(6);
arrayNumeros[1] = 3

console.log("Hola Mundo");


