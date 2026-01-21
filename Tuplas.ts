
/**
 * *Las tuplas suelen ser arrays de arrays o arrays unidimensionales. 
 * *La principal utilidad de las tuplas es tipar bien el formate y tamaño del array
 * ! Las tuplas tiene un defecto y es que son muy mutables. Por ej se puede hacer un push a tablero
 * ! despues de inicializarlo y se lo come con patatas.
 */

//Tres en raya

//union type
type CellValue = 'X' | 'O';

type GameBoard = readonly [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue]
]

const _tablero: GameBoard = [
    ['X', 'O', 'X'],
    ['O', 'O', 'X'],
    ['X', 'X', 'O']
] 

//tablero.push(['X','X','X']);  //SE LO COME CON PATATAS

//Solucion: hacer la tupla readonly, sin el readonly se podría hacer el push