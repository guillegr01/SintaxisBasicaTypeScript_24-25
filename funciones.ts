//Declaracion de funcion clasica en TypeScript
function suma1(a:number, b:number): number {
    
    let resultado:number =a+b;
    return resultado;

}

//declaracion de funcion lambda que solo tiene una linea
const suma = (a:number,b:number):number=> a+b;

//declaracion de funcion lambda
const suma2 = (a:number,b:number):number => {
    return a+b;
}
console.log(suma2 (3,43));

//funcion que imprime los numeros pares de un array
const pares = (a:number[]):number[] => {

    const array:number[] = [];
    for(let i:number=0; i<=a.length; i++) {
        if(a[i]%2==0) {
            array.push(a[i]);
        }
    }

    return array;

}