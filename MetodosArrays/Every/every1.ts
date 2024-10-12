/**
 * *A partir de un array de subarrays, osea un tupla, comprobar si todos los subarrays
 * *contiene el numero 3.
 */

const arr = [
    [1,2,3],
    [3,4],
    [3,2,3,4],
    [2,3,4]
];
/**
 * Utilizamos every porque queremos comprobar si todos los elementos del array cumplen la codición.
 * Y luego utilizamos some ya que en cada subelemento, queremos ver si al menos uno es un 3.
 */
const todos3: boolean = arr.every((elem:number[]) => {

    return elem.some((elem:number) => {
        return elem===3;
    })

})

console.log(todos3 ? "Todos los subarrays de la tupla contienen el número 3." 
    : "No todos los subarrays de la tupla contienen el número 3.");
