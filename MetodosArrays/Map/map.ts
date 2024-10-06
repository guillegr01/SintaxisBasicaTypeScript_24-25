/**
 * *METODO MAP: la funcion map transforma un array origen y crea un nuevo array
 * * pero este nuevo array tiene el mismo tamaño.
 * ? Al transformar un array y guardarlo en otro, debemos crearnos un nuevo array
 * ? donde guardar los cambios. Como parametro recibe una función, al igual que foreach.
 */

const arrayMap:number[] = [1,2,3,4,5];

//FORMA 1: definicion de funcion dentro de map
const arrayMapAux = arrayMap.map((elem, i) => {
    return 2*elem; //sin el return el array auxiliar se llenaría de elementos unknown
})

console.log(arrayMapAux);

//FORMA 2: definimos funcion a parte
function doble(elem:number) : number {
    return 2*elem;
}

const arrayMapAux2 = arrayMap.map(doble);

console.log(arrayMapAux2);