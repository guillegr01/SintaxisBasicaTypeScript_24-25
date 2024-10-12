/**
 * *MÉTODO SOME: se utiliza para ver si alguno de los elementos del array
 * *cumple una condición
 * ? La funcion SOME recibe como parametro una funcion y devuelve
 * ? un booleano que sera true o false dependiendo de si la condición
 * ? se da en algún elemento del array.
 */

const arrayNumerosSome:number[] = [1,2,3,4,5,6,7];

let booleano:boolean;

//FORMA 1
booleano = arrayNumerosSome.some((elem:number) => {
    if (elem%3===0) { //si hay algún elemento multiplo de 3
        return true;
    }else {
        return false;
    }
})

//FORMA 2
function multiploDe3(elem:number): boolean {
    if (elem%3===0) { //si hay algún elemento multiplo de 3
        return true;
    }else {
        return false;
    }
}

booleano = arrayNumerosSome.some(multiploDe3);

if (booleano) {
    console.log("Hay multiplo de 3");
}else {
    console.log("No hay multiplo de 3");
}