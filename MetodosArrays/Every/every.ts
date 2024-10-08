/**
 * *MÉTODO EVERY: se utiliza para ver si todos los elementos del array 
 * * al que se le aplica el método every, cumplen con la condición.
 * ? La funcion EVERY recibe como parametro una función y devuelve
 * ? un booleano que sera true si todos los elementos del array cumplen
 * ? dicha condición, o false en caso contrario.
 */

const arrayEvery: number[] = [1,2,3,4,5,6,7];

let booleanEvery:boolean;

//FORMA1
booleanEvery = arrayEvery.every((elem:number,i:number) => {
    if (elem>0) {
        return true;
    }
})

console.log(booleanEvery);

//FORMA 2
function mayores0(elem:number, i:number) : boolean {
    
    if (elem>0) {
        return true;
    }else {
        return false;
    }

}

booleanEvery = arrayEvery.every(mayores0);

console.log(booleanEvery);