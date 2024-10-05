/**
 * *MÉTODO FOR EACH: se utiliza para recorrer uno por uno los elementos 
 * * del array y hacer alguna accion con dichos elementos
 * ? La funcion FOR EACH recibe como parametro una funcion y no devuelve
 * ? nada, se ejecuta directamente sobre el array.
 */

const arr:number[] = [1,2,3,4,5];

//FORMA 1: definimos la función dentro del método foreach
arr.forEach((elem,i) => {
    console.log(elem);
})

//FORMA 2: definimos la función a parte y se la pasamos por parametro a foreach
function muestraElementos(elem:number): void {
    console.log(elem);
}

arr.forEach(muestraElementos);