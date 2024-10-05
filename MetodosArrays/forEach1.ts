/**
 * *Mediante un for each, mostrar los numeros de un array los cuales solo tengan índice par.
 */

const arrayNum:number[] = [24,464,7,21,4,12,7,86];

arrayNum.forEach((elem,i) => {
    if (i%2===0) {
        console.log(arrayNum[i]);
    }
})