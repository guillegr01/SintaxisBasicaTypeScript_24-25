/**
 * *MÉTODO FILTER: se utiliza para filtrar los elementos que queramos de un 
 * array de origen. De esta manera crearemos otro array pero que no necesariamente 
 * tendrá el mismo tamaño.
 * ? La función filter recibe como parámetro una función y devuelve
 * ? un nuevo array.
 */

const arrayNumeros:number[] = [1,2,3,4,5,6,7];

//FORMA 1
const arrayMayoresQue3_1:number[] = arrayNumeros.filter((elem:number, i:number) => {
    if (elem>3) {
        return elem;
    }
})

console.log(arrayMayoresQue3_1);

//FORMA 2

function mayoresDe3(elem:number, i:number) {
    if (elem>3) {
        return elem;
    }
}

const arrayMayoresQue3_2 = arrayNumeros.filter(mayoresDe3);

console.log(arrayMayoresQue3_2);